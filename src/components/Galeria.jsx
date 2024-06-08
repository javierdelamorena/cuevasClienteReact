import React from 'react'
import Asides from './Asides'

const Galeria = () => {
    return (
        <><Asides />
            <div className="col-lg-9" style={{ float: 'right', marginLeft: '1%' }}>
                <div className="row">
                    <div className="col-lg-4 col-sm-12" style={{ marginTop: '3%', float: 'right' }}>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal87">
                            <img className="img-thumbnail  " style={{ borderRadius: '4px', padding: '10px', height: '275px', width: '415px' }} src="https://cuevas-de-ayllon.com/uploadsGaleria/IMG-20240121-WA0004_OZXhhHud4a.jpeg" alt="IMG-20240121-WA0004_OZXhhHud4a.jpeg"/>
                        </a>
                        <div tabindex="-1" aria-labelledby="modal" aria-hidden="true" className="modal fade" id="modal87">
                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal.content">
                                    <img src="https://cuevas-de-ayllon.com/uploadsGaleria/IMG-20240121-WA0004_OZXhhHud4a.jpeg" className="img-fluid" id="fotosModel" alt="Responsive image" role="button"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12" style={{ marginTop: '3%', float: 'right' }}>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal86">
                            <img className="img-thumbnail  " style={{ borderRadius: '4px', padding: '10px', height: '275px', width: '415px' }} src="https://cuevas-de-ayllon.com/uploadsGaleria/IMG-20240121-WA0002_LA5lzPp70g.jpeg" alt="IMG-20240121-WA0002_LA5lzPp70g.jpeg"/>
                        </a>
                        <div tabindex="-1" aria-labelledby="modal" aria-hidden="true" className="modal fade" id="modal86">
                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal.content">
                                    <img src="https://cuevas-de-ayllon.com/uploadsGaleria/IMG-20240121-WA0002_LA5lzPp70g.jpeg" className="img-fluid" id="fotosModel" alt="Responsive image" role="button"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12" style={{ marginTop: '3%', float: 'right,' }}>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal85">
                            <img className="img-thumbnail  " style={{ borderRadius: '4px', padding: '10px', height: '275px', width: '415px,' }} src="https://cuevas-de-ayllon.com/uploadsGaleria/IMG_20231209_121825_044.jpg" alt="IMG_20231209_121825_044.jpg"/>
                        </a>
                        <div tabindex="-1" aria-labelledby="modal" aria-hidden="true" className="modal fade" id="modal85">
                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal.content">
                                    <img src="https://cuevas-de-ayllon.com/uploadsGaleria/IMG_20231209_121825_044.jpg" className="img-fluid" id="fotosModel" alt="Responsive image" role="button"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <nav>

                    <ul className="pagination" style={{
                        marginTop: '5%,'
                    }}>
                        <li className="page-item disable">
                            <span className="page-link" style={{ color: 'black' }}>primera</span>

                        </li>
                        <li className="page-item disable">
                            <span className="page-link" style={{ color: 'black' }}>Anterior</span>

                        </li>
                        <li className="page-item active">
                            <span className="page-link" style={{ color: 'black' }}>1</span>

                        </li>
                        <li className="page-item">

                            <a className="page-link" href="https://cuevas-de-ayllon.com/fotosGaleria?page=1" style={{ color: 'black' }}>2</a>
                        </li>
                        <li className="page-item">

                            <a className="page-link" href="https://cuevas-de-ayllon.com/fotosGaleria?page=2" style={{ color: 'black' }}>3</a>
                        </li>
                        <li className="page-item">

                            <a className="page-link" href="https://cuevas-de-ayllon.com/fotosGaleria?page=1" style={{ color: 'black' }}>Siguiente</a>

                        </li>

                        <li className="page-item">

                            <a className="page-link" href="https://cuevas-de-ayllon.com/fotosGaleria?page=20" style={{ color: 'black' }}>ultimo</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Galeria