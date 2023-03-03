package com.mightyjava.mapper;

import com.mightyjava.domain.Comment;
import com.mightyjava.domain.History;
import com.mightyjava.dto.CommentDTO;
import com.mightyjava.dto.HistoryDTO;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConfigMapper {
    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setSkipNullEnabled(true);

        TypeMap<Comment, CommentDTO> commentMapper = modelMapper.createTypeMap(Comment.class, CommentDTO.class);
        commentMapper.addMapping(src -> src.getUser().getUsername(),CommentDTO::setUsername);

        TypeMap<History, HistoryDTO> historyMapper = modelMapper.createTypeMap(History.class, HistoryDTO.class);
        historyMapper.addMapping(src -> src.getUser().getId(), HistoryDTO::setUserId);

        return modelMapper;
    }
}
