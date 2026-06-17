import { useState } from 'react';
import type { CharacterType, AlphabetType } from '../assets/Characters';

interface CharacterProps {
  character: CharacterType
  activeAlphabet: AlphabetType
}

const Character = ({ character, activeAlphabet }: CharacterProps) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  }

  let displayedContent;

  if (activeAlphabet === 'hiragana') {
    displayedContent = isFlipped ? <span>{character.katakana}</span> : <span>{character.hiragana}</span>
  } else if (activeAlphabet === 'katakana') {
    displayedContent = isFlipped ? <span>{character.hiragana}</span> : <span>{character.katakana}</span>
  } else {
    displayedContent = 
      <>
        <span>{character.hiragana}</span>
        <span>{character.katakana}</span>
      </>
  }

  let cardClass = 'character-card'; 
  
  if (activeAlphabet === 'hiragana') {
    cardClass += ' bg-hiragana' 
  } else if (activeAlphabet === 'katakana') {
    cardClass += ' bg-katakana'
  }

  if (isFlipped) {
    cardClass = activeAlphabet === 'hiragana' ? 'character-card bg-katakana' : 'character-card bg-hiragana';
  }
  
  return (
    <div className={cardClass} title={character.sound} onClick={flipCard}>
      {displayedContent}
    </div>
  );
};

export default Character;