import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientContextProvider from "./context/ClientContext";
import './App.css';
import ChatContainer from './routes/ChatContainer'
import Home from './routes/Home'
import AuthRoute from './routes/AuthRoute'
import RedirectComp from './routes/RedirectComp'

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
              component={props => <Home/>}
            />
            <AuthRoute 
              path="/client" 
              exact 
              component={props => <ChatContainer />}
            />
          </Switch>
          <RedirectComp />
        </Router>
      </ClientContextProvider>
      
    </div>
  );
}

export default App;
