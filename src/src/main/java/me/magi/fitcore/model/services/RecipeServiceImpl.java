package me.magi.fitcore.model.services;

import me.magi.fitcore.model.entity.RecipeEntity;
import me.magi.fitcore.model.repository.RecipeRepository;
import me.magi.fitcore.model.services.servicesinterface.RecipeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RecipeServiceImpl implements RecipeService {

    private final RecipeRepository repository;

    public RecipeServiceImpl(RecipeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void addNewRecipe(RecipeEntity recipe) {
        repository.save(recipe);
    }

    @Override
    public void removeRecipe(Long id) {

    }

    @Override
    public Optional<RecipeEntity> readRecipe(Long id) {
        return repository.findById(id);
    }

    @Override
    public List<RecipeEntity> listAllRecipe() {
        return (List<RecipeEntity>) repository.findAll();
    }

    @Override
    public RecipeEntity updateRecipeById(Long id, RecipeEntity recipe) {

        return recipe;
    }
}

