import { useState, useEffect } from 'react'
import './App.css';
import ChatContainer from './components/ChatContainer'
import Login from './components/Login/Login'

let renderCount = 0;
const LOCAL_STORAGE_KEY_1 = 'userLoginSession'

function App() {
  renderCount++
  console.log(renderCount)

  const [response, setResponse] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_1)) || {})

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY_1, JSON.stringify(response))
  }, [response])

  const setLoginDetails = (data) => {
    setResponse({
      fetchedData: data[0] || null,
      headers: data[1] || null,
      error: null
    })
  }

  return (
    <div className="App">
      { !response?.headers
        ?
        <Login 
          setLoginDetails={setLoginDetails} 
        />
        :
        <ChatContainer 
          fetchedData={response?.fetchedData} 
          headers={response?.headers} 
          error={response?.error} 
          setLoginDetails={setLoginDetails} 
        />
      }
    </div>
  );
}

export default App;
