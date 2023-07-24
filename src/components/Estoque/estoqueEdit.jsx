import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EstoqueContext } from "../contexts/estoqueContext";
import "./estoque.css";

const EstoqueEdit = () => {
    
    const params = useParams();
    console.log(params);

    //trazando o contexto para essa pagina
    const {estoque, setEstoque, listarEstoques } = useContext(EstoqueContext);

    const buscarEstoque = (id_estoque) => {

        fetch(`http://localhost:8080/estoque/${params.id_estoque}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => { return response.json() })
            .then((dadosDoEstoque) => { setEstoque(dadosDoEstoque) });
    }

    useEffect(() => {
        buscarEstoque();
    }, []);

    //
    const atualizarEstoque = (id_estoque) => {

        fetch(`http://localhost:8080/estoque/${params.id_estoque}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(estoque),

        }).then(() => listarEstoques());

    };

    const navigate = useNavigate();
    
    const voltarPagina = () => {
        navigate(`/estoque`);
    }

    return(
        <div className="container">
            <h3>Editar de Armazenamento</h3>
            <label htmlFor="">Nome:</label>
            <input
                type="text"
                value={estoque.nome}
                placeholder="Nome estoque"
                onChange={(evento) => setEstoque({...estoque, nome: evento.target.value})}
            />
            
            
            <label htmlFor="">Estoque para:</label>
            <select
                type="select"
                value={estoque.animal}
                onChange={(evento) => setEstoque({...estoque, animal: evento.target.value})}
            >
                <option value="">...</option>
                <option value={"gato"}>Gato</option>
                <option value={"cachorro"}>Cachorro</option>
            </select>                
            
            <button className="botao-edit" onClick={ atualizarEstoque }>Editar</button>    
            <button className="botao-edit" onClick={voltarPagina}>Voltar Página</button>
           
        </div>
    )
}
export default EstoqueEdit;