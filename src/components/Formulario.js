import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect';

const Formulario = () => {

    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'technology', label: 'Tecnología'},
        { value: 'sports', label: 'Deportes'},
        { value: 'science', label: 'Ciencia'},
        { value: 'health', label: 'Salud'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'business', label: 'Negocios'}
    ]
    const [ categoria, SelectNoticias] = useSelect('general', OPCIONES)

    const APIKey = 'f29d0439d0094b0ab3bbdcc523835459'
    

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
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