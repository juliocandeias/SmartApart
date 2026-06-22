package com.smartapart.service;

import com.smartapart.model.*;
import com.smartapart.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private InquilinoRepository inquilinoRepository;

    @Autowired
    private DonoRepository donoRepository;

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @Autowired
    private SindicoRepository sindicoRepository;

    public LoginResponse login(LoginRequest request) {
        Optional<Inquilino> inquilino = inquilinoRepository.findByCpfAndSenha(request.getCpf(), request.getSenha());
        if (inquilino.isPresent()) {
            Inquilino i = inquilino.get();
            Optional<Sindico> sindico = sindicoRepository.findByIdInquilinoAndStatus(i.getIdInquilino(), "Ativo");
            String tipo;
            if (sindico.isPresent()) {
                tipo = "SINDICO";
            } else {
                tipo = "MORADOR";
            }
            return new LoginResponse(i.getIdInquilino(), i.getNome(), tipo);
        }

        Optional<Dono> dono = donoRepository.findByCpfAndSenha(request.getCpf(), request.getSenha());
        if (dono.isPresent()) {
            Dono d = dono.get();
            return new LoginResponse(d.getIdDono(), d.getNome(), "DONO");
        }

        Optional<Funcionario> funcionario = funcionarioRepository.findByCpfAndSenha(request.getCpf(),
                request.getSenha());
        if (funcionario.isPresent()) {
            Funcionario f = funcionario.get();
            String tipo;
            if (f.getFuncao().equalsIgnoreCase("Porteiro")) {
                tipo = "PORTEIRO";
            } else {
                tipo = "FUNCIONARIO";
            }
            return new LoginResponse(f.getIdFuncionario(), f.getNome(), tipo);
        }

        return null;
    }
}
