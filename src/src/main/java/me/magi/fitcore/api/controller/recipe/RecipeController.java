package me.magi.fitcore.api.controller.recipe;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import me.magi.fitcore.config.StringEscapeUtil;
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
    private final ObjectMapper objectMapper;


    public RecipeController(RecipeServiceImpl service, ObjectMapper objectMapper) {
        this.service = service;
        this.objectMapper = objectMapper;
    }

    @GetMapping("/recipe")
    public List<RecipeEntity> GetAllRecipe () {
        return service.listAllRecipe();
    }
    @PostMapping("/recipe")
    @ResponseStatus(HttpStatus.CREATED)
    public void addNewRecipe(@RequestBody RecipeEntity recipe) {
        System.out.println(recipe.toString());
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

    @PostMapping("/recipe/update")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void UpdateRecipe(@RequestBody RecipeEntity recipe) {
        service.updateRecipeById(recipe);
    }

}
