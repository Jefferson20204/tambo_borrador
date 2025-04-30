package com.Login.Backend.auth.config;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;
import com.Login.Backend.auth.entities.Authority;
import com.Login.Backend.auth.repositories.AuthorityRepository;

@Component
public class AuthorityDataLoader {

    // Constructor para interactuar con la base de datos
    private final AuthorityRepository authorityRepository;

    public AuthorityDataLoader(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }

    // Crea roles básicos (ADMIN y USER) en la base de datos si no existen al
    // iniciar la aplicación
    @PostConstruct
    public void loadAuthorityData() {
        createAuthorityIfNotFound("ADMIN", "Administrador del sistema");
        createAuthorityIfNotFound("USER", "Usuario estándar");
    }

    private void createAuthorityIfNotFound(String roleCode, String description) {
        if (!authorityRepository.existsByRoleCode(roleCode)) {
            Authority authority = Authority.builder()
                    .roleCode(roleCode)
                    .roleDescription(description)
                    .build();
            authorityRepository.save(authority);
        }
    }
}