import React, { useState, useEffect, useContext } from "react";
import "./produto.css";
import ProdutosList from "../ProdutosList/produtosList";
import { ProdutoContext } from "../contexts/ProdutoContext";

const Produto = () => {

    const { produto, setProduto, adicionaProduto } = useContext(ProdutoContext);

    const [estoque, setEstoque] = useState([])

    const listaEstoques = () => {
        fetch(`http://localhost:8080/estoque`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => { return response.json() })
            .then((dadosDoEstoque) => { setEstoque(dadosDoEstoque) });
    }

    useEffect(() => {
        listaEstoques();
    }, []);

    return (
        <div className="cadastro-produto">

            <h3>Cadastro de Produto</h3>
            <form>
                <label>Estoque: </label>
                <select
                    value={produto.estoque}
                    onChange={(evento) => setProduto({ ...produto, estoque: evento.target.value })}>
                    <option>...</option>
                    {estoque.map((armazem) => {
                        return <option value={armazem.id} key={armazem.id}>{armazem.nome}</option>
                    })}
                </select>

                <label>Animal: </label>
                <select
                    value={produto.animal}
                    onChange={(evento) => setProduto({ ...produto, animal: evento.target.value })}
                >
                    <option>...</option>
                    <option value={"cachorro"}>Cachorro</option>
                    <option value={"gato"}>Gato</option>
                </select>

                <label>Categoria: </label>
                <select
                    value={produto.categoria}
                    onChange={(evento) => setProduto({ ...produto, categoria: evento.target.value })}
                >
                    <option>...</option>
                    <option value={"filhote"}>Filhote</option>
                    <option value={"adulto"}>Adulto</option>
                </select>

                <label>Quantidade: </label>
                <input
                    type="number"
                    value={produto.quantidade}
                    placeholder="Quantidade do Produto"
                    onChange={(evento) => setProduto({ ...produto, quantidade: evento.target.value })}
                />

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

                <button type="button" onClick={adicionaProduto}>Confirmar Cadastro de Produto</button>

            </form>
            <div className="lista-de-produtos">
                <ProdutosList produto={produto} setProduto={setProduto} />
            </div>
        </div>
    )
}

export default Produto;


