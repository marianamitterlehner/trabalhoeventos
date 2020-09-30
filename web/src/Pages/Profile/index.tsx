import React from 'react';
import {Link} from 'react-router-dom';
import {FiTrash} from 'react-icons/fi';
import './style.css'

interface Event {
    id:string;
    name: string;
    foto:string;
    local: string;
    comentario: string;
}

function Profile ()  {

    return (
        <div className="container-profile" >
            <div className="navegation">
                <h3>Bem vindo, USER </h3>
                <div className="nav">
                    <Link to="/register-event">Cadastrar novo evento</Link>
                    <button>Sair</button>
                </div>
            </div>
            <div className="container-box">
                <div className="form-box">
                    <div>
                        <div className="img-container">
                            <img src='https://s3-sa-east-1.amazonaws.com/ibpt.impostometro/Noticia/acfe3bdc-527d-4e66-9a22-fe23079f5b17.jpg' alt="Foto do Evento"/>
                            <button ><FiTrash size={15}  color='fff' /></button>
                        </div>
                        <div className="text-container">
                            <p><b>Nome do Evento:</b> Volta Redonda Paker</p>
                            <p><b>Local:</b>Volta Redonda</p>
                            <p><b>Comentário:</b>Bem vindo de volta</p>
                        </div>
                        <div className="like-container">
                            <button> Like </button>
                            <button> Deslike</button>
                        </div>     
                    </div>    
                </div>
                <div className="form-box">
                    <div>
                        <div className="img-container">
                            <img src='https://s3-sa-east-1.amazonaws.com/ibpt.impostometro/Noticia/acfe3bdc-527d-4e66-9a22-fe23079f5b17.jpg' alt="Foto do Evento"/>
                            <button ><FiTrash size={15}  color='fff' /></button>
                        </div>
                        <div className="text-container">
                            <p><b>Nome do Evento:</b> Volta Redonda Paker</p>
                            <p><b>Local:</b>Volta Redonda</p>
                            <p><b>Comentário:</b>Bem vindo de volta</p>
                        </div>
                        <div className="like-container">
                            <button> Like </button>
                            <button> Deslike</button>
                        </div>     
                    </div>    
                </div>
                <div className="form-box">
                    <div>
                        <div className="img-container">
                            <img src='https://s3-sa-east-1.amazonaws.com/ibpt.impostometro/Noticia/acfe3bdc-527d-4e66-9a22-fe23079f5b17.jpg' alt="Foto do Evento"/>
                            <button ><FiTrash size={15}  color='fff' /></button>
                        </div>
                        <div className="text-container">
                            <p><b>Nome do Evento:</b> Volta Redonda Paker</p>
                            <p><b>Local:</b>Volta Redonda</p>
                            <p><b>Comentário:</b>Bem vindo de volta</p>
                        </div>
                        <div className="like-container">
                            <button> Like </button>
                            <button> Deslike</button>
                        </div>     
                    </div>    
                </div>
                <div className="form-box">
                    <div>
                        <div className="img-container">
                            <img src='https://s3-sa-east-1.amazonaws.com/ibpt.impostometro/Noticia/acfe3bdc-527d-4e66-9a22-fe23079f5b17.jpg' alt="Foto do Evento"/>
                            <button ><FiTrash size={15}  color='fff' /></button>
                        </div>
                        <div className="text-container">
                            <p><b>Nome do Evento:</b> Volta Redonda Paker</p>
                            <p><b>Local:</b>Volta Redonda</p>
                            <p><b>Comentário:</b>Bem vindo de volta</p>
                        </div>
                        <div className="like-container">
                            <button> Like </button>
                            <button> Deslike</button>
                        </div>     
                    </div>    
                </div>
                <div className="form-box">
                    <div>
                        <div className="img-container">
                            <img src='https://s3-sa-east-1.amazonaws.com/ibpt.impostometro/Noticia/acfe3bdc-527d-4e66-9a22-fe23079f5b17.jpg' alt="Foto do Evento"/>
                            <button ><FiTrash size={15}  color='fff' /></button>
                        </div>
                        <div className="text-container">
                            <p><b>Nome do Evento:</b> Volta Redonda Paker</p>
                            <p><b>Local:</b>Volta Redonda</p>
                            <p><b>Comentário:</b>Bem vindo de volta</p>
                        </div>
                        <div className="like-container">
                            <button> Like </button>
                            <button> Deslike</button>
                        </div>     
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Profile;