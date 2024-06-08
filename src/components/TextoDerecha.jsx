import React from 'react'
import { useEffect, useState } from 'react';

const TextoDerecha = ({pagina}) => {

    const [text, setText] = useState({})

     useEffect(() => {
        const llamada = async () => {
            const response = await fetch('http://localhost:8080/spring-boot-cuevas-ayllon4/unTextoDerecha/'+pagina);
            const texto = await response.json();
            console.log(texto)
            setText(texto)
        };
        llamada();
     }, []);





    return (
        <><div className="col-lg-2 col-sm-10" style={{
            fontSize: '13px',
            marginLeft: '8%',
            float: 'right',
            marginRight: '5%',
            marginTop: '3%',
            marginBottom: '7%',
            color: 'rgb(93, 93, 93)',
        }}>
            <hr />
            <p>
                {text.texto }
            </p>
            <hr />
        </div>
        </>
    )
}

export default TextoDerecha