package me.magi.fitcore.api.controller.user;

import me.magi.fitcore.dto.LoginDto;
import me.magi.fitcore.dto.pojo.LoginUserResponse;
import me.magi.fitcore.model.entity.UserEntity;
import me.magi.fitcore.model.services.UserServiceImpl;
import me.magi.fitcore.model.services.jwt.AuthenticationUserService;
import me.magi.fitcore.model.services.jwt.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class LoginUserController {
    private final JwtService jwtService;

    private final AuthenticationUserService authenticationUserService;
    private final UserServiceImpl service;


    public LoginUserController(JwtService jwtService, AuthenticationUserService authenticationUserService, UserServiceImpl service) {
        this.jwtService = jwtService;
        this.authenticationUserService = authenticationUserService;
        this.service = service;
    }

    @PostMapping("/user/login")
    public ResponseEntity<LoginUserResponse> authenticate(@RequestBody LoginDto loginUserDto) {
        UserEntity authenticatedUser = authenticationUserService.authenticate(loginUserDto);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginUserResponse loginUserResponse = new LoginUserResponse();
        loginUserResponse.setExpiresIn(jwtService.getExpirationTime());
        loginUserResponse.setToken(jwtToken);
        loginUserResponse.setObject(service.findUserByEmail(loginUserDto.getEmail()));

        return ResponseEntity.ok(loginUserResponse);
    }

}