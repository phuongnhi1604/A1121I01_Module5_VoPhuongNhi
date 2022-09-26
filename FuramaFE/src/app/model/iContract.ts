import {ICustomer} from './icustomer';
import {IService} from './iservice';

export interface IContract {
  contract_id?: number;
  contract_start_date?: string;
  contract_end_date?: string;
  contract_deposit?: number;
  contract_total_money?: number;
  customer?: ICustomer;
  service?: IService;
}
