import React from 'react'

export const UserRow = ({id,nombre,apellido1,apellido2,email,password,foto}) => {
    return (
        <><tr key={id}>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{apellido1}</td>
            <td>{apellido2}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{foto}</td>
            <td>
                <button
                    type='button'
                    className='btn btn-secondary btn-sm'
                >
                    update
                </button>
            </td>
            <td>
                <button
                    type='button'
                    className='btn btn-danger btn-sm'
                >
                    remove
                </button>
            </td>
        </tr></>
    )
}
