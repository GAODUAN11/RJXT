package com.graduateplatform.controller;

import com.graduateplatform.dto.request.LoginRequest;
import com.graduateplatform.dto.request.RegisterRequest;
import com.graduateplatform.dto.response.ApiResponse;
import com.graduateplatform.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ApiResponse<?> register(@Valid @RequestBody RegisterRequest req) {
        return ApiResponse.ok(authService.register(req), "注册成功");
    }

    @PostMapping("/login")
    public ApiResponse<?> login(@Valid @RequestBody LoginRequest req) {
        return ApiResponse.ok(authService.login(req), "登录成功");
    }

    @GetMapping("/me")
    public ApiResponse<?> me(Authentication auth) {
        Long userId = (Long) auth.getPrincipal();
        return ApiResponse.ok(authService.getMe(userId));
    }

    @PostMapping("/logout")
    public ApiResponse<?> logout(Authentication auth) {
        Long userId = (Long) auth.getPrincipal();
        authService.logout(userId);
        return ApiResponse.ok(null, "已登出");
    }
}
