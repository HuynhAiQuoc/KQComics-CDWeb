package com.mightyjava.repository;

import com.mightyjava.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> getAllByTitleNo(Long titleNo);
}
