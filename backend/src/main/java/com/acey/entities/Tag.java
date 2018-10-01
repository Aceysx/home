package com.acey.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "t_tag")
@Setter
@Getter
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String content;
    private Date time;
    private String bgColor;
    @JsonIgnoreProperties(value = { "tags" })
    @ManyToMany(mappedBy = "tags",cascade = CascadeType.MERGE)
    private List<Blog> blogs;
}
