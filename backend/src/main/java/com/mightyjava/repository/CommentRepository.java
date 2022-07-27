package com.mightyjava.repository;

import com.mightyjava.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query(value = "SELECT * FROM comment WHERE title_no=?1", nativeQuery = true)
    List<Comment> getCommentsByTitleNo(long titleNo);
}
