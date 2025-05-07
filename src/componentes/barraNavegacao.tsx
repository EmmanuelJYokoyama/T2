import { Component } from "react";
import "../styles/index.scss";
import "../styles/barraNavegacao.scss";

type props = {
    botoes: string[],
    seletorView: Function
}

export default class BarraNavegacao extends Component<props> {
    gerarListaBotoes() {
        return this.props.botoes.map(valor => (
            <li key={valor}>
                <a href="#" onClick={(e) => this.props.seletorView(valor, e)}>{valor}</a>
            </li>
        ));
    }

    render() {
        return (
            <nav className="navbar">
                <span className="brand-logo">WB</span>
                <ul className="menu">
                    {this.gerarListaBotoes()}
                </ul>
            </nav>
        );
    }
}
