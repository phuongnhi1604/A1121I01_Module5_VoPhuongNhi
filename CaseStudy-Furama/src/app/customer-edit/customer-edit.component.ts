import {Component, Input, OnInit} from '@angular/core';
import {ICustomer} from '../model/ICustomer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  @Input() customer: ICustomer = {};
  customerTypes: Array<string> = ['Diamond', 'Platinum', 'Gold', 'Silver', 'Member'];
  constructor() { }

  ngOnInit(): void {
  }

}
