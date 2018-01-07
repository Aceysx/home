package com.acey.resolvers;

import com.acey.annotations.Auth;
import com.acey.entities.User;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

public class AuthResolver implements HandlerMethodArgumentResolver {
    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.getParameterAnnotation(Auth.class) != null;
    }

    @Override
    public User resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        String username = webRequest.getHeader("username");
        String id = webRequest.getHeader("id");
        User current = new User();
        current.setId(Long.valueOf(id));
        current.setUsername(username);
        return current;
    }
}
