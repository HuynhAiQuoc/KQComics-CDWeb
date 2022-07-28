package com.mightyjava.resource.impl;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/history")
@CrossOrigin(origins = "http://localhost:3000")
public class HistoryResourceImpl {

}
