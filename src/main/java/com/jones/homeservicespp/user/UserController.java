package com.jones.homeservicespp.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
    @RequestMapping("/api")
    public class UserController {
        @Autowired
        UserRepository userRepository;

        @GetMapping("/user")
        public List<User> getAllUsers() {
            return this.userRepository.findAll();
        }

        @PostMapping("/user")
        public User addUser(@RequestBody User user) {
            return this.userRepository.save(user);
        }

        @PatchMapping("/user/{id}")
        public ResponseEntity<User> updateUser(@PathVariable("id") String id, @RequestBody User user) {
            Optional<User> userData = userRepository.findById(id);
            if (userData.isPresent()) {
                User savedUser = userData.get();
                if (user.getFirst_name() != null) savedUser.setFirst_name(user.getFirst_name());
                if (user.getLast_name() != null) savedUser.setLast_name(user.getLast_name());
                if (user.getEmail() != null) savedUser.setEmail(user.getEmail());

                User updatedUser = userRepository.save(savedUser);
                return new ResponseEntity<>(updatedUser, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") String id) {
        System.out.println("Delete User with ID = " + id + "...");

        try {
            this.userRepository.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("User has been deleted!", HttpStatus.OK);
    }
}