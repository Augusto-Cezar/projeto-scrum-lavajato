import {FaUser, FaLock} from 'react-icons/fa';
import { useState } from 'react';
import './Login.css';

const login = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os dados: "+ username + " - " + password);
        console.log("Envio");
    };

  return (
   <div className="container">
    <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
        <div className='input-field'>
            <input 
            type="email" 
            placeholder='E-mail'
            required
            onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className='icon'/>
        </div>
        <div className='input-field'>
            <input 
            type="password" 
            placeholder='Senha'
            required
            onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className='icon'/>
        </div>
        
    <div className="recall-forget">
        <label>
            <input type="checkbox" />
            Lembre de mim
        </label>
        <a href="#">Esqueceu a senha?</a>
    </div>

        <button>Entrar</button>
    <div className="signup-link">
        <p>Não tem uma conta?</p> <a href="#">Registrar</a>
    </div>
    </form>
   </div>
  )
}

export default login
