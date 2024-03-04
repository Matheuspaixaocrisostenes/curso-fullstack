import './App.css';
import { db } from './firebase.js'
import { useEffect, useState } from 'react'
import logo from './logo.png'

function App() {

  const [user, setUser] = useState('Guilherme')

  useEffect(() => {
    
  }, [])

  return (
    <div className="App">
      <div className='header'>
        <div className='center'>
        <div className='header_logo'>
          <a href='#'><img src={logo} /></a>
          
        </div>

        {
          (user)?
          <div>Olá Guilherme</div>
          :
          <div className='header_loginForm'>
          <form>
            <input type='text' placeholder='login' />
            <input type='password' placeholder='senha' />
            <input type='submit' name='acao' value='Logar' />
          </form>
        </div>
        }

        


      </div>
      </div>
    </div>
  );
}

export default App;
