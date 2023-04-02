import { useState } from "react";
import PropTypes from 'prop-types';

const useSelect = (stateInicial, opciones) => {

    // state del custom hook
    const [ state, actualizarState ] = useState(stateInicial)

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}

        </select>
    )
    return [state, SelectNoticias]

}

useSelect.propTypes = {
    stateInicial: PropTypes.string.isRequired,
    opciones: PropTypes.array.isRequired
}
 
export default useSelect;