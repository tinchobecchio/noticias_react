import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        { value: 'world', label: 'Mundo'},
        { value: 'technology', label: 'Tecnología'},
        { value: 'sports', label: 'Deportes'},
        { value: 'science', label: 'Ciencia'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'business', label: 'Negocios'},
        { value: 'politics', label: 'Política'},
        { value: 'top', label: 'Top'}
    ]
    // Inicializamos el custom hook con general como stateInicial y el array de opciones para el select. Extraemos categoria que es el state y SelectNoticias que es la interfaz que nos devuelve
    const [ categoria, SelectNoticias] = useSelect('entertainment', OPCIONES)

    // submit al for, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault()

        guardarCategoria(categoria)
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
export default Formulario;