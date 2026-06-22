package com.smartapart.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Funcionario")
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Funcionario")
    private int idFuncionario;

    @Column(name = "Nome")
    private String nome;

    @Column(name = "CPF")
    private String cpf;

    @Column(name = "Data_Nascimento")
    private LocalDate dataNascimento;

    @Column(name = "Funcao")
    private String funcao;

    @Column(name = "Senha")
    private String senha;

    public Funcionario() {}

    public int getIdFuncionario() { return idFuncionario; }
    public void setIdFuncionario(int idFuncionario) { this.idFuncionario = idFuncionario; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCpf() { return cpf; }
    public void setCpf(String cpf) { this.cpf = cpf; }

    public LocalDate getDataNascimento() { return dataNascimento; }
    public void setDataNascimento(LocalDate dataNascimento) { this.dataNascimento = dataNascimento; }

    public String getFuncao() { return funcao; }
    public void setFuncao(String funcao) { this.funcao = funcao; }

    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }
}