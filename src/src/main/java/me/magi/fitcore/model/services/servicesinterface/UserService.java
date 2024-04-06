package me.magi.fitcore.model.services.servicesinterface;

import me.magi.fitcore.api.dto.UserRequestDto;
import me.magi.fitcore.model.entity.UserEntity;

import java.util.List;

public interface UserService {

    public void addNewMilitary(UserEntity military);

    public void removeMilitary(String id);

    public UserEntity readMilitary(String id);
    
    public List<UserEntity> listAllMilitary();

    public void updateMilitaryById(String id, UserRequestDto userRequestDto);
}
