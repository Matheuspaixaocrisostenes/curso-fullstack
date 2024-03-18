import { useEffect, useState } from 'react'
import logo from './logo.png'

function Header(props){
    
    useEffect(() => {
        
    }, [])

    function criarConta(e){
      alert('Conta Criada')
      e.preventDefault()
    }

    function AbrirModalCriarConta(e){
      e.preventDefault()
      
      let modal = document.querySelector('.modalCriarConta')
      modal.style.display = 'block'
    }

    function fecharModalCriar(){
      let modal = document.querySelector('.modalCriarConta')
      modal.style.display = 'none'
    }

    return(

        <div className='header'>

        <div className='modalCriarConta'>
          <div className='formCriarConta'>
            <div className='close-modal-criar' onClick={() => fecharModalCriar()}>X</div>
              <h2>Criar Conta</h2>
            <form onSubmit={(e) => criarConta(e)}>
              <input type='text' placeholder='Seu Email' />
              <input type='text' placeholder='Username' />
              <input type='password' placeholder='Sua Senha' />
              <input type='submit' value="criar conta" /> 
            </form>
          </div>
        </div>

        <div className='center'>
        <div className='header_logo'>
          <a href='#'><img src={logo} /></a>
          
        </div>

        {
          (props.user)?
          <div className='header_logadoInfo'>
            <span>Olá, <strong>{props.user}</strong></span>
            <a href='#'>Postar!</a>
          </div>
          :
          <div className='header_loginForm'>
          <form>
            <input type='text' placeholder='login' />
            <input type='password' placeholder='senha' />
            <input type='submit' name='acao' value='Logar' />
          </form>
          <div className='btn_criarConta'>
            <a onClick={(e) => AbrirModalCriarConta(e)} href='#'>Criar Conta</a>
          </div>
        </div>
        }

        


      </div>
      </div>
    )
}

export default Header;