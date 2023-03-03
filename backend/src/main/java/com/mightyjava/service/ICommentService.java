package com.mightyjava.service;

import com.mightyjava.domain.Comment;
import com.mightyjava.dto.CommentDTO;
import com.mightyjava.dto.CreateCommentDTO;

import java.util.List;

public interface ICommentService {

    CommentDTO addComment(CreateCommentDTO comment);
    List<CommentDTO> getCommentsByTitleNo(long titleNo);
}
