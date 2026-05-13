import { useState } from "react";
import { withRouter } from "react-router-dom";

function BuscadorPeliculasSeries(props) {

    const [valor, setValor] = useState("");

    function evitarSubmit(event) {
        event.preventDefault();

        props.history.push(`/search/${valor}`);
    }

    function controlarCambios(event) {
        setValor(event.target.value);
    }

    return (
        <form
            className="filter-form px-0 mb-3"
            onSubmit={evitarSubmit}
        >

            <input
                type="text"
                placeholder="Buscar dentro de la lista"
                onChange={controlarCambios}
                value={valor}
            />

        </form>
    );
}

export default withRouter(BuscadorPeliculasSeries);