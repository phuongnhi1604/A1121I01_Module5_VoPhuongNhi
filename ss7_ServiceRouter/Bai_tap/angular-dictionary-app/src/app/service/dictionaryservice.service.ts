import { Injectable } from '@angular/core';
import {IWord} from '../model/IWord';
import {DictionaryDAO} from '../data/DictionaryDAO';

@Injectable({
  providedIn: 'root'
})
export class DictionaryserviceService {
  dictionary: IWord[] = DictionaryDAO.getAllDict();
  constructor() { }
  translate(word: string) {
    return this.dictionary.find((dict) => dict.word === word);
  }
}
