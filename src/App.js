import './App.css';
import UserList from './components/Users/UserList'

let renderCount = 0;

function App() {
  renderCount++
  console.log(renderCount)

  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
