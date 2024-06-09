package me.magi.fitcore.model.services;

import me.magi.fitcore.model.entity.PostEntity;
import me.magi.fitcore.model.entity.RecipeEntity;
import me.magi.fitcore.model.repository.PostRepository;
import me.magi.fitcore.model.services.servicesinterface.PostService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {

    private final PostRepository repository;

    public PostServiceImpl(PostRepository repository) {
        this.repository = repository;
    }


    @Override
    public void addNewPost(PostEntity post) {
        repository.save(post);

    }

    @Override
    public void removePost(Long id) {

    }

    @Override
    public Optional<PostEntity> readRecipe(Long id) {
        return repository.findById(id);
    }

    @Override
    public Iterable<PostEntity> listAllPost() {
        return repository.findAll();
    }

    public Optional<PostEntity> updatePostById(Long id) {
        return repository.findById(id);
    }
}
