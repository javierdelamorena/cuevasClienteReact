import React, { useState } from 'react'

const initialUserForm = {
    
    nombre: '',
    apellido1: '',
    apellido2: '',
    email: '',
    password: '',
    direccion:'',
    foto: ''


}


export const Registrar = ({handlerAddUser}) => {

    const [userForm, setUserForm] = useState(initialUserForm);


    const { id, nombre, apellido1, apellido2, foto, direccion, email, password } = userForm;

    const onInputChange = ({ target }) => {
        console.log(target.value);

        const { name, value } = target;
        setUserForm({
            ...userForm,
             [name]: value,
        })

    }
    const onsubmit=(event)=>{
        event.preventDefault();
        console.log('enviando el formulario')
        if(!nombre||!apellido1||!apellido2||!email||!direccion){
            alert('no se han completado los datos del formulario')
            return;
        }
        //console.log(userForm)
        handlerAddUser(userForm);
        setUserForm(initialUserForm);

    }



    return (
        <>
            <div className="container col-lg-5 col-sm-12" id="divMedio" >
                <div id="registro" style={{ marginTop: '5%' }}>

                    <form action="/registra"
                        style={{ backgroundColor: ' #d8852e99', float: 'right', padding: '30px', fontSize: '15px', width: '100%' }}
                        method="post"
                        encType="multipart/form-data"
                        onSubmit={onsubmit}>

                        <h5 id="formularioRegistro"
                            style={{ margin: '3%', fontSize: '20px' }}>Registrate en el espacio vecinal de Cuevas de Ayllón. </h5>

                        <div className="row col-lg-8 col-sm-4">
                            <label form="nombre" className="col-form-label col-sm-2">Nombre</label>
                        </div>
                        <div className="row col-lg-8 col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                maxLength="20"
                                placeholder="Nombre"
                                name='nombre'
                                value={nombre}
                                onChange={onInputChange} />

                        </div>
                        <div className="row col-lg-8 col-sm-4">
                            <label form="apellido1" className="col-form-label col-sm-2">Apellido1</label>
                        </div>
                        <div className="row col-lg-8 col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                maxLength="20"
                                placeholder="Primer Apellido"
                                name="apellido1"
                                value={apellido1}
                                onChange={onInputChange} />

                        </div>
                        <div className="row col-lg-8 col-sm-4">
                            <label form="apellido2" className="col-form-label col-sm-2">Apellido2</label>
                        </div>
                        <div className="row col-lg-8 col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                maxLength="20"
                                placeholder="Segundo Apellido"
                                name="apellido2"
                                value={apellido2}
                                onChange={onInputChange} />

                        </div>
                        <div className="row col-lg-8 col-sm-4">
                            <label form="email" className="col-form-label col-sm-2">Email</label>
                        </div>
                        <div className="row col-lg-8 col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="@Email"
                                name="email"
                                value={email}
                                onChange={onInputChange} />

                        </div>
                        <div className="row col-lg-8 col-sm-6">
                            <label form="direccion" className="col-form-label col-sm-6">Direccion en Cuevas de Ayllón</label>
                        </div>
                        <div className="row col-lg-8 col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Direccion"
                                name="direccion"
                                value={direccion}
                                onChange={onInputChange} />

                        </div>
                        <div className="row col-lg-8 col-sm-4">
                            <label form="file" className="col-form-label col-sm-2">Foto</label>
                        </div>
                        <div className="row col-lg-8 col-sm-4">
                            <input
                                type="file"
                                name="file"
                                className="form-control"
                                value={foto}
                                onChange={onInputChange}
                            />

                        </div>
                        <div className="row col-lg-8 col-sm-4">
                            <label form="password" className="col-form-label col-sm-2">Password</label>
                        </div>
                        <div className="row col-lg-8 col-sm-4">
                            <input
                                type="password"

                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                value={password}
                                onChange={onInputChange} />

                        </div>
                        <div className=" col-lg-2  col-sm-2 my-4">
                            <button type="submit"

                                className="btn "
                                style={{ color: '#eeeeee', backgroundColor: '#463232a3' }}

                            >
                                enviar
                            </button>
                        </div>

                    </form>
                </div >
            </div >
        </>
    )
}
