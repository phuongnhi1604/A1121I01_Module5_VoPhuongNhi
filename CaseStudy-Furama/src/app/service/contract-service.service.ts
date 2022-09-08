import { Injectable } from '@angular/core';
import {ContractDAO} from '../../data/ContractDAO';
import {IContract} from '../model/IContract';

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {

  constructor() { }

  getAllContracts() {
    return ContractDAO.getAllContracts();
  }

  addContract(contract: IContract) {
    ContractDAO.contracts.push(contract);
  }
}
