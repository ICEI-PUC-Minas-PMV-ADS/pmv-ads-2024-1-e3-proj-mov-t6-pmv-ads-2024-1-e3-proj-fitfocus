package me.magi.fitcore.api.dto;

import me.magi.fitcore.model.entity.enums.Behavior;
import me.magi.fitcore.model.entity.enums.BloodType;

public class UserRequestDto {

    private String name;

    private String cellNumber;

    private Behavior behavior;

    private Boolean cfc;

    private String cpf;

    private String address;

    private String district;

    private BloodType bloodType;

    private String idNumber;


    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCellNumber() {
        return cellNumber;
    }

    public void setCellNumber(String cellNumber) {
        this.cellNumber = cellNumber;
    }

    public Behavior getBehavior() {
        return behavior;
    }

    public void setBehavior(Behavior behavior) {
        this.behavior = behavior;
    }

    public Boolean getCfc() {
        return cfc;
    }

    public void setCfc(Boolean cfc) {
        this.cfc = cfc;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public BloodType getBloodType() {
        return bloodType;
    }

    public void setBloodType(BloodType bloodType) {
        this.bloodType = bloodType;
    }
}