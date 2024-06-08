import React from 'react'
import { UserRow } from './UserRow'

export const UsersList = ({ users }) => {
    return (
        <>

            <table className='table table-hover '>

                <thead>

                    <tr>
                        <th>#</th>
                        <th>nombre</th>
                        <th>apellido1</th>
                        <th>apellido2</th>
                        <th>email</th>
                        <th>password</th>
                        <th>foto</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({id,nombre,apellido1,apellido2,direccion,email,password,foto}) => (
                        <UserRow
                        key={id}
                            id={id}
                            nombre={nombre}
                            apellido1={apellido1}
                            apellido2={apellido2}
                            direccion={direccion}
                            email={email}
                            password={password}
                            foto={foto}

                        />
                    ))}
                </tbody>




            </table >
        </>

    )
}
