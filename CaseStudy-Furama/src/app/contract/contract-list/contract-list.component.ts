import { Component, OnInit } from '@angular/core';
import {IContract} from '../../model/IContract';
import {ContractServiceService} from '../../service/contract-service.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: IContract[] = [];
  p = 1;
  constructor(private contractService: ContractServiceService) { }
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    return this.contractService.getAllContracts().subscribe((contracts) => {
      this.contractList = contracts;
    });
  }
}
