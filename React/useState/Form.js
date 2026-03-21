import { useState } from 'react'

function Form(){

    function cadastrarUsuario(event){
        event.preventDefault() //bloqueia o comportamento padrão do html (que seria enviar o form pro servidor)
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState("valor inicial");
    const [password, setPassword] = useState('00000000');
    //name → é o estado atual
    //setName → é a função que atualiza esse estado
    //useState() → define o valor inicial
//
    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={name}
                    placeholder="Digite o seu nome" 
                    onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password"
                    placeholder="Digite a sua senha" 
                    onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Form;

    //onChange={(event) => setName(event.target.value)} />
    //onChange = executa uma função sempre que o valor do input muda
    //(event) = parâmetro da função (objeto do evento criado pelo React)
    //=> = cria uma função (arrow function)
    //event.target = elemento que disparou o evento (input)
    //event.target.value = valor atual dentro do input
    //setName(...) = função que atualiza o estado
    //setName(event.target.value) = atualiza o estado com o valor do input