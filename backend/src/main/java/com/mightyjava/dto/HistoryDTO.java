package com.mightyjava.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class HistoryDTO {
    private Long id;
    private Long titleNo;
    private Long episodeNo;
    private Long userId;
}
