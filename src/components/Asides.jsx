import React from 'react'

const Asides = () => {
    return (
        <>
            <div className='col-lg-2 col-sm-12' style={{
                fontSize: '13px',
                marginLeft: '5%',
                marginTop: '4%',
                float: 'left'
            }}>
                <a href="" style={{ textDecoration: 'none', fontFamily: 'sans-serif', color: '#2f3235c7' }}>Cuevas de Ayllón</a>
                <hr />
                <a href="https://www.guardiacivil.es/ca/institucional/directorio/soria/puesto_de_san_esteban_de_gormaz.html" style={{ textDecoration: 'none', fontFamily: 'sans-serif', color: '#2f3235c7' }} >Seguridad ciudadana</a>
                <hr />
                <a href="/spring-boot-cuevas-ayllon4/contacto" style={{ textDecoration: 'none', fontFamily: 'sans-serif', color: '#2f3235c7' }}>Contacto</a>
                <hr />
                <a href="/spring-boot-cuevas-ayllon4/preguntas" style={{ textDecoration: 'none', fontFamily: 'sans-serif', color: '#2f3235c7' }}>Preguntas frecuentes</a>
                <hr />
                <a href="https://www.google.com/maps/place/42342+Cuevas+de+Ayll%C3%B3n,+Soria/@41.3900595,-3.3133699,16z/data=!3m1!4b1!4m5!3m4!1s0xd4471d9e8689bef:0xd01fd59690b0f669!8m2!3d41.3899419!4d-3.3093724" style={{ textDecoration: 'none', fontFamily: 'sans-serif', color: '#2f3235c7' }}>Como llegar</a>


            </div>
        </>

    )

}
export default Asides
