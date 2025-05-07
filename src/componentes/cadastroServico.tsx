import { Component } from "react";
import "../styles/index.scss";

export default class CadastroServico extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h2>Cadastro de Serviço</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Nome do Serviço</label>
                        <input type="text" className="form-control" placeholder="Digite o nome"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Valor</label>
                        <input type="number" className="form-control" placeholder="Digite o valor"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        );
    }
}
