// import React,{ useState } from 'react';
// import Header from './Header'
import React,{useEffect, useState} from 'react'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
import api from './services/api'
import DevItem from './components/DevItem/index'
import DevForm from './components/DevForm/index'

//Componente: Bloco isolado de HTML, CSSS e JS, o qual não interfere no restante da aplicação
//Propriedade: Informações que um componente PAI passa para o componente filho (tipo por meio de parâmetros)
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)


function App() { // PRIMEIRA LETRA SEMPRE MAIUSCULA => COMPONENTE
  
  // const [counter, setCounter] = useState(0)
  // function incrementCounter() {
  //   setCounter(counter+1)
  // }

  // return (

  //   ////HEADER é COMPONENTE , TITLE é uma PROPRIEDADE
  //   // <>
  //   //   <Header title="Meu Painel"/> 
  //   //   <Header title="Meu Painel"/> 
  //   //   <Header title="Meu Painel"/> 
  //   // </>

  //   <>
  //     <h1>Contador: {counter}</h1>
  //     <button onClick={incrementCounter}>Incrementar</button>
  //   </>
  // );
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')
      setDevs(response.data)
    }
    loadDevs();
  },[])

  async function handleAddDev(data) {
    const response = await api.post('/devs',data)
    setDevs([...devs, response.data])
  }

  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
