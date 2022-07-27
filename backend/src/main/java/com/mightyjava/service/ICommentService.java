package com.mightyjava.service;

import com.mightyjava.domain.Comment;

import java.util.List;

public interface ICommentService {

    Comment addComment(Comment comment);
    List<Comment> getCommentsByTitleNo(long titleNo);
}
