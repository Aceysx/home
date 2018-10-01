package com.acey.controllers;

import com.acey.entities.Blog;
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
@RequestMapping("/api/blogs")
public class BlogController {

    @Autowired
    private BlogRepository blogRepository;

    @GetMapping
    public ResponseEntity getBlogs(@RequestParam(value = "page", defaultValue = "0") Integer page,
                                   @RequestParam(value = "size", defaultValue = "5") Integer size) {
        Sort sort = new Sort(Sort.Direction.DESC, "time");
        Pageable pageable = new PageRequest(page, size * (page + 1), sort);

        Page<Blog> blogs = blogRepository.findAll(pageable);
        return new ResponseEntity(blogs, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity getBlog(@PathVariable Long id) {
        Blog blog = blogRepository.findOne(id);
        return new ResponseEntity(blog, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity addBlog(@RequestBody Blog blog) {
        blog.setTime(new Date());
        blogRepository.save(blog);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping("")
    public ResponseEntity updateBlog(@RequestBody Blog blog) {
        blogRepository.save(blog);
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
