import React, { useState } from 'react';
import './DashBoard.css';
import Inicio from './Inicio';
import Encomendas from './Encomendas';
import Chat from './Chat';
import Visitantes from './visitantes';
import Perfil from './perfil';

function Dashboard({ usuario, setUsuarioLogado }) {
    const [abaAtiva, setAbaAtiva] = useState('inicio');

    const renderizarAba = () => {
        switch (abaAtiva) {
            case 'inicio':
                return <Inicio usuario={usuario} />;
            case 'encomendas':
                return <Encomendas usuario={usuario} />;
            case 'chat':
                return <Chat usuario={usuario} />;
            case 'visitantes':
                return <Visitantes usuario={usuario} />;
            case 'perfil':
                return <Perfil usuario={usuario} />;
            default:
                return <Inicio usuario={usuario} />;
        }
    };

    const handleLogout = () => {
        setUsuarioLogado(null);
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <nav className="dashboard-nav">
                    <button
                        className={`nav-botao ${abaAtiva === 'inicio' ? 'ativo' : ''}`}
                        onClick={() => setAbaAtiva('inicio')}
                    >
                        início
                    </button>
                    <button
                        className={`nav-botao ${abaAtiva === 'encomendas' ? 'ativo' : ''}`}
                        onClick={() => setAbaAtiva('encomendas')}
                    >
                        encomendas
                    </button>
                    <button
                        className={`nav-botao ${abaAtiva === 'chat' ? 'ativo' : ''}`}
                        onClick={() => setAbaAtiva('chat')}
                    >
                        chat
                    </button>
                    <button
                        className={`nav-botao ${abaAtiva === 'visitantes' ? 'ativo' : ''}`}
                        onClick={() => setAbaAtiva('visitantes')}
                    >
                        visitantes
                    </button>

                    <button
                        className={`nav-botao perfil-botao ${abaAtiva === 'perfil' ? 'ativo' : ''}`}
                        onClick={() => setAbaAtiva('perfil')}
                        title="Seu Perfil"
                    >
                        👤
                    </button>

                    <button
                        className="logout-botao"
                        onClick={handleLogout}
                        title="Sair"
                    >
                        🚪
                    </button>
                </nav>
            </header>

            <main className="dashboard-conteudo">
                {renderizarAba()}
            </main>
        </div>
    );
}

export default Dashboard;