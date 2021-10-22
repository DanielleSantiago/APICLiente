package com.github.DanielleSantiago.clientes.model.repository;

import com.github.DanielleSantiago.clientes.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
}
