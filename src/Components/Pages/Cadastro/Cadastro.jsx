import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import './Cadastro.module.css';
import { Link } from 'react-router-dom';

const Cadastro = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }
        alert("Enviando os dados: " + username + " - " + password);
        console.log("Envio");
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Faça o seu cadastro</h1>
                <div className='input-field'>
                    <input
                        type="email"
                        placeholder='E-mail'
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className='icon' />
                </div>

                <div className='input-field'>
                    <input
                        type="password"
                        placeholder='Senha'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className='icon' />
                </div>

                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Confirme a Senha"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)} // Novo estado para confirmação
                    />
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Aceito todos os termos.
                    </label>
                </div>

                <button>Criar</button>
                <div className="signup-link">
                    <p>Já uma conta?</p> <Link to="/login"> Logar</Link>
                </div>
            </form>
        </div>
    )
}

export default Cadastro