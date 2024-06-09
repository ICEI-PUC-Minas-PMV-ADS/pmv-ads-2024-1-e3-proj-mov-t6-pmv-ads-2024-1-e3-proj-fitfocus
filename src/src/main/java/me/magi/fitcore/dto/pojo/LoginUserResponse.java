package me.magi.fitcore.dto.pojo;

import me.magi.fitcore.model.entity.UserEntity;

public class LoginUserResponse {
    private String token;

    private long expiresIn;

    private UserEntity object;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public long getExpiresIn() {
        return expiresIn;
    }

    public void setExpiresIn(long expiresIn) {
        this.expiresIn = expiresIn;
    }

    public UserEntity getObject() {
        return object;
    }

    public void setObject(UserEntity object) {
        this.object = object;
    }
}
