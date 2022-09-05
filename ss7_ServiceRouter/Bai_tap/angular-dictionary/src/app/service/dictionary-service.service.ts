import { Injectable } from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dict: IWord[] = [
    {
      word: 'Hello',
      mean: 'Xin chào'
    },
    {
      word: 'GoodBye',
      mean: 'Tạm biệt'
    }
  ];
  constructor() { }
  translate(word: string) {
    return this.dict.find((dic) => dic.word === word).mean;
  }
}
