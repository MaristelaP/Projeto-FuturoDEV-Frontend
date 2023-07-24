import { useNavigate } from "react-router-dom";
import { useProdutoContext } from "../contexts/ProdutoContext";
import "./home.css"


const Home = () => {

    const { produtosList, deletaProduto } = useProdutoContext();


    const filtraFilhotes = () => {
        return produtosList.filter(produto => {
            return produto.categoria === "filhote";
        })
    }

    const filtraAdultos = () => {
        return produtosList.filter(produto => {
            return produto.categoria === "adulto";
        })
    }

    const filtraGatos = () => {
        return produtosList.filter(produto => {
            return produto.animal === "gato";
        })
    }

    const filtraCachorros = () => {
        return produtosList.filter(produto => {
            return produto.animal === "cachorro";
        })
    }

    const navigate = useNavigate();

    const editaProduto = (produto) => {
      navigate(`/produto/${produto.id}/edit`);
    }

    return (

        <div>
            <div className="lista-de-estoques">
                <h2>DASHBOARD: LISTA DE PRODUTOS</h2>
                <p>FILHOTES</p>
                <div className="lista-de-estoques">
                    <ul>
                        {filtraFilhotes().map(produto => (
                            <div>
                                <li id="filhote" className="filhote-lista" key={produto.id}><span>ID:</span> {produto.id}<span>Tipo de Produto:</span> {produto.produto}
                                    <span>Animal: </span>{produto.animal} <span>Categoria:</span> {produto.categoria}</li>
                                <button onClick={() => editaProduto(produto)}>Editar Produto</button>
                                <button onClick={() => deletaProduto(produto.id)}>Apagar Produto</button>
                            </div>
                        ))}
                    </ul>

                    <p>ADULTOS</p>
                    <ul>
                        {filtraAdultos().map(produto => (
                            <div>
                                <li id="adulto" className="adulto-lista" key={produto.id}><span>ID:</span> {produto.id}<span>Tipo de Produto:</span> {produto.produto}
                                    <span>Animal:</span> {produto.animal} <span>Categoria:</span> {produto.categoria}</li>
                                <button onClick={() => editaProduto(produto)}>Editar Produto</button>
                                <button onClick={() => deletaProduto(produto.id)}>Apagar Produto</button>
                            </div>
                        ))}
                    </ul>

                    <p>GATOS</p>
                    <ul>
                        {filtraGatos().map(produto => (
                            <div>
                                <li id="gato" className="gato-lista" key={produto.id}><span>ID:</span> {produto.id}<span>Tipo de Produto:</span> {produto.produto}
                                    <span>Animal:</span> {produto.animal} <span>Categoria:</span> {produto.categoria}</li>
                                <button onClick={() => editaProduto(produto)}>Editar Produto</button>
                                <button onClick={() => deletaProduto(produto.id)}>Apagar Produto</button>
                            </div>
                        ))}
                    </ul>

                    <p>CÃES</p>
                    <ul>
                        {filtraCachorros().map(produto => (
                            <div>
                                <li id="cachorro" className="cachorro-lista" key={produto.id}><span>ID:</span> {produto.id}<span>Tipo de Produto:</span> {produto.produto}
                                    <span>Animal:</span> {produto.animal} <span>Categoria:</span> {produto.categoria}</li>
                                <button onClick={() => editaProduto(produto)}>Editar Produto</button>
                                <button onClick={() => deletaProduto(produto.id)}>Apagar Produto</button>
                            </div>
                        ))
                        }
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Home;



