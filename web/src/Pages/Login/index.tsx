import React from 'react';
import { Link } from 'react-router-dom';

function Login () {

    return (
        <div className="page-primary">
            <h1>Divulgação de Evento</h1>
            <div className="conteiner">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="senha"/>
                    <button type="submit">Entrar</button>
                    <Link to="">Esqueci minha senha</Link>
                    <Link to="/register-user">Cadastre-se</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;