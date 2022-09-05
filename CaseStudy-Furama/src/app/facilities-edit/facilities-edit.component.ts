import {Component, Input, OnInit} from '@angular/core';
import {IFacility} from '../model/IFacility';

@Component({
  selector: 'app-facilities-edit',
  templateUrl: './facilities-edit.component.html',
  styleUrls: ['./facilities-edit.component.css']
})
export class FacilitiesEditComponent implements OnInit {
  @Input() facility: IFacility = {};
  rentTypes: Array<string> = ['Ngày', 'Tháng', 'Năm', 'Giờ'];
  typeServices: Array<string> = ['Villa', 'House', 'Room'];
  constructor() { }

  ngOnInit(): void {
  }
}
