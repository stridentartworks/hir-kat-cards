import { useState } from 'react'
import Character from './components/Character'
import Characters, { type AlphabetType } from './assets/Characters'
import './App.css'

const App = () => {

  const [selectedAlphabet, setSelectedAlphabet] = useState<AlphabetType>('hiragana')

  const toggleAlphabet = (alphabet: AlphabetType) => {
    setSelectedAlphabet(alphabet)
  }

  return (
    <>
      <div>
         <button className='alphabet-button' onClick={() => toggleAlphabet('hiragana')}>Hiragana</button>
         <button className='alphabet-button' onClick={() => toggleAlphabet('katakana')}>Katakana</button>
         <button className='alphabet-button' onClick={() => toggleAlphabet('both')}>Both</button>
      </div>
      <div className='character-list'>
        {Characters.map((character) => (
          <Character 
            character={character}
            key={character.index}
            activeAlphabet={selectedAlphabet}
          />
        ))}
      </div>
    </>

  )
}

export default App
