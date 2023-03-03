package com.mightyjava.controller;

import com.mightyjava.dto.CommentDTO;
import com.mightyjava.dto.CreateCommentDTO;
import com.mightyjava.service.ICommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {
    private final ICommentService commentService;

    public CommentController(ICommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping(value = "/add")
    public ResponseEntity<CommentDTO> addComment(@RequestBody CreateCommentDTO newComment) {
        CommentDTO comment = commentService.addComment(newComment);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }

    @GetMapping(value = "/comments")
    public ResponseEntity<List<CommentDTO>> getComments(@RequestParam Long titleNo) {
        List<CommentDTO> comments = commentService.getCommentsByTitleNo(titleNo);
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }
}
