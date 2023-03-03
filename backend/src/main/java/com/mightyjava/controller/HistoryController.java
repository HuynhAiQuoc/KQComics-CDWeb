package com.mightyjava.controller;

import com.mightyjava.dto.HistoryDTO;
import com.mightyjava.service.IHistoryService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/history")
public class HistoryController {
    private final IHistoryService historyService;

    public HistoryController(IHistoryService historyService) {
        this.historyService = historyService;
    }

    @PostMapping(value = "/add", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addHistory(@RequestBody HistoryDTO history) {
        HistoryDTO result= this.historyService.addHistory(history);
        return ResponseEntity.ok(result);
    }

    @PostMapping(value = "/histories")
    public ResponseEntity<List<HistoryDTO>> getComments(@RequestParam Long userId) {
        List<HistoryDTO> historyList = historyService.getHistoryList(userId);
        return ResponseEntity.ok(historyList);
    }

    @PostMapping(value="/history_comic")
    public ResponseEntity<HistoryDTO> getComic(@RequestBody Map<String, Object> object){
        long userId = ((Number) object.get("userId")).longValue();
        long titleNo = ((Number) object.get("titleNo")).longValue();
        return ResponseEntity.ok(historyService.getComic(userId, titleNo));

    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        historyService.delete(id);
    }

}
