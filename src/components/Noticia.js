import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {
    // extraer los datos
    const {image_url, link, title, description, source_id} = noticia

    const imagen = (image_url)
    ?
        <div className="card-image">
            <img src={image_url} alt={title}/>
            <span className="card-title">{source_id}</span>
        </div>
    : null


    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a 
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"                    
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    );
}
 
Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
export default Noticia;