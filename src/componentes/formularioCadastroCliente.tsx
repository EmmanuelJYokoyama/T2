import { Component } from "react";
import '../styles/index.scss';
import '../styles/formularioCadastroCliente.scss';


type props = {}

export default class FormularioCadastroCliente extends Component<props> {
    render() {
        return (
            <div className="form-box">
                <form>
                    <label>Nome</label>
                    <input type="text" className="form-control" />

                    <label>Sobrenome</label>
                    <input type="text" className="form-control" />

                    <label>Telefone</label>
                    <input type="text" className="form-control" />

                    <label>Email</label>
                    <input type="email" className="form-control" />

                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}
