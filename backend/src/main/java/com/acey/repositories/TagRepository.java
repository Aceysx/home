package com.acey.repositories;

import com.acey.entities.Blog;
import com.acey.entities.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag,Long>{
}
