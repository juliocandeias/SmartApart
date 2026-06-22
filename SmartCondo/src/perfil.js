import React from 'react';

function Perfil({ usuario }) {
    return (
        <div>
            <h2>Meu Perfil</h2>
            <p>Nome: {usuario?.nome}</p>
            <p>Tipo: {usuario?.tipo}</p>
        </div>
    );
}

export default Perfil;