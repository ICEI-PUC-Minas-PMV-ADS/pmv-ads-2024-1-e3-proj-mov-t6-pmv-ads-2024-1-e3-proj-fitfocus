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
        repository.deleteById(id);

    }

    @Override
    public Optional<PostEntity> readRecipe(Long id) {
        return repository.findById(id);
    }

    @Override
    public Iterable<PostEntity> listAllPost() {
        return repository.findAll();
    }

    public PostEntity updatePostById(PostEntity postEntity) {
        Optional<PostEntity> optionalPost = repository.findById(postEntity.getId());
        if (optionalPost.isPresent()) {
            PostEntity post = optionalPost.get();
            post.setTitle(postEntity.getTitle());
            post.setBodyText(postEntity.getBodyText());
            post.setImage(postEntity.getImage());
            return repository.save(post);
        } else {
            throw new RuntimeException("Post not found with id: " + postEntity.getId());
        }
    }
}
