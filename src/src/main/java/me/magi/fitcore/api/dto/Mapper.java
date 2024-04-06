package me.magi.fitcore.api.dto;

import me.magi.fitcore.model.entity.UserEntity;
import me.magi.fitcore.model.entity.enums.Behavior;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

    private final ModelMapper modelMapper;

    public Mapper (ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public static UserResponseDto forResponse(UserEntity military) {
        var newResponse = UserResponseDto.newInstance();
        newResponse.setName(military.getName());
        newResponse.setCellNumber(military.getCellNumber());
        newResponse.setBehavior(military.getBehavior());
        newResponse.setCfc(military.getCfc());
        newResponse.setCpf(military.getCpf());
        newResponse.setAddress(military.getAddress());
        newResponse.setDistrict(military.getDistrict());
        newResponse.setBloodType(military.getBloodType());
        newResponse.setIdNumber(military.getIdNumber());

        return newResponse;
    }

    public static UserEntity forEntity (UserRequestDto military) {
        var newMilitary = UserEntity.newInstance();
        newMilitary.setName(military.getName());
        newMilitary.setCellNumber(military.getCellNumber());
        newMilitary.setCpf(military.getCpf());
        newMilitary.setAddress(military.getAddress());
        newMilitary.setDistrict(military.getDistrict());
        newMilitary.setBloodType(military.getBloodType());
        newMilitary.setIdNumber(military.getIdNumber());

        newMilitary.setBehavior(Behavior.Bom);
        newMilitary.setCfc(Boolean.FALSE);

        return newMilitary;
    }

}
