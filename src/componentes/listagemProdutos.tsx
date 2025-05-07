import { Component } from "react";
import "../styles/index.scss";

export default class ListagemProdutos extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h2>Lista de Produtos</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Produto A</td>
                            <td>R$100</td>
                        </tr>
                        <tr>
                            <td>Produto B</td>
                            <td>R$200</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
