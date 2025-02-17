package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")  // Enable CORS for development
public class DataController {

    @GetMapping("/data")
    public Map<String, Object> getData() {
        Map<String, Object> data = new HashMap<>();
        data.put("message", "Hello from Spring Boot backend!");
        data.put("status", "success");
        data.put("timestamp", System.currentTimeMillis());
        return data;
    }
}
