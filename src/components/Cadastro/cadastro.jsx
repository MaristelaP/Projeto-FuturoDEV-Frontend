import React, { useState } from "react";
import logo from '../../assets/logo.jpg';
import cadastro from '../../assets/cadastro.jpg';
import {FaEnvelope, FaLock, FaUserCircle} from 'react-icons/fa';
import './cadastro.css';
import { useNavigate } from "react-router-dom";

const Cadastro = () => {

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const navigate = useNavigate();
    //navega para a página login
    const acessarLogin = (nome, email, senha) => {
        navigate(`/login`);
        }

    //captura os dados digitados pelo usuário
    const cadastrarUsuario = () => {
        fetch(`http://localhost:8080/usuario`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
             nome,   
             email,
             senha
            }),
        }).then(() => {
            acessarLogin();
        })
    }
    
    return(
        <div className="cadastro">
            <div className="imgCadastro">
                <img src={cadastro} alt="foto de um cão filhote" />
            </div>
            <div className="formularioCadastro">
                <form>
                    <img src={logo} alt="ilustração de patinhas de pets" />
                    <span>Cadastro</span>
                    
                    <div className="inputNomeContainer">
                        <input 
                        type="text" 
                        value={nome} 
                        placeholder="Nome" 
                        onChange={(evento) => setNome(evento.target.value) } /><FaUserCircle className="nomeIcon"/>
                    </div>
                    <div className="inputEmailContainer">
                        <input 
                        type="text" 
                        value={email} 
                        placeholder="exemplo@email.com" 
                        onChange={(evento) => setEmail(evento.target.value) } /><FaEnvelope className="emailIcon"/> 
                    </div>
                    <div className="inputSenhaContainer">
                        <input 
                        type="password" 
                        value={senha} 
                        placeholder="Senha"
                        onChange={(evento) => setSenha(evento.target.value) }/><FaLock className="senhaIcon"/>
                    </div>

                    {/* importante utilizar type=button devido reload da página  */}
                    <button type="button" onClick={cadastrarUsuario}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
export default Cadastro;