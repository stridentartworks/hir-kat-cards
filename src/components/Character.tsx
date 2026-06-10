import Characters from '../assets/Characters';
const characters = Characters;

const Character = () => {
  return characters.map((character) => (
    <div className='character-card' key={character.index}>
      <span>{character.hiragana}</span>
      <span>{character.katakana}</span>
      <span>{character.sound}</span>
    </div>
  ));
};

export default Character;