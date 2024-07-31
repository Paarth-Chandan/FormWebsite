package org.workspace.formbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.workspace.formbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
}
