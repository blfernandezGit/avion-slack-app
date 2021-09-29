import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientContextProvider from "./context/ClientContext";
import './App.css';
import ChatContainer from './routes/ChatContainer'
// import AuthRoute from './routes/AuthRoute'
// import RedirectComp from './routes/RedirectComp'
import Registration from './components/Home/Registration'
import Login from './components/Home/Login'
import RedirectComp from './routes/RedirectComp'
import AuthRoute from './routes/AuthRoute'

function App() {
  return (
    <div className="h-screen"> 
      <ClientContextProvider>
        <Router>
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
      </ClientContextProvider>
      
    </div>
  );
}

export default App;
