import React, { useState } from "react";
import login from '../../assets/login.jpg';
import logo from '../../assets/logo.jpg';
import { FaEnvelope, FaLock} from "react-icons/fa";
import './login.css';
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const emailDoUsuario = (event) => {
        setEmail(event.target.value);
    };

    const senhaDoUsuario = (event) => {
        setSenha(event.target.value);
    }
    //navega para dashboard
    //preciso mudar o navigate para /dashboard
    const navigate = useNavigate();
    const acessarDashboard = (email, senha) => {
        navigate(`/home`);
        }

    const validarUsuario = () => {
        fetch(`http://localhost:8080/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
             email,
             senha
   }),
        }).then(() => {
            acessarDashboard();
        })
    }

    return (

        <div className="login">
            <div className="imgLogin">
                <img src={login} alt="foto de cães e gatos" />
            </div>
            <div className="formularioLogin">
                <form>
                    <img src={logo} alt="logo ilustração de patinhas de pets" />
                    <span>Seja bem vindo</span>
                    
                    <div className="inputEmailContainer">
                        <input type="text" value={email} placeholder="exemplo@email.com" onChange={emailDoUsuario}/><FaEnvelope className="emailIcon"/> 
                    </div>
                    <div className="inputSenhaContainer">
                        <input type="password" value={senha} placeholder="Senha" onChange={senhaDoUsuario}/><FaLock className="senhaIcon"/>
                    </div>
                    
                    <button type="button" onClick={validarUsuario}>Entrar</button>
                    <Link to = {"/cadastro"}>Não é cadastrado?</Link> 
                </form>
            </div>
        </div>
    )
} 
export default Login;