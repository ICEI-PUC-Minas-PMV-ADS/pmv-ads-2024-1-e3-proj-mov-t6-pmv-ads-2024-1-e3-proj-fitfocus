package me.magi.fitcore.config;


import me.magi.fitcore.model.entity.ContentCreatorEntity;
import me.magi.fitcore.model.entity.CustomUserDetails;
import me.magi.fitcore.model.entity.UserEntity;
import me.magi.fitcore.model.repository.ContentCreatorRepository;
import me.magi.fitcore.model.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.SecurityConfig;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class ApplicationConfiguration {
    private final UserRepository userRepository;

    private final ContentCreatorRepository contentCreatorRepository;

    public ApplicationConfiguration(UserRepository userRepository, ContentCreatorRepository contentCreatorRepository) {
        this.userRepository = userRepository;
        this.contentCreatorRepository = contentCreatorRepository;
    }


    @Bean
    public UserDetailsService userDetailsService() {
        return username -> {
            UserEntity user = userRepository.findByEmail(username).orElse(null);
            if (user != null) {
                return new CustomUserDetails(user.getEmail(), user.getPassword(), user.getAuthorities());
            } else {
                ContentCreatorEntity contentCreator = contentCreatorRepository.findByEmail(username).orElse(null);
                if (contentCreator != null) {
                    return new CustomUserDetails(contentCreator.getEmail(), contentCreator.getPassword(), contentCreator.getAuthorities());
                } else {
                    throw new UsernameNotFoundException("User not found");
                }
            }
        };
    }


    @Bean
    BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider;
    }
}