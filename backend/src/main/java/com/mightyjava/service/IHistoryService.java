package com.mightyjava.service;

import com.mightyjava.domain.History;

import java.util.List;

public interface IHistoryService {

    void addHistory(History history);

    List<History> getHistoryList(long userId);

    History getComic(long userId, long titleNo);

    void delete(long id);
}
