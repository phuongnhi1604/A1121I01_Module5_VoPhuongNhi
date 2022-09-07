import { Component, OnInit } from '@angular/core';
import {IWord} from '../model/IWord';
import {DictionaryserviceService} from '../service/dictionaryservice.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dict: IWord[] = this.dictService.dictionary;
  constructor(private dictService: DictionaryserviceService) { }
  ngOnInit(): void {
  }

}
