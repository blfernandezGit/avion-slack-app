import React from 'react'

const Forms = ({onSubmit}, props) => {
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            {props.children}
        </form>
    )
}

export default Forms
