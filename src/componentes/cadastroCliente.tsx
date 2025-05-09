import { Component } from "react";
import "../styles/index.scss";

export default class CadastroCliente extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h2>Cadastro de Cliente</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input type="text" className="form-control" placeholder="Digite o nome"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Sobrenome</label>
                        <input type="text" className="form-control" placeholder="Digite o sobrenome"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Idade</label>
                        <input type="number" className="form-control" placeholder="Digite a idade"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">CPF</label>
                        <input type="text" className="form-control" maxLength={11} placeholder="Digite o CPF" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cidade</label>
                        <input type="text" className="form-control" placeholder="Digite a cidade"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        );
    }
}
