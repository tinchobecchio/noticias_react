import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";


function App() {

  // definir la categoria y noticias
  const [ categoria, guardarCategoria ] = useState('entertainment')
  const [ noticias, guardarNoticias] = useState([])

  useEffect(() => {

    const consultarAPI = async () => {
      const APIKey = 'pub_199339a6bf25d5353293fc4a1903c80740300'
      const url = `https://newsdata.io/api/1/news?apikey=${APIKey}&country=ar&category=${categoria}`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      guardarNoticias(noticias.results);

    }
    consultarAPI()

  },[categoria])
  return (
    <>
      <Header 
        titulo="Noticiero"
      />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
