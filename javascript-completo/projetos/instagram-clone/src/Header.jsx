import { useEffect, useState } from 'react'
import logo from './logo.png'
import { auth } from './firebase.js'

function Header(props){
    
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState(null)

    useEffect(() => {
        
    }, [])

    function criarConta(e){
      
      e.preventDefault()
      let email = document.getElementById('email-cadastro').value
      let username = document.getElementById('username-cadastro').value
      let senha = document.getElementById('senha-cadastro').value
      // criar conta no firebase

      auth.createUserWithEmailAndPassword(email, senha)
        .then((authUser) => {
          authUser.user.updateProfile({
            displayName: username
          })
          alert('conta criada com sucesso!')
          let modal = document.querySelector('.modalCriarConta')
          modal.style.display = 'none'
        }).catch((error) =>{
          alert(error.message)
        })
    }

    function logar(e){
      e.preventDefault()
      let email = document.getElementById('email-login').value
      let senha = document.getElementById('senha-login').value
      auth.signInWithEmailAndPassword(email,senha)
        .then((auth) => {
          props.setUser(auth.user.displayName)
          alert('logado com sucesso')
        }).catch((err) => {
          alert(err.message)
        })
    }

    function AbrirModalCriarConta(e){
      e.preventDefault()
      
      let modal = document.querySelector('.modalCriarConta')
      modal.style.display = 'block'
    }


    function abrirModalUpload(e){
      e.preventDefault()
      
      let modal = document.querySelector('.modalUpload')
      modal.style.display = 'block'
    }

    function fecharModalCriar(){
      let modal = document.querySelector('.modalCriarConta')
      modal.style.display = 'none'
    }

    function fecharModalUpload(){
      let modal = document.querySelector('.modalUpload')
      modal.style.display = 'none'
    }

    function uploadPost(e){
      e.preventDefault()
      let tituloPost = document.getElementById('titulo-upload').value
      let progressEl = document.getElementById('progress-upload')

      alert(tituloPost)
    }

    return(

        <div className='header'>

        <div className='modalCriarConta'>
          <div className='formCriarConta'>
            <div className='close-modal-criar' onClick={() => fecharModalCriar()}>X</div>
              <h2>Criar Conta</h2>
            <form onSubmit={(e) => criarConta(e)}>
              <input id='email-cadastro' type='text' placeholder='Seu Email' />
              <input id='username-cadastro' type='text' placeholder='Username' />
              <input id='senha-cadastro' type='password' placeholder='Sua Senha' />
              <input type='submit' value="criar conta" /> 
            </form>
          </div>
        </div>

        <div className='modalUpload'>
          <div className='formUpload'>
            <div className='close-modal-criar' onClick={() => fecharModalUpload()}>X</div>
              <h2>Fazer Upload</h2>
            <form onSubmit={(e) => uploadPost(e)}>
              <progress id='progress-upload' value={progress}></progress>
              <input id='titulo-upload' type='text' placeholder='Nome da sua foto...' />
              <input onChange={(e) => setFile(e.target.files[0])} type="file" name='file' />
              <input type='submit' value="Postar no Instagram" /> 
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
            <a onClick={(e) => abrirModalUpload(e)} href='#'>Postar!</a>
          </div>
          :
          <div className='header_loginForm'>
          <form onSubmit={(e) => logar(e)}>
            <input id='email-login' type='text' placeholder='login' />
            <input id='senha-login' type='password' placeholder='senha' />
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