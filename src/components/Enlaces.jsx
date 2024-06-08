import React from 'react'
import Asides from './Asides'
import TextoDerecha from './TextoDerecha'


const Enlaces = () => {
    let pagina = 'enlaces'
    return (
        <><Asides />
        <TextoDerecha pagina={pagina} />
        <div className="container col-lg-5 col-sm-12" style={{marginTop:'3%'}} >
            <div>
                <div className="list-group " style={{ textAlign: 'center', marginBottom: '4%', fontSize: '17px' }}>
                    <a href="#" className="list-group-item list-group-item-action disabled" style={{ backgroundColor: '#d9b5349e', color: 'black', fontWeight: '800', fontSize: '20px' }}>Vecinos de Cuevas de Ayllón</a>
                    <a href="https://catedramdelibes.com/autor/andres-de-la-morena-silvano/" className="list-group-item list-group-item-action">Silvano Andrés de la Morena: Poeta, escritor e
                        investigador.</a>
                    <a href="https://ninacosart.wixsite.com/ninacosart" className="list-group-item list-group-item-action">Ñiñacos, Ignacio Benéitez: Escultor</a>
                    <a href="http://www.carmemunoz.com/" className="list-group-item list-group-item-action">Carme Muñoz:
                        Fotógrafa y grabadora</a>
                    <a href="https://www.escritores.org/libros/index.php/item/luis-de-la-rasilla-sanchez-arjona" className="list-group-item list-group-item-action">Luis de la Rasilla: Profesor, politólogo y
                        escritor.</a>
                    <a href="https://www.instagram.com/teresapereletegui/?hl=es" className="list-group-item list-group-item-action">Teresa Perelétegui: Pintura e ilustración</a>
                    <a href="https://www.instagram.com/tonybeneitez/" className="list-group-item list-group-item-action">Toñi Benéitez: Tejedora y grabadora.</a>
                    <a href="https://instagram.com/covachosss?igshid=YmMyMTA2M2Y=" className="list-group-item list-group-item-action">Covachoss</a>

                </div>
            </div >
            <div>
                <div className="list-group  " style={{ textAlign: 'center', marginBottom: '4%', fontSize: '17px' }}>
                    <a href="#" className="list-group-item list-group-item-action disabled" style={{ backgroundColor: '#d9b5349e', color: 'black', fontWeight: '800', fontSize: '20px' }}>Dónde dormir</a>
                    <a href="https://www.airbnb.es/rooms/9708432?adults=1&amp;children=0&amp;enable_m3_private_room=true&amp;infants=0&amp;pets=0&amp;check_in=2023-12-21&amp;check_out=2023-12-26&amp;source_impression_id=p3_1701952532_A6uF8eIIT0SDXuWQ&amp;previous_page_section_name=1000&amp;federated_search_id=bd20cbf8-bc5b-4d84-b481-db7d88d236d6" className="list-group-item list-group-item-action ">Cabaña de piedra (Taller de pintura)</a>
                    <a href="https://www.airbnb.es/rooms/828166496735362393?adults=1&amp;children=0&amp;enable_m3_private_room=true&amp;infants=0&amp;pets=0&amp;check_in=2023-12-11&amp;check_out=2023-12-16&amp;source_impression_id=p3_1701952532_wdcmSqWMLbewq%2FEf&amp;previous_page_section_name=1000&amp;federated_search_id=bd20cbf8-bc5b-4d84-b481-db7d88d236d6" className="list-group-item list-group-item-action ">Casa De La Era - Casa de Campo</a>



                </div >

            </div >
            <div>
                <div className="list-group  " style={{ textAlign: 'center', marginBottom: '4%', fontSize: '17px' }}>
                    <a href="#" className="list-group-item list-group-item-action disabled" style={{ backgroundColor: '#d9b5349e', color: 'black', fontWeight: '800', fontSize: '20px' }}>Turismo de la zona</a>

                    <a href="https://www.escapadarural.com/que-hacer/cuevas-de-ayllon/donde-comer" className="list-group-item list-group-item-action ">Dónde comer</a>
                    <a href="https://www.sorianitelaimaginas.com/" className="list-group-item list-group-item-action ">Soria
                        ni te la imaginas</a>
                    <a href="https://www.facebook.com/SoriaNiTeLaimaginas/" className="list-group-item list-group-item-action ">Soria ni te la imaginas Facebook</a>
                    <a href="https://www.instagram.com/sorianitelaimaginas/?hl=es" className="list-group-item list-group-item-action ">Soria ni te la imaginas instagram</a>


                </div >

            </div >

            <div>
                <div className="list-group  " style={{ textAlign: 'center', marginBottom: '4%', fontSize: '17px' }}>
                    <a href="#" className="list-group-item list-group-item-action disabled" style={{ backgroundColor: '#d9b5349e', color: 'black', fontWeight: '800', fontSize: '20px' }}>Diputación y Ayuntamiento</a>
                    <a href="https://www.dipsoria.es/" className="list-group-item list-group-item-action ">Diputación de
                        Soria</a>

                    <a href="http://www.montejodetiermes.es/" className="list-group-item list-group-item-action ">Ayuntamiento de Montejo de Tiermes</a>
                    <a href="https://www.jcyl.es/web/jcyl/Portada/es/Home/1246890364336/_/_/_" className="list-group-item list-group-item-action ">Junta de Castilla y León</a>
                </div >
            </div >
            <div>
                <div className="list-group  " style={{ textAlign: 'center', marginBottom: '4%', fontSize: '17px' }}>
                    <a href="#" className="list-group-item list-group-item-action disabled" style={{ backgroundColor: '#d9b5349e', color: 'black', fontWeight: '800', fontSize: '20px' }}>Otros pueblos que deciden</a>
                    <a href="https://hoyos.com.es/" className="list-group-item list-group-item-action ">Hoyos</a>


                </div >
            </div >

        </div >
        </>
    )
}

export default Enlaces