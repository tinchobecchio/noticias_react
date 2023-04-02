import Noticia from "./Noticia";

const ListadoNoticias = ({noticias}) => (
    <div className="row">
        {noticias.map( noticia => (
            <Noticia 
                key={noticia.url}
                noticia={noticia}
            />
            
        ))}
    </div>
)
 
export default ListadoNoticias;