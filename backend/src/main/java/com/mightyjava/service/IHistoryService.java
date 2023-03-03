package com.mightyjava.service;

import com.mightyjava.domain.History;
import com.mightyjava.dto.HistoryDTO;

import java.util.List;

public interface IHistoryService {

    HistoryDTO addHistory(HistoryDTO history);

    List<HistoryDTO> getHistoryList(long userId);

    HistoryDTO getComic(long userId, long titleNo);

    void delete(long id);
}
