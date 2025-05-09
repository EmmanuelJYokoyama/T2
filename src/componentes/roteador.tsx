import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BarraNavegacao from "./barraNavegacao";
import CadastroProduto from "./cadastroProduto";
import CadastroServico from "./cadastroServico";
import ListagemProdutos from "./listagemProdutos";
import ListagemServicos from "./listagemServicos";
import CadastroCliente from "./cadastroCliente";
import ListaCliente from "./listaCliente";
import "../styles/index.scss";

export default class Roteador extends Component {
    render() {
        return (
            <Router>
                <BarraNavegacao />
                <Routes>
                    <Route path="/" element={<ListaCliente/>} />
                    <Route path="/clientes" element={<ListaCliente/>} />
                    <Route path="/cadastro-produto" element={<CadastroProduto />} />
                    <Route path="/cadastro-servico" element={<CadastroServico />} />
                    <Route path="/cadastro-clientes" element={<CadastroCliente />} />
                    <Route path="/listagem-produto" element={<ListagemProdutos />} />
                    <Route path="/listagem-servico" element={<ListagemServicos />} />
                </Routes>
            </Router>
        );
    }
}
