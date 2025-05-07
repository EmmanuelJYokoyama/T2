import { Component } from "react";
import '../styles/index.scss';
import '../styles/listaCliente.scss';

type props = {}

export default class ListaCliente extends Component<props> {
    render() {
        return (
            <div className="form-box">
                <ul>
                    <li>Cliente 1</li>
                    <li>Cliente 2</li>
                    <li>Cliente 3</li>
                    <li>Cliente 4</li>
                </ul>
            </div>
        );
    }
}
