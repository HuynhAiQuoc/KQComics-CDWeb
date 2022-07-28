package com.mightyjava.repository;

import com.mightyjava.domain.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoryRepository extends JpaRepository<History, Long> {

    @Query(value = "SELECT * FROM HISTORY WHERE user_id=?1 and title_no=?2", nativeQuery = true)
    History checkExistHistory(long userId, long titleNo);

//    @Modifying
//    @Query(value = "update history set episode_no=?1 where id=?2", nativeQuery = true)
//    void updateHistory(long episodeNo, long id);


    @Query(value = "SELECT * FROM history WHERE user_id=?1", nativeQuery = true)
    List<History> getHistoryByUserId(long userId);
}
