import { useState } from 'react'
import Character from './components/Character'
import Characters, { type AlphabetType, type CharacterType } from './assets/Characters'
import './App.css'

const App = () => {

  const [selectedAlphabet, setSelectedAlphabet] = useState<AlphabetType>('both')
  const [resetCount, setResetCount] = useState<number>(0);
  const [displayedCharacters, setDisplayedCharacters] = useState<CharacterType[]>([...Characters]);

  const shuffleArray = (array: CharacterType[]): CharacterType[] => {
    const shuffled = [...array]; // Create a copy of the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  };

  const toggleAlphabet = (alphabet: AlphabetType) => {
    setSelectedAlphabet(alphabet)
    setResetCount((prev) => prev + 1);
    const randomizedList = shuffleArray(Characters);
    setDisplayedCharacters(randomizedList);
  }

  return (
    <>
      <div>
         <button className='alphabet-button' onClick={() => toggleAlphabet('hiragana')}>Hiragana</button>
         <button className='alphabet-button' onClick={() => toggleAlphabet('katakana')}>Katakana</button>
         <button className='alphabet-button' onClick={() => toggleAlphabet('both')}>Both</button>
      </div>
      <div className='character-list'>
        {displayedCharacters.map((character) => (
          <Character 
            character={character}
            key={`${character.index}-${selectedAlphabet}-${resetCount}`}
            activeAlphabet={selectedAlphabet}
          />
        ))}
      </div>
    </>

  )
}

export default App
