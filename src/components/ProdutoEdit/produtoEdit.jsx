import React, { useEffect, useContext } from "react";
import "./produtoEdit.css";
import { useParams, useNavigate } from "react-router-dom";
import { ProdutoContext } from "../contexts/ProdutoContext";


const ProdutoEdit = () => {

    const params = useParams();

    const {listaProdutos, produto, setProduto} = useContext(ProdutoContext);

    const buscarProduto = (id) => {
        fetch(`http://localhost:8080/produto/${params.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {return response.json()})
        .then((dadosDoProduto) => {setProduto(dadosDoProduto)});
    }
    
    useEffect(() => {
        buscarProduto();
    }, []);

    const salvaProduto = (id) => {
        fetch(`http://localhost:8080/produto/${params.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(produto),
        })
        .then(() => listaProdutos());
    }

    const navigate = useNavigate();

    const voltar = () => {
        navigate(`/produto`);
    }

    return (
        <div className="cadastro-produto">

            <h3>Editar Produto</h3>
            <form className="edita-produto-form">

                <label>Tipo do Produto: </label>
                <select
                    value={produto.produto}
                    onChange={(evento) => setProduto({ ...produto, produto: evento.target.value })}
                >
                    <option>...</option>
                    <option value={"ração"}>Ração</option>
                    <option value={"antipulgas"}>Antipulgas</option>
                    <option value={"antiparasitária"}>Antiparasitária</option>
                </select>

                <label>Quantidade: </label>
                <input
                    type="number"
                    value={produto.quantidade}
                    placeholder="Quantidade do Produto"
                    onChange={(evento) => setProduto({ ...produto, quantidade: evento.target.value })}
                />

                <button type="button" onClick={salvaProduto}>Confirmar Alteração de Produto</button>
                <button type="button" onClick={voltar}>Voltar à Lista de Produtos</button>

            </form>


        </div>
    )
}

export default ProdutoEdit;

