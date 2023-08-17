import './App.sass'
import Banner from './components/Banner'
import Header from './components/Header'
import Search from './components/Search'
import { useState } from 'react'
import Statistics from './components/Statistics'
import SectionCard from './components/SectionCard'
import Boost from './components/Boost'
import Rodape from './components/Rodape'
import TitleInfo from './components/Banner/TitleInfo'


function App() {

  const [view,setView] = useState(false)  

  const estado = () => {
    setView(false)
  }

  return (
    <>
      <div className="container-header">
        <Header />
        <div className="conteudo-header">
          <TitleInfo />
          <Banner onClick={estado} />
        </div>
        <div className="background">
          <Search />
          <Statistics />
          <SectionCard />
          <Boost />
        </div>
        <Rodape />
      </div>
    </>
  );
}

export default App
