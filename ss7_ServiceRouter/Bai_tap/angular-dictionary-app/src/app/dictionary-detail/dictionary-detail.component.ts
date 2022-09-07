import { Component, OnInit } from '@angular/core';
import {DictionaryserviceService} from '../service/dictionaryservice.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dict: any;
  constructor(private dictService: DictionaryserviceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const word = param.get('word');
      this.dict = this.dictService.translate(word);
    });
  }

}
