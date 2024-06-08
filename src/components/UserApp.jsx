import React, { useReducer, useState } from 'react'
import { UsersList } from './UsersList'
import { Registrar } from './Registrar'
import { usersReducers } from '../reducers/usersReducers'

const initialUsers = [{
    id: 1,
    nombre: 'pepe',
    apellido1: 'gomez',
    apellido2: 'gomez',
    email: 'gomez@gmail.com',
    password: '1234',
    foto: 'k.jp'
}]

export const UserApp = () => {

    const [users, dispatch] = useReducer(usersReducers, initialUsers)

    const handlerAddUser = (user) => {
        console.log(user)
        dispatch({
            type: 'addUser',
            payload: user
        })

    }
    return (<>
        <div className='row'>
            <div className='col'>
                <Registrar handlerAddUser={handlerAddUser} />
            </div>
            <div className='col'>
                <UsersList users={users} />
            </div>
        </div>
    </>
    )
}
