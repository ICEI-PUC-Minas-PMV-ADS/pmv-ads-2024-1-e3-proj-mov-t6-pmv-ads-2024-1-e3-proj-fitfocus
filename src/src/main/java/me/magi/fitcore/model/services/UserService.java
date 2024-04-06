package me.magi.fitcore.model.services;

import me.magi.fitcore.api.dto.UserRequestDto;
import me.magi.fitcore.model.entity.UserEntity;
import me.magi.fitcore.model.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements me.magi.fitcore.model.services.servicesinterface.UserService {
    private final UserRepository repository;

    public UserService(UserRepository repository){
        this.repository = repository;
    }

    @Override
    public void addNewMilitary(UserEntity military) {
        repository.save(military);
    }

    @Override
    public void removeMilitary(String id) {
        repository.deleteByIdNumber(id);
    }

    @Override
    public UserEntity readMilitary(String id) {
        return repository.findByIdNumber(id).orElseThrow();
    }
    
    @Override
    public List<UserEntity> listAllMilitary() {
        return (List<UserEntity>) repository.findAll();
    }

    @Override
    public void updateMilitaryById(String id, UserRequestDto userRequestDto) {
        var userInDB = repository.findByIdNumber(id).orElseThrow();
        userInDB.setAddress(userRequestDto.getAddress());
        userInDB.setBehavior(userRequestDto.getBehavior());
        userInDB.setCpf(userRequestDto.getCpf());
        userInDB.setDistrict(userRequestDto.getDistrict());
        userInDB.setName(userRequestDto.getName());
        userInDB.setBloodType(userRequestDto.getBloodType());
        userInDB.setCellNumber(userRequestDto.getCellNumber());

        repository.save(userInDB);


    }
}
