import React, { useState } from 'react';
import { loginAPI } from './api';
import './login.css';
import LockIcon from './LockIcon';

function Login({ setUsuarioLogado }) {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setCarregando(true);
        setErro('');

        try {
            const resposta = await loginAPI(cpf, senha);

            if (resposta && resposta.id) {
                setUsuarioLogado({
                    id: resposta.id,
                    nome: resposta.nome,
                    tipo: resposta.tipo
                });
            } else {
                setErro('CPF ou senha incorretos');
            }
        } catch (err) {
            setErro('Erro ao conectar.');
        }

        setCarregando(false);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-icone">
                    <LockIcon />
                </div>

                <div className="login-form-container">
                    <h1 className="login-titulo">LOGIN</h1>
                    <p className="login-subtitulo">não possui cadastro? fale com o administrador</p>

                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>CPF</label>
                            <input
                                type="text"
                                placeholder="seu CPF aqui..."
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                disabled={carregando}
                            />
                        </div>

                        <div className="form-group">
                            <label>SENHA</label>
                            <input
                                type="password"
                                placeholder="sua senha aqui..."
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                disabled={carregando}
                            />
                        </div>

                        {erro && <p className="login-erro">{erro}</p>}

                        <div className="login-footer">
                            <a href="#" className="login-esqueceu">esqueceu sua senha? enviar email</a>
                            <button type="submit" className="login-botao" disabled={carregando}>
                                {carregando ? 'ENTRANDO...' : 'FINALIZAR'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;