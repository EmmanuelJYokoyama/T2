import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import '../styles/index.scss';
import '../styles/roteador.scss';

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { tela: 'Clientes' };
        this.selecionarView = this.selecionarView.bind(this);
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault();
        this.setState({ tela: novaTela });
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} botoes={['Clientes', 'Cadastros']} />;
        return (
            <>
                {barraNavegacao}
                {this.state.tela === 'Clientes' ? <ListaCliente /> : <FormularioCadastroCliente />}
            </>
        );
    }
}
