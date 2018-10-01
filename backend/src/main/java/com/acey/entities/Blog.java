package com.acey.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "t_blog")
@Setter
@Getter
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    @Column(length=10000)
    private String content;
    private Date time;
    @Column(length=10000)
    private String headImg;
    @JsonIgnoreProperties(value = { "blogs" })
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(
            name = "t_blog_tag",
            joinColumns = {@JoinColumn(name = "blog_id",referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "tag_id",referencedColumnName = "id")}
    )
    private List<Tag> tags;
}
