import { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom'
import { ClientContext } from '../context/ClientContext';


// NOT CURRENTLY USED TODO: Remove or modify
const AuthRoute = (props, {path}) => {
    const { isAuth } = useContext(ClientContext)
    if(isAuth) {
        return (<Route path={path}> {props.children} </Route>)
    }
    return <Redirect to="/" />
}

export default AuthRoute;