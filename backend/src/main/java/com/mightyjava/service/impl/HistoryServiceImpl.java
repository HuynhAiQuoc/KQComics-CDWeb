package com.mightyjava.service.impl;

import com.mightyjava.domain.History;
import com.mightyjava.domain.User;
import com.mightyjava.dto.HistoryDTO;
import com.mightyjava.repository.HistoryRepository;
import com.mightyjava.service.IHistoryService;
import com.mightyjava.service.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HistoryServiceImpl implements IHistoryService {
    private final HistoryRepository historyRepository;

    private final IUserService userService;

    private final ModelMapper modelMapper;

    public HistoryServiceImpl(HistoryRepository historyRepository, IUserService userService, ModelMapper modelMapper) {
        this.historyRepository = historyRepository;
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @Override
    public HistoryDTO addHistory(HistoryDTO history) {
        User user = this.userService.findById(history.getUserId()).orElse(null);
        History oldHistory = historyRepository.checkExistHistory(history.getUserId(), history.getTitleNo());
        if (oldHistory != null) {
            //update history
            oldHistory.setEpisodeNo(history.getEpisodeNo());
            oldHistory=  historyRepository.save(oldHistory);
        } else {
            // add history
            History h = new History();
            h.setTitleNo(history.getTitleNo());
            h.setEpisodeNo(history.getEpisodeNo());
            h.setUser(user);
            oldHistory=  historyRepository.save(h);
        }
        return this.modelMapper.map(oldHistory, HistoryDTO.class);
    }

    @Override
    public List<HistoryDTO> getHistoryList(long userId) {
        List<History> lists =  historyRepository.getHistoryByUserId(userId);
        return lists.stream().map(h -> this.modelMapper.map(h, HistoryDTO.class)).collect(Collectors.toList());
    }

    @Override
    public HistoryDTO getComic(long userId, long titleNo) {
        History history =  historyRepository.checkExistHistory(userId, titleNo);
        return this.modelMapper.map(history, HistoryDTO.class);
    }

    @Override
    public void delete(long id) {
        historyRepository.deleteById(id);
    }

}
