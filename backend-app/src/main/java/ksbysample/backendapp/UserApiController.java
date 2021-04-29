package ksbysample.backendapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserApiController {

    @GetMapping("/{id}")
    public User findById(@PathVariable String id) {
        return User.builder()
                .name(String.format("Tanaka Taro No.%s", id))
                .age(25)
                .build();
    }

}
