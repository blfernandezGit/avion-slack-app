import './App.css';
import UserList from './components/Users/UserList'
import test from './components/Users/test'
import Register from './components/Login/Registration'


let renderCount = 0;

function App() {
  renderCount++
  console.log(renderCount)

  return (
    <div className="App">
      <h1>User List</h1>
      <Register/>
      {/* <UserList /> */}
    </div>
  );
}


export default App;
