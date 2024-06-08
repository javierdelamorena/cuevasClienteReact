import React from 'react'
import { useState } from 'react'
import Aside from './Asides'



const ListaAnuncios = ({ anuncio, anuncioTitulo, id, fecha }) => {

  const [imagen, setImagen] = useState({})

  const handlerLLamar = async (id) => {

    const idAnuncio = id.id;
    const response = await fetch('http://localhost:8080/spring-boot-cuevas-ayllon4/anuncio/' + idAnuncio)

    const imagen = await response.json();
    const r = imagen;
    console.log(r)
    setImagen(r)



  }

  return (<>

    <div className='container col-6' style={{ marginTop: '3%', boxShadow: 'inset 0 0em 0em rgb(0 0 0 / 10%), 0 0 0 2px rgb(255 255 255), 0.3em 0.3em 1em rgb(0 0 0 / 30%)', borderRadius: '8px' }}>
      <div className='container'>
        <table style={{ width: '100%' }} id="g-table">
          <tbody>
            <tr>
              <td style={{
                marginBottom: '10px',
                /* color: white; */
                padding: '4%',
                fontSize: 'larger',
                fontFamily: 'ui-sans-serif'
              }}>
               Fecha del anuncio:{'  '}  {fecha}
              </td>
            </tr>
            <tr key={id} style={{ textAlign: 'left', fontSize: 'larger', width: '100%' }}>
              <td style={{
                width: '100%',
                margin: '10px',
                fontSize: '30px',
                fontFamily: 'serif',
                resize: 'none',
                paddingleft: '4%', overflowWrap: 'break-word'
              }}>{anuncioTitulo}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <div style={{
                  overflow: 'scroll',
                  width: '100%',
                  fontSize: '23px',
                  margin: '10px',
                  resize: 'vertical',
                  height: '250px',
                  backgroundColor: 'white',
                  borderRadius: '7px',
                  padding: '16px',
                  boxShadow: 'inset 0 0em 0em rgb(0 0 0 / 10%), 0 0 0 2px rgb(255 255 255), 0.3em 0.3em 1em rgb(0 0 0 / 30%)',
                  fontFamily: 'serif',
                  fontWeight: '500',
                  overflowWrap: 'break-word'

                }}>{anuncio} </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{ width: '100%', alignItems: 'center' }}>
                <button type="button" className='btn' style={imagen.foto_anuncio ? { border: 'none', backgroundColor: 'transparent' } : { width: '100%', fontWeight: '500' }}
                  onClick={() => handlerLLamar({ id })}
                >{imagen.foto_anuncio ? '' : 'Ver anuncio'}</button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td >{imagen.foto_anuncio ? (
                <img src={`https://cuevas-de-ayllon.com/uploadsAnuncios/${imagen.foto_anuncio}`} alt={'foto'} style={{ width: "100%" }} />) :
                (<p></p>)
              }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>)
}

export default ListaAnuncios