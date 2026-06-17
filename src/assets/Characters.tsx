export type AlphabetType = 'hiragana' | 'katakana' | 'both';
  
export interface CharacterType {
  hiragana: string;
  katakana: string;
  sound: string;
  index: number;
}

const Characters: CharacterType[] = [
  {
    hiragana: 'あ',
    katakana: 'ア',
    sound: 'a',
    index: 0,
  },
  {
    hiragana: 'い',
    katakana: 'イ',
    sound: 'i',
    index: 1, 
  },
  {
    hiragana: 'う',
    katakana: 'ウ',
    sound: 'u',
    index: 2,
  },
  {
    hiragana: 'え',
    katakana: 'エ',
    sound: 'e',
    index: 3,
  },
  {
    hiragana: 'お',
    katakana: 'オ',
    sound: 'o',
    index: 4,
  },
  {
    hiragana: 'か',
    katakana: 'カ',
    sound: 'ka',
    index: 5,
  },
  {
    hiragana: 'き',
    katakana: 'キ',
    sound: 'ki',
    index: 6,
  },
  {
    hiragana: 'く',
    katakana: 'ク',
    sound: 'ku',
    index: 7,
  },
  {
    hiragana: 'け',
    katakana: 'ケ',
    sound: 'ke',
    index: 8,
  },
  {
    hiragana: 'こ',
    katakana: 'コ',
    sound: 'ko',
    index: 9,
  },
  {
    hiragana: 'さ',
    katakana: 'サ',
    sound: 'sa',
    index: 10,
  },
  {
    hiragana: 'し',
    katakana: 'シ',
    sound: 'shi',
    index: 11,
  },
  {
    hiragana: 'す',
    katakana: 'ス',
    sound: 'su',
    index: 12,
  },
  {
    hiragana: 'せ',
    katakana: 'セ',
    sound: 'se',
    index: 13,
  },
  {
    hiragana: 'そ',
    katakana: 'ソ',
    sound: 'so',
    index: 14,
  },
  {
    hiragana: 'た',
    katakana: 'タ',
    sound: 'ta',
    index: 15,
  },
  {
    hiragana: 'ち',
    katakana: 'チ',
    sound: 'chi',
    index: 16,
  },
  {
    hiragana: 'つ',
    katakana: 'ツ',
    sound: 'tsu',
    index: 17,
  },
  {
    hiragana: 'て',
    katakana: 'テ',
    sound: 'te',
    index: 18,
  },
  {
    hiragana: 'と',
    katakana: 'ト',
    sound: 'to',
    index: 19,
  },
  {
    hiragana: 'な',
    katakana: 'ナ',
    sound: 'na',
    index: 20,
  },
  {
    hiragana: 'に',
    katakana: 'ニ',
    sound: 'ni',
    index: 21,
  },
  {
    hiragana: 'ぬ',
    katakana: 'ヌ',
    sound: 'nu',
    index: 22,
  },
  {
    hiragana: 'ね',
    katakana: 'ネ',
    sound: 'ne',
    index: 23,
  },
  {
    hiragana: 'の',
    katakana: 'ノ',
    sound: 'no',
    index: 24,
  },
  {
    hiragana: 'は',
    katakana: 'ハ',
    sound: 'ha',
    index: 25,
  },
  {
    hiragana: 'ひ',
    katakana: 'ヒ',
    sound: 'hi',
    index: 26,
  },
  {
    hiragana: 'ふ',
    katakana: 'フ',
    sound: 'fu',
    index: 27,
  },
  {
    hiragana: 'へ',
    katakana: 'ヘ',
    sound: 'he',
    index: 28,
  },
  {
    hiragana: 'ほ',
    katakana: 'ホ',
    sound: 'ho',
    index: 29,
  },
  {
    hiragana: 'ま',
    katakana: 'マ',
    sound: 'ma',
    index: 30,
  },
  {
    hiragana: 'み',
    katakana: 'ミ',
    sound: 'mi',
    index: 31,
  },
  {
    hiragana: 'む',
    katakana: 'ム',
    sound: 'mu',
    index: 32,
  },
  {
    hiragana: 'め',
    katakana: 'メ',
    sound: 'me',
    index: 33,
  },
  {
      hiragana: 'も', 
      katakana: 'モ',
      sound: 'mo',
      index: 34,
  },
  {
    hiragana: 'や',
    katakana: 'ヤ',
    sound: 'ya',
    index: 35,
  },
  {
    hiragana: 'ゆ',
    katakana: 'ユ',
    sound: 'yu',
    index: 36,
  },
  {
    hiragana: 'よ',
    katakana: 'ヨ',
    sound: 'yo',
    index: 37,
  },
  {
    hiragana: 'ら',
    katakana: 'ラ',
    sound: 'ra',
    index: 38,
  },
  {
    hiragana: 'り',
    katakana: 'リ',
    sound: 'ri',
    index: 39,
  },
  {
    hiragana: 'る',
    katakana: 'ル',
    sound: 'ru',
    index: 40,
  },
  {
    hiragana: 'れ',
    katakana: 'レ',
    sound: 're',
    index: 41,
  },
  {
    hiragana: 'ろ',
    katakana: 'ロ',
    sound: 'ro',
    index: 42,
  },
];

export default Characters;