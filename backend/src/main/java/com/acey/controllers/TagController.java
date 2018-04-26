package com.acey.controllers;


import com.acey.entities.Blog;
import com.acey.entities.Tag;
import com.acey.repositories.BlogRepository;
import com.acey.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    public ResponseEntity getTagById(@PathVariable Long id, @RequestParam(value = "page", defaultValue = "0") Integer page,
                                     @RequestParam(value = "size", defaultValue = "5") Integer size) {
        Sort sort = new Sort(Sort.Direction.DESC, "time");
        Pageable pageable = new PageRequest(0, size * (page + 1), sort);
        if (id == 0) {
            return new ResponseEntity(blogRepository.findAll(pageable), HttpStatus.OK);
        }
        return new ResponseEntity(tagRepository.findById(id).getBlogs(), HttpStatus.OK);
    }
}
