import React from 'react'
import Asides from './Asides'

export const Intro = () => {
    return (
        <><Asides />
            <div className='col-lg-2' style={{
                marginLeft: '8%',
                float: 'right',
                marginRight: '5%',
                marginTop: '3%'
            }}>
                <img src="https://cuevas-de-ayllon.com/imagenesRutas/escudoCuevasCOLOR.jpg" jsaction="VQAsE" className="sFlh5c pT0Scc iPVvYb" style={{ maxWidth: '910px', height: '400px', margin: '0px', width: '100%' }} alt="Cuevas de Ayllón" jsname="kn3ccd" aria-hidden="false" />
            </div>
            <div className="container col-lg-5 col-sm-12" style={{ marginTop: '3%' }}>
                <p>Cuevas de Ayllón es una localidad del municipio de Montejo de Tiermes, situada en el suroeste de la provincia
                    de Soria, que ofrece al visitante un atractivo paisaje lleno de caminos rústicos y llenos de naturaleza, en los
                    que adentrarse y encontrar una gran cantidad de fauna salvaje (corzos, jabalíes, zorros, buitres, etc), así como
                    muy distintos tipos de vegetación o de árboles (encinas, robles, chopos, álamos, nogales, etc).

                    Caracterizada por el color rojizo de su tierra y asentada sobre una roca arenisca, se halla junto a la ribera
                    del río Pedro, cuyo cañón, ubicado en el paraje de El Hoyo, se extiende hasta la cercana localidad de Ligos. A
                    lo largo de su recorrido encontraremos una gran colonia de buitres que habita en sus riscos e, incluso, unas
                    pinturas rupestres.


                </p>
                <p>
                    ¡Estáis invitados y esperamos que os guste y disfrutéis de la visita a nuestra pequeña localidad!


                </p>
            </div>
        </>
    )
}
