import { useState, useEffect } from 'react'
import './App.css';
import ChatContainer from './components/ChatContainer'
import Login from './components/Login/Login'
import Registration from './components/Login/Registration';
import { LOCAL_STORAGE_KEY_1 } from './helpers/constants'

let renderCount = 0;

function App() {
  //temporary render counter - TODO: remove when done
  renderCount++
  console.log(renderCount)

  // State to store response data and headers from login - initial value from local storage
  const [response, setResponse] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_1)) || {})

  // On change of response, saves data and headers to local storage
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY_1, JSON.stringify(response))
  }, [response])

  // Function to change response, passed as prop to Login.js and Logout.js to be called there
  const setLoginDetails = (data) => {
    setResponse({
      fetchedData: data[0] || null, //response body
      headers: data[1] || null, // response headers
      error: null // error message
    })
  }

  return (
    <div className="App">
      { !response?.headers //Display Login and Registration when no headers, otherwise display ChatContainer
        ?
        <>
          <Login 
            setLoginDetails={setLoginDetails} 
          />
          <Registration/>
        </>
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
