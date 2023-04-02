import Header from "./components/Header";
import Formulario from "./components/Formulario";
import { useState, useEffect } from "react";


function App() {

  // definir la categoria y noticias
  const [ categoria, guardarCategoria ] = useState('')
  const [ noticias, guardarNoticias] = useState([])

  useEffect(() => {

    const consultarAPI = async () => {
      const APIKey = 'f29d0439d0094b0ab3bbdcc523835459'
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${APIKey}`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      guardarNoticias(noticias.articles);

    }
    consultarAPI()

  },[categoria])
  return (
    <>
      <Header 
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
      </div>
    </>
  );
}

export default App;
