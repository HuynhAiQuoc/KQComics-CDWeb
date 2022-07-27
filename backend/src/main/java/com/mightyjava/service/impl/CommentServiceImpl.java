package com.mightyjava.service.impl;

import com.mightyjava.domain.Comment;
import com.mightyjava.repository.CommentRepository;
import com.mightyjava.repository.UserRepository;
import com.mightyjava.service.ICommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements ICommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public Comment addComment(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public List<Comment> getCommentsByTitleNo(long titleNo) {
        return commentRepository.getCommentsByTitleNo(titleNo);
    }


}
