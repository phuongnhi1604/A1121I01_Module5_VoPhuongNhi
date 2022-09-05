import { Component, OnInit } from '@angular/core';
import {IWord} from '../model/iword';
import {DictionaryServiceService} from '../service/dictionary-service.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dict: IWord[] = this.dictService.dict;
  constructor(private dictService: DictionaryServiceService) { }

  ngOnInit(): void {
  }

}
