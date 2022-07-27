package com.mightyjava.resource.impl;

import com.mightyjava.domain.Comment;
import com.mightyjava.domain.User;
import com.mightyjava.repository.UserRepository;
import com.mightyjava.service.ICommentService;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentResourceImpl {

    @Autowired
    private ICommentService commentService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping(value = "/add", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Comment> addComment(@RequestBody Map<String, Object> commentObject) {
        Comment comment = new Comment();
        String content = (String) commentObject.get("content");
        long userId = ((Number) commentObject.get("userId")).longValue();
        long titleNo = ((Number) commentObject.get("titleNo")).longValue();
        User user = userRepository.findById(userId);
        comment.setContent(content);
        comment.setDefaultCreateAt();
        comment.setUserId(userId);
        comment.setUsername(user.getName());
        comment.setTitleNo(titleNo);
        return new ResponseEntity<>(commentService.addComment(comment), HttpStatus.CREATED);
    }

    @PostMapping(value = "/comments", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getComments(@RequestBody Map<String, Object> titleNoObject) {
        long titleNo = ((Number) titleNoObject.get("titleNo")).longValue();
        List<Comment> comments = commentService.getCommentsByTitleNo(titleNo);
        List<JSONObject> entities = new ArrayList<>();
        try {
            for (Comment c : comments) {
                JSONObject entity = new JSONObject();
                entity.put("id", c.getId());
                entity.put("content", c.getContent());
                entity.put("createAt", c.getCreatedAt());
                entity.put("username", c.getUsername());
                entity.put("titleNo", c.getTitleNo());
                entity.put("userId", c.getUserId());
                entities.add(entity);
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(entities.toString(), HttpStatus.OK);
    }
}
