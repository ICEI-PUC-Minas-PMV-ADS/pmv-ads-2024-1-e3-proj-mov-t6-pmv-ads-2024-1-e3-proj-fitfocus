package me.magi.fitcore.model.services.servicesinterface;

import me.magi.fitcore.model.entity.RecipeEntity;

import java.util.Optional;

public interface RecipeService {

    public void addNewRecipe(RecipeEntity recipe);

    public void removeRecipe(Long id);

    public Optional<RecipeEntity> readRecipe(Long id);

    public Iterable<RecipeEntity> listAllRecipe();

    public RecipeEntity updateRecipeById(Long id, RecipeEntity recipe);

}
