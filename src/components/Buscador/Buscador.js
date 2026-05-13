import { useState } from "react";
import { withRouter } from "react-router-dom";

function Buscador(props) {

    const [valor, setValor] = useState("");

    function evitarSubmit(event) {
        event.preventDefault();
        props.history.push(`/search/${valor}`);
    }

    function controlarCambios(event) {
        setValor(event.target.value);
    }

    return (
        <form className="search-form" onSubmit={evitarSubmit}>
            <input
                type="text"
                placeholder="Buscar..."
                onChange={controlarCambios}
                value={valor}
            />

            <button className="btn btn-success btn-sm" type="submit">
                Buscar
            </button>
        </form>
    );
}

export default withRouter(Buscador);