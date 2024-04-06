package me.magi.fitcore.model.repository;

import me.magi.fitcore.model.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface UserRepository extends CrudRepository<UserEntity, Long> {

    Optional<UserEntity> findByIdNumber(String id);

    void deleteByIdNumber(String id);
}
