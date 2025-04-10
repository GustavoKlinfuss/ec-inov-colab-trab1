import React from "react";
import { useNavigate } from "react-router-dom";

const ToolBar = () => {
    const navigate = useNavigate();
    
    function redirectToHome(){
        navigate('/');
    }

    function redirectToNewUser(){
        navigate('users/new/');
    }

    return (
        <section id="toolbar">
            <header id="toolbar-header">
                <h2>Central de Controle de Usuários</h2>
                <h3>Gustavo Klinfuss</h3>
            </header>
            <div id="toolbar-actions">
                <button className="base-button" onClick={redirectToHome}>Início</button>
                <button className="base-button" onClick={redirectToNewUser}>Novo usuário</button>
            </div>
        </section>)
}

export default ToolBar;