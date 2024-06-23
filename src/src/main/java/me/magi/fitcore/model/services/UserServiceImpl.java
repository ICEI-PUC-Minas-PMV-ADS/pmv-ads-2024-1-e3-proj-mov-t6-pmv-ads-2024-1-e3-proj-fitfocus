package me.magi.fitcore.model.services;

import me.magi.fitcore.model.entity.UserEntity;
import me.magi.fitcore.model.repository.UserRepository;
import me.magi.fitcore.model.services.servicesinterface.UserService;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(
            UserRepository repository,
            PasswordEncoder passwordEncoder

    ) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void addNewUser(UserEntity input) {

        UserEntity cleanUser= new UserEntity();

        cleanUser.setName(input.getName());
        cleanUser.setEmail(input.getEmail());
        cleanUser.setPassword(passwordEncoder.encode(input.getPassword()));
        cleanUser.setRegisterDay(input.getRegisterDay());
        cleanUser.setHeight(input.getHeight());
        cleanUser.setWeight(input.getWeight());
        cleanUser.setCpf(input.getCpf());

        repository.save(cleanUser);

    }

    @Override
    public void removeUser(Long id) {
        repository.deleteById(id);
    }

    @Override
    @Cacheable("myCache")
    public UserEntity readUser(Long id) {
        return repository.findById(id).orElseThrow();
    }
    
    @Override
    @Cacheable("myCache")
    public List<UserEntity> listAllUser() {
        return (List<UserEntity>) repository.findAll();
    }

    @Override
    public UserEntity updateUser(UserEntity updateUserDTO) {
        Long id = updateUserDTO.getId();
        Optional<UserEntity> optionalUser = repository.findById(id);
        if (optionalUser.isPresent()) {
            UserEntity user = optionalUser.get();
            if (updateUserDTO.getName() != null) {
                user.setName(updateUserDTO.getName());
            }
            if (updateUserDTO.getEmail() != null) {
                user.setEmail(updateUserDTO.getEmail());
            }
            if (updateUserDTO.getPassword() != null) {
                user.setPassword(updateUserDTO.getPassword());
            }
            if (updateUserDTO.getCpf() != null) {
                user.setCpf(updateUserDTO.getCpf());
            }

            return repository.save(user);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    @Override
    public UserEntity findUserByEmailAndPassword(String email, String password) {
        var user = repository.findUserByEmail(email);
        if(!Objects.equals(user.getPassword(), password)) {

        }
        return user;
    }

    @Override
    public UserEntity findUserByEmail(String email) {
        return repository.findUserByEmail(email);
    }


}
