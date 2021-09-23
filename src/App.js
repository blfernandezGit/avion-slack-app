import './App.css';
import UserList from './components/Users/UserList'
import Login from './components/Login/Login'

let renderCount = 0;

function App() {
  renderCount++
  console.log(renderCount)

  return (
    <div className="App">
      <Login />
      {/* <UserList /> */}
    </div>
  );
}

export default App;
