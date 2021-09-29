import React from 'react'

const Forms = ({onSubmit}) => {
    return (
        <form onSubmit={e => onSubmit(e)}></form>
    )
}

export default Forms
