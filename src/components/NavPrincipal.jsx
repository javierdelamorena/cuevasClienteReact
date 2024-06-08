import React from 'react'

export const NavPrincipal = () => {
  return (<>

    <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{fontWeight:'bold'}}>
        <div className="container" >
            <a className="nav-link" aria-current="page" href="/">CUEVAS DE AYLLÓN</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                Menú <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse bg-light" id="navbarNavDropdown">
                <ul className="navbar-nav">

                    <li className="nav-item " >
                        <a className="nav-link" aria-current="page" href="/fotosGaleria">Galeria de
                            imagenes</a>
                    </li>
                    <li className="nav-item " >
                        <a className="nav-link" href="/historiaPueblo">Historia</a>
                    </li>
                    <li className="nav-item " >
                        <a className="nav-link" href="/toRutas">Rutas</a>
                    </li>
                    <li className="nav-item " >
                        <a className="nav-link" href="/todosAnuncios">Tablon
                            de Anuncios</a>
                    </li>
                    <li className="nav-item " >
                        <a className="nav-link" href="/enlacesDeInteres">Enlaces de Interes</a>
                    </li>
                    <li className="nav-item " >
                        <a className="nav-link" href="/orfeo">Campus
                            ORFEO</a>
                    </li>
                    <li className="nav-item " >
                        <a className="nav-link" href="/mercadilloexterior">Compra Venta y Servicios</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Espacio Vecinal
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="/users">Registrarse</a></li>
                            <li><a className="dropdown-item" href="/toLoging">Entrar</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
    
  )
}
