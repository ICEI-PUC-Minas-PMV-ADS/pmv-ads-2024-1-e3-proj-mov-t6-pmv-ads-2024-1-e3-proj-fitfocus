package me.magi.fitcore.model.services.jwt;

import me.magi.fitcore.dto.LoginDto;
import me.magi.fitcore.model.entity.ContentCreatorEntity;
import me.magi.fitcore.model.repository.ContentCreatorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationContentCreatorService {
    private final ContentCreatorRepository contentCreatorRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationUserService.class);


    public AuthenticationContentCreatorService(
            ContentCreatorRepository userRepository,
            AuthenticationManager authenticationManager,
            PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.contentCreatorRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    public ContentCreatorEntity authenticate(ContentCreatorEntity input) {
        logger.info(input.getEmail());
        logger.info(input.getPassword());

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        input.getEmail(),
                        input.getPassword()
                )
        );

        logger.info(input.getEmail());
        logger.info(input.getPassword());




        return (ContentCreatorEntity) contentCreatorRepository.findContentCreatorByEmail(input.getEmail());
    }

}
