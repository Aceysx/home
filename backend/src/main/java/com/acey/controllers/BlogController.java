package com.acey.controllers;

import com.acey.entities.Blog;
import com.acey.repositories.BlogRepository;
import com.acey.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BlogController {

    @Autowired
    private BlogRepository blogRepository;
    @Autowired
    private TagRepository tagRepository;

    @GetMapping("/blogs")
    public ResponseEntity getBlogs() {
        List<Blog> blogs = blogRepository.findAll();
        return new ResponseEntity(blogs, HttpStatus.OK);
    }

    @GetMapping("/blogs/{id}")
    public ResponseEntity getBlog(@PathVariable Long id) {
        Blog blog = blogRepository.findOne(id);
        return new ResponseEntity(blog, HttpStatus.OK);
    }

    @PostMapping("/blogs")
    public ResponseEntity addBlog(@RequestBody Blog blog) {
        blogRepository.save(blog);
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
