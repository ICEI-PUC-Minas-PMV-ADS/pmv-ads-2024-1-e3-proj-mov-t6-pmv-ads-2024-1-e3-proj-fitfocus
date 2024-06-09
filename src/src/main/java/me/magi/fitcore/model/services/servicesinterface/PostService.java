package me.magi.fitcore.model.services.servicesinterface;

import me.magi.fitcore.model.entity.PostEntity;
import me.magi.fitcore.model.entity.RecipeEntity;

import java.util.Optional;

public interface PostService {

    public void addNewPost(PostEntity post);

    public void removePost(Long id);

    public Optional<PostEntity> readRecipe(Long id);

    public Iterable<PostEntity> listAllPost();

    public Optional<PostEntity> updatePostById(Long id);
}
