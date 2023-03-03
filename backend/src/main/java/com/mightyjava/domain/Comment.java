package com.mightyjava.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long titleNo;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private String createdAt;

   @ManyToOne
   @JoinColumn(name="userId")
   private User user;

    public void setDefaultCreateAt() {
        String pattern = "'on' MMMM dd, yyyy 'at' hh:mm aaa";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern, new Locale("en", "EN"));
        this.createdAt = simpleDateFormat.format(new Date());
    }

}
