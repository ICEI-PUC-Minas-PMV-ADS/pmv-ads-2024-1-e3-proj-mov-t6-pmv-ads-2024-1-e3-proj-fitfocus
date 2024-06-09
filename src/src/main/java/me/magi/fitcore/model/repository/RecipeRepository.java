package me.magi.fitcore.model.repository;

import me.magi.fitcore.model.entity.RecipeEntity;
import me.magi.fitcore.model.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecipeRepository extends CrudRepository<RecipeEntity, Long> {
}
