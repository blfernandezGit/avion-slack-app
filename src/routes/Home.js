import { Switch, Route } from 'react-router-dom'
import Login from '../components/Home/Login'
import Registration from '../components/Home/Registration'

const Home = () => {
    return (
        <Switch>
            <Route 
                path="/" 
                exact 
                component={() => <Login/>}
            />
            <Route 
                path="/signup" 
                exact 
                component={() => <Registration/>}
            />
        </Switch>
    )
}

export default Home
