package me.magi.fitcore.api.controller.user;

import me.magi.fitcore.model.entity.UserEntity;
import me.magi.fitcore.model.services.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    private final UserServiceImpl service;

    public UserController(UserServiceImpl service){this.service = service;}

    @GetMapping("/user")
    public List<UserEntity> GetAllUsers () {
        return service.listAllUser();
    }
    @PostMapping("/user")
    @ResponseStatus(HttpStatus.CREATED)
    public void addNewUser(@RequestBody UserEntity user) {
        service.addNewUser(user);
    }

    @GetMapping("/user/{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public UserEntity findUserById(@PathVariable Long id) {
        return service.readUser(id);
    }

    @DeleteMapping("/user/{id}")
    @ResponseStatus(HttpStatus.GONE)
    public void DeleteUser(@PathVariable Long id) {
        service.removeUser(id);
    }

    @PatchMapping("/user/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void UpdateUser(@PathVariable Long id, @RequestBody UserEntity user) {
        service.updateUserById(id, user);
    }

    @GetMapping("/user/email")
    @ResponseStatus(HttpStatus.FOUND)
    public UserEntity findUserByEmail(@RequestParam String email) {
        return service.findUserByEmail(email);
    }

}
