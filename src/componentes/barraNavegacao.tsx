import { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";

type props = {}

export default class BarraNavegacao extends Component<props> {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">WB</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/clientes">Clientes</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/cadastro">Cadastros</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
