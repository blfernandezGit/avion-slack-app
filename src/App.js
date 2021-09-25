import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientContextProvider from "./context/ClientContext";
import './App.css';
import ChatContainer from './routes/ChatContainer'
import AuthRoute from './routes/AuthRoute'
import RedirectComp from './routes/RedirectComp'
import Registration from './components/Home/Registration'
import Login from './components/Home/Login'

let renderCount = 0;

function App() {
  //temporary render counter - TODO: remove when done
  renderCount++
  console.log(renderCount)

  return (
    <div className="App">
      <ClientContextProvider>
        <Router>
          <Switch>
            <Route 
              path="/" 
              exact 
              component={props => <Login/>}
            />
            <AuthRoute 
              path="/client" 
              exact 
              component={props => <ChatContainer />}
            />
            <Route 
              path="/signup" 
              exact 
              component={props => <Registration/>}
            />
          </Switch>
          <RedirectComp />
        </Router>
      </ClientContextProvider>
      
    </div>
  );
}

export default App;
