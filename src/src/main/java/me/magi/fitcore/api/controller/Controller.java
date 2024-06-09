package me.magi.fitcore.api.controller;

import me.magi.fitcore.model.entity.UserEntity;
import me.magi.fitcore.model.services.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1")
public class Controller {

    private final UserServiceImpl service;

    public Controller(UserServiceImpl service){this.service = service;}

    @GetMapping("/user")
    public List<UserEntity> GetAllMilitary () {
        return service.listAllUser();
    }

    @PostMapping("/user")
    @ResponseStatus(HttpStatus.CREATED)
    public void addNewMilitary(@RequestBody UserEntity user) {
        service.addNewUser(user);
    }

    @GetMapping("/user/{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public UserEntity findMilitaryById(@PathVariable Long id) {
        return service.readUser(id);
    }

    @DeleteMapping("/user/{id}")
    @ResponseStatus(HttpStatus.GONE)
    public void DeleteMilitary(@PathVariable Long id) {
        service.removeUser(id);
    }

    @PatchMapping("/user/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void UpdateMilitary(@PathVariable Long id, @RequestBody UserEntity user) {
        service.updateUserById(id, user);
    }

}
