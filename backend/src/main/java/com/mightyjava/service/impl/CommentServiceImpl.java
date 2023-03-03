package com.mightyjava.service.impl;

import com.mightyjava.domain.Comment;
import com.mightyjava.domain.User;
import com.mightyjava.dto.CommentDTO;
import com.mightyjava.dto.CreateCommentDTO;
import com.mightyjava.repository.CommentRepository;
import com.mightyjava.service.ICommentService;
import com.mightyjava.service.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements ICommentService {
    private final CommentRepository commentRepository;
    private final IUserService userService;
    private final ModelMapper modelMapper;

    public CommentServiceImpl(CommentRepository commentRepository, IUserService userService, ModelMapper modelMapper) {
        this.commentRepository = commentRepository;
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @Override
    public CommentDTO addComment(CreateCommentDTO newComment) {
        User user = userService.findById(newComment.getUserId()).orElse(null);
        Comment comment = new Comment();
        comment.setContent(newComment.getContent());
        comment.setTitleNo(newComment.getTitleNo());
        comment.setDefaultCreateAt();
        comment.setUser(user);
        Comment result = commentRepository.save(comment);
        return this.modelMapper.map(result, CommentDTO.class);
    }

    @Override
    public List<CommentDTO> getCommentsByTitleNo(long titleNo) {
        List<Comment> comments = commentRepository.getCommentsByTitleNo(titleNo);
        return comments.stream().map(comment -> this.modelMapper.map(comment, CommentDTO.class)).collect(Collectors.toList());
    }


}
