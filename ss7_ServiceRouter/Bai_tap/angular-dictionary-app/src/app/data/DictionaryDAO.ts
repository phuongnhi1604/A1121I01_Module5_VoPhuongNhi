import {IWord} from '../model/iword';

export class DictionaryDAO {
  static dictionary: IWord[] = [
    {
      word: 'Hello',
      mean: 'Xin chào'
    },
    {
      word: 'GoodBye',
      mean: 'Tạm biệt'
    },
    {
      word: 'Apple',
      mean: 'Quả táo'
    }
  ];

  static getAllDict() {
    return this.dictionary;
  }
}
