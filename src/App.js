import React from 'react'
import Game from './components/game/Game'
import Pic1 from './assets/images/KillerWaves.jpg'
import Pic2 from './assets/images/DragonWarriors.jpg'
import Pic3 from './assets/images/Lynx.jpg'
import Pic4 from './assets/images/ScaryEagles.jpg'
import './App.css';

function App() {
  const KillerWaves = {
    name: 'The Killers',
    logoSrc: Pic1
  }
  const Lynx = {
    name: 'Bad Cats',
    logoSrc: Pic3
  }
  const DragonWarriors = {
    name: 'Burn It',
    logoSrc: Pic2
  }
  const ScaryEagles = {
    name: 'Eagles Power',
    logoSrc: Pic4
  }

  return (
    <div className='App'>

      <Game
      venue='React Stadium'
      homeTeam={KillerWaves}
      visitingTeam={Lynx}
      />
      <Game
      venue='Java Arena'
      homeTeam={DragonWarriors}
      visitingTeam={ScaryEagles}
      />
    </div>
  )
  
}

export default App
