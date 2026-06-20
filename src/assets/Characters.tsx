export type AlphabetType = 'hiragana' | 'katakana' | 'both' | 'romanji';
  
export interface CharacterType {
  hiragana: string;
  katakana: string;
  romanji: string;
  index: number;
}

const Characters: CharacterType[] = [
  {
    hiragana: 'あ',
    katakana: 'ア',
    romanji: 'a',
    index: 0,
  },
  {
    hiragana: 'い',
    katakana: 'イ',
    romanji: 'i',
    index: 1, 
  },
  {
    hiragana: 'う',
    katakana: 'ウ',
    romanji: 'u',
    index: 2,
  },
  {
    hiragana: 'え',
    katakana: 'エ',
    romanji: 'e',
    index: 3,
  },
  {
    hiragana: 'お',
    katakana: 'オ',
    romanji: 'o',
    index: 4,
  },
  {
    hiragana: 'か',
    katakana: 'カ',
    romanji: 'ka',
    index: 5,
  },
  {
    hiragana: 'き',
    katakana: 'キ',
    romanji: 'ki',
    index: 6,
  },
  {
    hiragana: 'く',
    katakana: 'ク',
    romanji: 'ku',
    index: 7,
  },
  {
    hiragana: 'け',
    katakana: 'ケ',
    romanji: 'ke',
    index: 8,
  },
  {
    hiragana: 'こ',
    katakana: 'コ',
    romanji: 'ko',
    index: 9,
  },
  {
    hiragana: 'さ',
    katakana: 'サ',
    romanji: 'sa',
    index: 10,
  },
  {
    hiragana: 'し',
    katakana: 'シ',
    romanji: 'shi',
    index: 11,
  },
  {
    hiragana: 'す',
    katakana: 'ス',
    romanji: 'su',
    index: 12,
  },
  {
    hiragana: 'せ',
    katakana: 'セ',
    romanji: 'se',
    index: 13,
  },
  {
    hiragana: 'そ',
    katakana: 'ソ',
    romanji: 'so',
    index: 14,
  },
  {
    hiragana: 'た',
    katakana: 'タ',
    romanji: 'ta',
    index: 15,
  },
  {
    hiragana: 'ち',
    katakana: 'チ',
    romanji: 'chi',
    index: 16,
  },
  {
    hiragana: 'つ',
    katakana: 'ツ',
    romanji: 'tsu',
    index: 17,
  },
  {
    hiragana: 'て',
    katakana: 'テ',
    romanji: 'te',
    index: 18,
  },
  {
    hiragana: 'と',
    katakana: 'ト',
    romanji: 'to',
    index: 19,
  },
  {
    hiragana: 'な',
    katakana: 'ナ',
    romanji: 'na',
    index: 20,
  },
  {
    hiragana: 'に',
    katakana: 'ニ',
    romanji: 'ni',
    index: 21,
  },
  {
    hiragana: 'ぬ',
    katakana: 'ヌ',
    romanji: 'nu',
    index: 22,
  },
  {
    hiragana: 'ね',
    katakana: 'ネ',
    romanji: 'ne',
    index: 23,
  },
  {
    hiragana: 'の',
    katakana: 'ノ',
    romanji: 'no',
    index: 24,
  },
  {
    hiragana: 'は',
    katakana: 'ハ',
    romanji: 'ha',
    index: 25,
  },
  {
    hiragana: 'ひ',
    katakana: 'ヒ',
    romanji: 'hi',
    index: 26,
  },
  {
    hiragana: 'ふ',
    katakana: 'フ',
    romanji: 'fu',
    index: 27,
  },
  {
    hiragana: 'へ',
    katakana: 'ヘ',
    romanji: 'he',
    index: 28,
  },
  {
    hiragana: 'ほ',
    katakana: 'ホ',
    romanji: 'ho',
    index: 29,
  },
  {
    hiragana: 'ま',
    katakana: 'マ',
    romanji: 'ma',
    index: 30,
  },
  {
    hiragana: 'み',
    katakana: 'ミ',
    romanji: 'mi',
    index: 31,
  },
  {
    hiragana: 'む',
    katakana: 'ム',
    romanji: 'mu',
    index: 32,
  },
  {
    hiragana: 'め',
    katakana: 'メ',
    romanji: 'me',
    index: 33,
  },
  {
      hiragana: 'も', 
      katakana: 'モ',
      romanji: 'mo',
      index: 34,
  },
  {
    hiragana: 'や',
    katakana: 'ヤ',
    romanji: 'ya',
    index: 35,
  },
  {
    hiragana: 'ゆ',
    katakana: 'ユ',
    romanji: 'yu',
    index: 36,
  },
  {
    hiragana: 'よ',
    katakana: 'ヨ',
    romanji: 'yo',
    index: 37,
  },
  {
    hiragana: 'ら',
    katakana: 'ラ',
    romanji: 'ra',
    index: 38,
  },
  {
    hiragana: 'り',
    katakana: 'リ',
    romanji: 'ri',
    index: 39,
  },
  {
    hiragana: 'る',
    katakana: 'ル',
    romanji: 'ru',
    index: 40,
  },
  {
    hiragana: 'れ',
    katakana: 'レ',
    romanji: 're',
    index: 41,
  },
  {
    hiragana: 'ろ',
    katakana: 'ロ',
    romanji: 'ro',
    index: 42,
  },
];

export default Characters;