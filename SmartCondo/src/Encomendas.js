import React, { useState, useEffect } from 'react';
import { getEncomentdasInquilino, marcarEncomendaRetirada } from './api';
import './Encomendas.css';

function Encomendas({ usuario }) {
    const [encomendas, setEncomendas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        carregarEncomendas();
    }, [usuario.id]);

    const carregarEncomendas = async () => {
        try {
            setCarregando(true);
            const dados = await getEncomentdasInquilino(usuario.id);
            setEncomendas(dados);
        } catch (err) {
            setErro('Erro ao carregar encomendas');
            console.error(err);
        } finally {
            setCarregando(false);
        }
    };

    const handleRetirar = async (idEncomenda) => {
        try {
            await marcarEncomendaRetirada(idEncomenda);
            carregarEncomendas();
        } catch (err) {
            setErro('Erro ao marcar encomenda como retirada');
        }
    };

    const formatarData = (data) => {
        const d = new Date(data);
        return d.toLocaleDateString('pt-BR');
    };

    const getStatusCor = (status) => {
        if (status === 'Recebida') return '#5BA989';
        if (status === 'Retirada') return '#899A3D';
        return '#D4A760';
    };

    return (
        <div className="encomendas">
            <h2 className="encomendas-titulo">📦 Encomendas</h2>

            {carregando && <p className="mensagem-info">Carregando encomendas...</p>}
            {erro && <p className="mensagem-erro">{erro}</p>}

            {!carregando && encomendas.length === 0 && (
                <p className="mensagem-info">Você não possui encomendas</p>
            )}

            <div className="encomendas-lista">
                {encomendas.map((encomenda) => (
                    <div key={encomenda.idEncomenda} className="encomenda-card">
                        <div className="encomenda-header">
                            <div className="encomenda-info">
                                <h4 className="encomenda-numero">Encomenda #{encomenda.idEncomenda}</h4>
                                <p className="encomenda-data">{formatarData(encomenda.dataRecebimento)}</p>
                            </div>
                            <span
                                className="encomenda-status"
                                style={{ backgroundColor: getStatusCor(encomenda.status) }}
                            >
                                {encomenda.status}
                            </span>
                        </div>

                        <div className="encomenda-detalhes">
                            <p>📍 Apartamento: <strong>{encomenda.idApartamento}</strong></p>
                        </div>

                        {encomenda.status !== 'Retirada' && (
                            <button
                                className="encomenda-botao"
                                onClick={() => handleRetirar(encomenda.idEncomenda)}
                            >
                                ✓ Marcar como Retirada
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Encomendas;