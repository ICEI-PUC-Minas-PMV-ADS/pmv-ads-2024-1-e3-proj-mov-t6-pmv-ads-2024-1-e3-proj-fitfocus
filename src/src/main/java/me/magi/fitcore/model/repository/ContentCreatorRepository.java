package me.magi.fitcore.model.repository;

import me.magi.fitcore.model.entity.ContentCreatorEntity;
import me.magi.fitcore.model.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ContentCreatorRepository extends CrudRepository<ContentCreatorEntity, Long> {
    ContentCreatorEntity findContentCreatorByEmail(String email);

    Optional<ContentCreatorEntity> findByEmail(String email);

}
