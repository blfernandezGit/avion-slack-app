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
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/client">
              <ChatContainer />
            </Route>
            <Route path="/signup">
              <Registration />
            </Route>
          </Switch>
          {/* <RedirectComp /> */}
        </Router>
      </ClientContextProvider>
      
    </div>
  );
}

export default App;
