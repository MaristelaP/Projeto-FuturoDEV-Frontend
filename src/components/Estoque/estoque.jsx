import React, { useContext, useState } from "react";
import EstoqueList from "./estoqueList";
import { EstoqueContext } from "../contexts/estoqueContext";
import "./estoque.css";


const Estoque = ({children}) => {
   
    
        //estado que recebe os valores do estoque
        const [estoques, setEstoques] = useState([]);

        const { adicionarEstoque, estoque, setEstoque } = useContext(EstoqueContext);
    
        return(
            <div className="container">
                <h3>Cadastro de Armazenamento</h3>
                <div className="cadastramento">
                <label>Nome:</label>
                <input
                    type="text"
                    value={estoque.nome}
                    placeholder="Nome estoque"
                    onChange={(evento) => setEstoque({...estoque,  nome: evento.target.value})}
                />
                
                
                <label>Estoque para:</label>
                <select
                    type="text"
                    value={estoque.animal}
                    onChange={(evento) => setEstoque({...estoque, animal: evento.target.value})}
                >
                    <option value="">...</option>
                    <option value={"gato"}>Gato</option>
                    <option value={"cachorro"}>Cachorro</option>
                </select> 

                <label>Situação:</label>
                <select
                    type="text"
                    value={estoque.situacao}
                    onChange={(evento) => setEstoque({...estoque, situacao: evento.target.value})}
                >
                    <option value="">...</option>
                    <option value={true}>Ativado</option>
                    <option value={false}>Desativado</option>
                </select>                
                               
                
                <button onClick={adicionarEstoque} >Cadastrar</button>
                </div>
                <EstoqueList estoques={estoques} />
            
            </div>
        )
    
}
export default Estoque;