import React from 'react';
import { Link } from 'react-router-dom';


function RegisterUser() {

    return (
        <div className="page-primary">
            <h1>Cadastro de Usuário</h1>
            <div className="conteiner">
                <form>
                    <input type="text" placeholder="Nome"  />
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha"/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
            <Link to="/">Voltar ao Login</Link>
        </div>
    )
}

export default RegisterUser;