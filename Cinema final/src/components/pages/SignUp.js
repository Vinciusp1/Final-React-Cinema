import React, {useState} from 'react';
import '../../App.css';
import axios from "axios";


export default function SignUp() {
  
  const [clienteNome, setClienteNome] = useState("");
  const [clienteEmail, setClienteEmail] = useState("");
  const [clienteSenha, setClienteSenha] = useState("");

  function cadastrarClientes() {
    axios
    .post("http://localhost:3000/clientes",{
      nome: clienteNome,
      email: clienteEmail,
      senha: clienteSenha,
    })
    .then((dados) => console.log(clienteNome))
    .catch((error) => console.log(error));
  }
  
  const handleInputNome = (e) => {
    setClienteNome(e.target.value);
  }

  const handleInputEmail = (e) => {
    setClienteEmail(e.target.value);
  }

  const handleInputSenha = (e) => {
    setClienteSenha(e.target.value);
  }

  return (
    <div>
      <div class="forms">
        <h1>Cadastre-se</h1>
        <form action="">
            <input 
            onChange={(e) => handleInputNome(e)}
            type="text" 
            id="form" 
            name="nome" 
            placeholder="NOME COMPLETO"
            ></input>
            
            <input 
            onChange={(e) => handleInputEmail(e)}
            type="email" 
            id="form" 
            name="email" 
            placeholder="E-MAIL"
            ></input>
            
            <input
            onChange={(e) => handleInputSenha(e)}
            type="password" 
            id="form" 
            name="senha" 
            placeholder="senha"
            ></input>
            
            
            
        </form>
        <button onClick={() => cadastrarClientes()}>Cadastrar</button>        
      </div>
    </div>
  )
}
