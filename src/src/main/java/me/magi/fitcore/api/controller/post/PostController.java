package me.magi.fitcore.api.controller.post;

import me.magi.fitcore.model.entity.PostEntity;
import me.magi.fitcore.model.entity.RecipeEntity;
import me.magi.fitcore.model.services.PostServiceImpl;
import me.magi.fitcore.model.services.RecipeServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class PostController {
    private final PostServiceImpl service;

    public PostController(PostServiceImpl service) {
        this.service = service;
    }

    @GetMapping("/post")
    public List<PostEntity> GetAllRecipe () {
        return (List<PostEntity>) service.listAllPost();
    }
    @PostMapping("/post")
    @ResponseStatus(HttpStatus.CREATED)
    public void addNewRecipe(@RequestBody PostEntity post) {
        service.addNewPost(post);
    }

    @GetMapping("/post/{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Optional<PostEntity> findRecipeById(@PathVariable Long id) {
        return service.readRecipe(id);
    }

    @DeleteMapping("/post/{id}")
    @ResponseStatus(HttpStatus.GONE)
    public void DeleteRecipe(@PathVariable Long id) {
        service.removePost(id);
    }

    @PatchMapping("/post/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void UpdateRecipe(@PathVariable Long id, @RequestBody PostEntity post) {

    }


}
