import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'technology', label: 'Tecnología'},
        { value: 'sports', label: 'Deportes'},
        { value: 'science', label: 'Ciencia'},
        { value: 'health', label: 'Salud'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'business', label: 'Negocios'}
    ]
    // Inicializamos el custom hook con general como stateInicial y el array de opciones para el select. Extraemos categoria que es el state y SelectNoticias que es la interfaz que nos devuelve
    const [ categoria, SelectNoticias] = useSelect('general', OPCIONES)

    const APIKey = 'f29d0439d0094b0ab3bbdcc523835459'
    

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
 
export default Formulario;