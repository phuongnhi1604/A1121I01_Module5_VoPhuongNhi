import { Component, OnInit } from '@angular/core';
import {IContract} from '../model/IContract';
import {ContractDAO} from '../../data/ContractDAO';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: IContract[] = ContractDAO.getAllContracts();
  p = 1;
  constructor() { }
  ngOnInit(): void {
  }

}
