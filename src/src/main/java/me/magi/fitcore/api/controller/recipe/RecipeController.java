package me.magi.fitcore.api.controller.recipe;

import me.magi.fitcore.model.entity.RecipeEntity;
import me.magi.fitcore.model.services.RecipeServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class RecipeController {

    private final RecipeServiceImpl service;


    public RecipeController(RecipeServiceImpl service) {
        this.service = service;
    }

    @GetMapping("/recipe")
    public List<RecipeEntity> GetAllRecipe () {
        return service.listAllRecipe();
    }
    @PostMapping("/recipe")
    @ResponseStatus(HttpStatus.CREATED)
    public void addNewRecipe(@RequestBody RecipeEntity recipe) {
        service.addNewRecipe(recipe);
    }

    @GetMapping("/recipe/{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Optional<RecipeEntity> findRecipeById(@PathVariable Long id) {
        return service.readRecipe(id);
    }

    @DeleteMapping("/recipe/{id}")
    @ResponseStatus(HttpStatus.GONE)
    public void DeleteRecipe(@PathVariable Long id) {
        service.removeRecipe(id);
    }

    @PatchMapping("/recipe/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void UpdateRecipe(@PathVariable Long id, @RequestBody RecipeEntity recipe) {
        service.updateRecipeById(id, recipe);
    }

}
