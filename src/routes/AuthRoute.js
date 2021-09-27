import { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom'
import { ClientContext } from '../context/ClientContext';


// NOT CURRENTLY USED TODO: Remove or modify
const AuthRoute = ({component: Component, ...rest}) => {
    const { isAuth } = useContext(ClientContext)
    if(isAuth) {
        return <Route {...rest} component={Component} />
    }
    return <Redirect to="/" />
}

export default AuthRoute;