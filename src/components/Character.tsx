import { useState, type ReactNode } from 'react';
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

  const bothText: ReactNode = <span>{character.hiragana}<br/>{character.katakana}</span>;

  // Default is 'both'
  let frontText: string | ReactNode = bothText;
  let backText: string | ReactNode = character.romanji;
  let themeClass: string = 'theme-both';

  if (activeAlphabet === 'hiragana') {
    frontText = character.hiragana;
    backText = character.katakana;
    themeClass = 'theme-hiragana';
  } else if (activeAlphabet === 'katakana') {
    frontText = character.katakana;
    backText = character.hiragana;
    themeClass = 'theme-katakana';
  } else if (activeAlphabet === 'romanji') {
    frontText = character.romanji;
    backText = bothText;
    themeClass = 'theme-romanji';
  };
  
  return (
    
    <div className={`flashcard-scene ${themeClass}`} title={character.romanji} onClick={flipCard}>
      
      {/* Inner card container that physically rotates */}
      <div className={`flashcard-inner ${isFlipped ? 'is-flipped' : ''}`}>
        
        {/* Front face */}
        <div className="flashcard-face flashcard-front">
          <span>{frontText}</span>
        </div>

        {/* Back face */}
        <div className="flashcard-face flashcard-back">
          <span>{backText}</span>
        </div>

      </div>
    </div>
  );
};

export default Character;