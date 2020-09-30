import React from 'react';
import {useHistory} from 'react-router-dom';

function RegisterEvent() {

    return (
        <div className="page-primary">
            <h1>Cadastro de Evento</h1>
            <div className="conteiner">
                <form >
                    <input type="text" placeholder="Nome do Evento" />
                    <input type="text" placeholder="Local" />
                    <input type="text" placeholder="Foto" />
                    <textarea placeholder="Comentário" />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterEvent;