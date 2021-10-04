import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatContainer from './routes/ChatContainer'
import Registration from './components/Home/Registration'
import Login from './components/Home/Login'
import RedirectComp from './routes/RedirectComp'
import AuthRoute from './routes/AuthRoute'
import LoadingScreen from './components/Home/LoadingScreen';
import { useContext } from 'react'
import { ClientContext } from './context/ClientContext'

function App() {
  const { showLoading } = useContext(ClientContext)
  return (
    <div className="h-screen w-screen">
        <Router>
          {showLoading && <LoadingScreen/>}
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <AuthRoute path="/client">
              <ChatContainer /> 
            </AuthRoute>
            <Route path="/signup">
              <Registration />
            </Route>
          </Switch>
          <RedirectComp />
        </Router>
    </div>
  );
}

export default App;
