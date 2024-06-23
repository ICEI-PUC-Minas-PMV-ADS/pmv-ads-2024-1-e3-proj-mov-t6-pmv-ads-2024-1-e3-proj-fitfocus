package me.magi.fitcore.model.services;

import me.magi.fitcore.model.entity.ContentCreatorEntity;
import me.magi.fitcore.model.entity.UserEntity;
import me.magi.fitcore.model.repository.ContentCreatorRepository;
import me.magi.fitcore.model.services.servicesinterface.ContentCreatorService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContentCreatorServiceImpl implements ContentCreatorService {

    private final ContentCreatorRepository contentCreatorRepository;

    public ContentCreatorServiceImpl(ContentCreatorRepository contentCreatorRepository) {
        this.contentCreatorRepository = contentCreatorRepository;
    }


    @Override
    public void addNewContentCreator(ContentCreatorEntity contentCreator) {
        contentCreatorRepository.save(contentCreator);
    }

    @Override
    public void removeContentCreator(Long id) {
        contentCreatorRepository.deleteById(id);
    }

    @Override
    public UserEntity readContentCreator(String id) {
        return null;
    }

    @Override
    public List<ContentCreatorEntity> listAllContentCreator() {
        return (List<ContentCreatorEntity>) contentCreatorRepository.findAll();
    }

    @Override
    public void updateContentCreatorById(Long id, ContentCreatorEntity contentCreator) {
    }

    @Override
    public ContentCreatorEntity findContentCreatorByEmail(String email) {
        return contentCreatorRepository.findContentCreatorByEmail(email);
    }

}
