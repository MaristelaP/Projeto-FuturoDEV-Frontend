import { createContext, useEffect, useState } from "react";

const EstoqueContext = createContext();

const EstoqueProvider = ({ children }) => {

    const [estoque, setEstoque] = useState({
        nome: "",
        animal: ""
    });

    const [estoques, setEstoques] = useState([]);
    
    const listarEstoques = () => {

        fetch('http://localhost:8080/estoque', {
            method: "GET"
        }).then((estoque) => {
            return estoque.json();
        }).then((response) => setEstoques(response));
    };

    useEffect(() => {
        listarEstoques();
    }, []);

    
    //salvando Estoque
    const adicionarEstoque = () => {

        fetch(`http://localhost:8080/estoque`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(estoque),
        }).then(() =>{
            listarEstoques();
        })
        
    };

    //deletar estoque
    const deletarEstoque = (idDoEstoque) =>{
        fetch(`http://localhost:8080/estoque/${idDoEstoque}`, {
            method: "DELETE",
        }).then(() => {
            listarEstoques();
        });
    }


    return (
        <EstoqueContext.Provider value={{
            estoque,
            setEstoque,
            listarEstoques,
            estoques,
            setEstoques,
            adicionarEstoque,
            deletarEstoque,
            }}>
            {children}
        </EstoqueContext.Provider>

    )

}
export {
    EstoqueProvider,
    EstoqueContext
}