package com.mightyjava.service.impl;

import com.mightyjava.domain.History;
import com.mightyjava.repository.HistoryRepository;
import com.mightyjava.service.IHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoryServiceImpl implements IHistoryService {

    @Autowired
    private HistoryRepository historyRepository;

    @Override
    public void addHistory(History history) {
        History oldHistory = historyRepository.checkExistHistory(history.getUserId(), history.getTitleNo());
        if (oldHistory != null) {
            //update history
            oldHistory.setEpisodeNo(history.getEpisodeNo());
            historyRepository.save(oldHistory);
        } else {
            // add history
            historyRepository.save(history);
        }
    }

    @Override
    public List<History> getHistoryList(long userId) {
        return historyRepository.getHistoryByUserId(userId);
    }

    @Override
    public History getComic(long userId, long titleNo) {
        return historyRepository.checkExistHistory(userId, titleNo);
    }

    @Override
    public void delete(long id) {
        historyRepository.deleteById(id);
    }

}
