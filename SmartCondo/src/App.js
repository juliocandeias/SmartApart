import React, { useState } from 'react';
import './App.css';
import Login from './login';
import Dashboard from './DashBoard';

function App() {
    const [usuarioLogado, setUsuarioLogado] = useState(null);

    if (!usuarioLogado) {
        return <Login setUsuarioLogado={setUsuarioLogado} />;
    }

    return (
        <Dashboard
            usuario={usuarioLogado}
            setUsuarioLogado={setUsuarioLogado}
        />
    );
}

export default App;