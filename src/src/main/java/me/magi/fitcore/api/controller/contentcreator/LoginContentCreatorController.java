package me.magi.fitcore.api.controller.contentcreator;

import me.magi.fitcore.dto.LoginDto;
import me.magi.fitcore.dto.pojo.LoginContentCreatorResponse;
import me.magi.fitcore.dto.pojo.LoginUserResponse;
import me.magi.fitcore.model.entity.ContentCreatorEntity;
import me.magi.fitcore.model.entity.UserEntity;
import me.magi.fitcore.model.services.ContentCreatorServiceImpl;
import me.magi.fitcore.model.services.UserServiceImpl;
import me.magi.fitcore.model.services.jwt.AuthenticationContentCreatorService;
import me.magi.fitcore.model.services.jwt.AuthenticationUserService;
import me.magi.fitcore.model.services.jwt.JwtService;
import org.apache.catalina.Authenticator;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class LoginContentCreatorController {

    private final JwtService jwtService;

    private final AuthenticationContentCreatorService authenticationContentCreatorService;

    private final ContentCreatorServiceImpl service;

    public LoginContentCreatorController(JwtService jwtService, AuthenticationContentCreatorService authenticationUserService, ContentCreatorServiceImpl service) {
        this.jwtService = jwtService;
        this.authenticationContentCreatorService = authenticationUserService;
        this.service = service;
    }

    @PostMapping("/contentCreator/login")
    public ResponseEntity<LoginContentCreatorResponse> authenticate(@RequestBody ContentCreatorEntity loginUserDto) {
        ContentCreatorEntity authenticatedUser = authenticationContentCreatorService.authenticate(loginUserDto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginContentCreatorResponse loginContentCreatorResponse = new LoginContentCreatorResponse();
        loginContentCreatorResponse.setExpiresIn(jwtService.getExpirationTime());
        loginContentCreatorResponse.setToken(jwtToken);
        loginContentCreatorResponse.setObject(service.findContentCreatorByEmail(loginUserDto.getEmail()));

        return ResponseEntity.ok(loginContentCreatorResponse);
    }

}
