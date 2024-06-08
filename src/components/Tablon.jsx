import React from 'react'
import ListaAnuncios from './ListaAnuncios'
import Asides from './Asides'
import TextoDerecha from './TextoDerecha'

const llamada = async () => {
  const response = await fetch('http://localhost:8080/spring-boot-cuevas-ayllon4/listaAnuncios');
  const anuncios = response.json();
  return anuncios;

}
const lista = await llamada();

export const Tablon = () => {
  let pagina = 'tablon'



  return (
    <><Asides />
      <TextoDerecha pagina={pagina} />
      <div className='container'>
        {lista && lista.length ? (<>

          {
            lista.map(listas => {
              return (

                <ListaAnuncios
                  
                  id={listas.idAnuncios}
                  anuncioTitulo={listas.titulo_anuncio}
                  anuncio={listas.anuncio}
                  fecha={listas.fecha}
                />

              )
            })
          }
        </>) : (<>
          <h2 >No Hay paciente</h2>

        </>)
        }
      </div>

    </>)




}





