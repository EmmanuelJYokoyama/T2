import { Component } from "react";
import "../styles/index.scss";

export default class ListagemServicos extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h2>Lista de Serviços</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Serviço X</td>
                            <td>R$150</td>
                        </tr>
                        <tr>
                            <td>Serviço Y</td>
                            <td>R$250</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
