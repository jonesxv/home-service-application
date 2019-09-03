package com.jones.homeservicespp.categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/category")
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @PostMapping("/category")
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }
}
