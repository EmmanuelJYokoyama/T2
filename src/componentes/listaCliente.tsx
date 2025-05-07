import { Component } from "react";
import '../styles/index.scss';
import "bootstrap/dist/css/bootstrap.min.css";

type props = {}

export default class ListaCliente extends Component<props> {
    render() {
        return (
            <div className="container mt-5">
                <h2>Lista de Clientes</h2>
                <ul className="list-group">
                    <li className="list-group-item">Cliente 1</li>
                    <li className="list-group-item">Cliente 2</li>
                    <li className="list-group-item">Cliente 3</li>
                    <li className="list-group-item">Cliente 4</li>
                </ul>
            </div>
        );
    }
}
