package com.mightyjava.resource.impl;

import com.mightyjava.domain.Comment;
import com.mightyjava.domain.History;
import com.mightyjava.service.IHistoryService;
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
@RequestMapping("/history")
@CrossOrigin(origins = "http://localhost:3000")
public class HistoryResourceImpl {

    @Autowired
    private IHistoryService historyService;

    @PostMapping(value = "/add", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> addHistory(@RequestBody History history) {
        JSONObject jsonObject = new JSONObject();
        try {
            historyService.addHistory(history);
            jsonObject.put("message", "success");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(jsonObject.toString(), HttpStatus.CREATED);
    }

    @PostMapping(value = "/histories", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getComments(@RequestBody Map<String, Object> userIdObject) {
        long userId = ((Number) userIdObject.get("userId")).longValue();
        List<History> historyList = historyService.getHistoryList(userId);
        List<JSONObject> entities = new ArrayList<>();
        try {
            for (History h : historyList) {
                JSONObject entity = new JSONObject();
                entity.put("id", h.getId());
                entity.put("titleNo", h.getTitleNo());
                entity.put("episodeNo", h.getEpisodeNo());
                entity.put("userId", h.getUserId());
                entities.add(entity);
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(entities.toString(), HttpStatus.OK);
    }

    @PostMapping(value="/history_comic", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<History> getComic(@RequestBody Map<String, Object> object){
        long userId = ((Number) object.get("userId")).longValue();
        long titleNo = ((Number) object.get("titleNo")).longValue();
        return new ResponseEntity<>(historyService.getComic(userId, titleNo), HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        historyService.delete(id);
    }

}
