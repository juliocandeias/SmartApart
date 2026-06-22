package com.smartapart.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Sindico")
public class Sindico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Sindico")
    private int idSindico;

    @Column(name = "Id_Inquilino")
    private int idInquilino;

    @Column(name = "Data_Posse")
    private LocalDate dataPosse;

    @Column(name = "Data_Final_Posse", nullable = true)
    private LocalDate dataFinalPosse;

    @Column(name = "Status")
    private String status;

    public Sindico() {}

    public int getIdSindico() { return idSindico; }
    public void setIdSindico(int idSindico) { this.idSindico = idSindico; }

    public int getIdInquilino() { return idInquilino; }
    public void setIdInquilino(int idInquilino) { this.idInquilino = idInquilino; }

    public LocalDate getDataPosse() { return dataPosse; }
    public void setDataPosse(LocalDate dataPosse) { this.dataPosse = dataPosse; }

    public LocalDate getDataFinalPosse() { return dataFinalPosse; }
    public void setDataFinalPosse(LocalDate dataFinalPosse) { this.dataFinalPosse = dataFinalPosse; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}