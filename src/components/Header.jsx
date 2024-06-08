import React from 'react';
//import logo from '../assets/4198.jpg'; // Tell webpack this JS file uses this image
import background from "../img/4198.jpg";
//console.log(logo); // /logo.84287d09.png

function Header() {

    return <>
        <div style={{
            backgroundImage: `url(${background})`, backgroundSize: 'cover', textAlign: 'center',
            color: '#ffffff',
            fontFamily: 'cursive'
        }}>
            <div className='col-lg-5' style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                <div style={{ padding: '6%', fontSize: '17px', marginRight: '30%', backgroundColor: '#dcdf5ea1' }}>Bienvenid@s a Cuevas de Ayllón </div>


            </div>

        </div>

    </>
}

export default Header;