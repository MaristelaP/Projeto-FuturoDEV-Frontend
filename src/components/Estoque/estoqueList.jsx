import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EstoqueContext } from "../contexts/estoqueContext";

const EstoqueList = () => {

    const {estoques, deletarEstoque } = useContext(EstoqueContext);
    
    const navigate = useNavigate();


    const editaEstoque = (estoque) => {
        navigate(`/estoque/${estoque.id}/edit`);
    }

    
    return (

        <div className="listaEstoque">
            <h3>Armazenamento de cadastro</h3>
            {
                estoques.map((estoque) => (
                    <div key={estoque.id}>
                        <ul>
                            <li>Nome: {estoque.nome} </li>
                            <li>Animal: {estoque.animal} </li>
                            <li>Situação: {estoque.situacao ? "Ativo" : "Inativo"} </li>
                        </ul>
                        <button onClick={() => editaEstoque(estoque)}>Editar</button>
                        <button onClick={() => deletarEstoque(estoque.id)}>Deletar</button>
                    </div>
                ))
            }
        </div>
    )
}
export default EstoqueList;