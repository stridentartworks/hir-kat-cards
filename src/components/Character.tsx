import type { CharacterType, AlphabetType } from '../assets/Characters';

interface CharacterProps {
  character: CharacterType
  activeAlphabet: AlphabetType
}

const Character = ({ character, activeAlphabet }: CharacterProps) => {

  let displayedContent;

  if (activeAlphabet === 'hiragana') {
    displayedContent = <span>{character.hiragana}</span>
  } else if (activeAlphabet === 'katakana') {
    displayedContent = <span>{character.katakana}</span> 
  } else {
    displayedContent = 
      <>
        <span>{character.hiragana}</span>
        <span>{character.katakana}</span>
      </>
  }
  
  return (
    <div className='character-card' title={character.sound}>
      { displayedContent }
    </div>
  );
};

export default Character;