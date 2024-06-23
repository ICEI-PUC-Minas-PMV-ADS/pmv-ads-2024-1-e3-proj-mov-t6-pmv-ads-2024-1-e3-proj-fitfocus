package me.magi.fitcore.api.controller.post;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import me.magi.fitcore.config.StringEscapeUtil;
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
    private final ObjectMapper objectMapper;

    public PostController(PostServiceImpl service, ObjectMapper objectMapper) {
        this.service = service;
        this.objectMapper = objectMapper;
    }

    @GetMapping("/post")
    public List<PostEntity> GetAllRecipe () {
        return (List<PostEntity>) service.listAllPost();
    }
    @PostMapping("/post")
    @ResponseStatus(HttpStatus.CREATED)
    public void addNewPost(@RequestBody PostEntity post) {
        try {
            // Serializar o objeto para JSON para garantir que os caracteres sejam escapados
            String jsonString = objectMapper.writeValueAsString(post);
            PostEntity escapedPost = objectMapper.readValue(jsonString, PostEntity.class);
            service.addNewPost(escapedPost);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Erro ao processar JSON", e);
        }
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

    @PostMapping("/post/update")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void UpdateRecipe(@RequestBody PostEntity post) {

    }


}
