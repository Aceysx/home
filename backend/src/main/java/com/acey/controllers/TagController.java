package com.acey.controllers;


import com.acey.entities.Blog;
import com.acey.entities.Tag;
import com.acey.repositories.BlogRepository;
import com.acey.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TagController {
    @Autowired
    private TagRepository tagRepository;
    @Autowired
    private BlogRepository blogRepository;

    @GetMapping("/tags")
    public ResponseEntity getTags() {
        List<Tag> tags = tagRepository.findAll();
        return new ResponseEntity(tags, HttpStatus.OK);
    }

    @PostMapping("/tags")
    public ResponseEntity addTags(@RequestBody Tag tag) {
        tag.setTime(new Date());
        tagRepository.save(tag);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/tags/{id}")
    public ResponseEntity getTagById(@PathVariable Long id) {
        return new ResponseEntity(tagRepository.findById(id).getBlogs(), HttpStatus.OK);
    }

}
