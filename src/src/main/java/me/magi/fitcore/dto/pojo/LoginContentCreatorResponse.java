package me.magi.fitcore.dto.pojo;

import me.magi.fitcore.model.entity.ContentCreatorEntity;
import me.magi.fitcore.model.entity.UserEntity;

public class LoginContentCreatorResponse {
    private String token;

    private long expiresIn;

    private ContentCreatorEntity object;

    public ContentCreatorEntity getObject() {
        return object;
    }

    public void setObject(ContentCreatorEntity object) {
        this.object = object;
    }

    public long getExpiresIn() {
        return expiresIn;
    }

    public void setExpiresIn(long expiresIn) {
        this.expiresIn = expiresIn;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
