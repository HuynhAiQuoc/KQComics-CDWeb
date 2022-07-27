package com.mightyjava.domain;

import javax.persistence.*;

@Entity
@Table(name = "history")
public class History {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private Long titleNo;

    @Column(nullable = false)
    private Long episodeNo;

    @Column(nullable = false)
    private Long userId;

    public History() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTitleNo() {
        return titleNo;
    }

    public void setTitleNo(Long titleNo) {
        this.titleNo = titleNo;
    }

    public Long getEpisodeNo() {
        return episodeNo;
    }

    public void setEpisodeNo(Long episodeNo) {
        this.episodeNo = episodeNo;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
