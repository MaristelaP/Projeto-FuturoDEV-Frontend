import React, {  useContext } from "react";
import "../ProdutosList/produtosList.css";
import { useNavigate } from "react-router-dom";
import { ProdutoContext } from "../contexts/ProdutoContext";

const ProdutosList = () => {

    const {produtosList, deletaProduto} = useContext(ProdutoContext);

    const navigate = useNavigate();

    const editaProduto = (produto) => {
      navigate(`/produto/${produto.id}/edit`);
    }

    return(
        <div className="lista-de-produtos">
            <h3 className="lista">Lista de Produtos</h3>

            {produtosList.map((produto) => (
                <div className="produtos-cartoes">
                    <ul> 
                        <li className="produto-card" key={produto.id}><span>ID: </span>{produto.id}</li>
                        <li><span>Quantidade: </span>{produto.quantidade}</li>
                        <li><span>Tipo de Produto: </span>{produto.produto}</li>
                        <li><span>Animal: </span>{produto.animal}</li>
                        <li><span>Categoria: </span>{produto.categoria}</li>
                        <button 
                        onClick={() => editaProduto(produto)}>Editar Produto</button>
                        <button onClick={() => deletaProduto(produto.id)}>Apagar Produto</button>

                    </ul>
                </div>
            ))}

        </div>
    )
}

export default ProdutosList;

