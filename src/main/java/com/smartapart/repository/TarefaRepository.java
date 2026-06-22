package com.smartapart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smartapart.model.Tarefa;

public interface TarefaRepository extends JpaRepository<Tarefa, Integer> {

}
