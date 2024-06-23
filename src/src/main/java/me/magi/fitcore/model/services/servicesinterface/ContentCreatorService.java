package me.magi.fitcore.model.services.servicesinterface;

import me.magi.fitcore.model.entity.ContentCreatorEntity;
import me.magi.fitcore.model.entity.UserEntity;

import java.util.List;

public interface ContentCreatorService {

    void addNewContentCreator(ContentCreatorEntity contentCreator);

    void removeContentCreator(Long id);

    UserEntity readContentCreator(String id);

    List<ContentCreatorEntity> listAllContentCreator();

    void updateContentCreatorById(Long id, ContentCreatorEntity contentCreator);

    ContentCreatorEntity findContentCreatorByEmail(String email);

}
