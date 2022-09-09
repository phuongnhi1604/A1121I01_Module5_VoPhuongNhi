import {ICustomer} from './ICustomer';
import {IFacility} from './IFacility';

export interface IContract {
  id?: number;
  customer?: ICustomer;
  facility?: IFacility;
  startDay?: string;
  endDay?: string;
  deposit?: number;
  total?: number;
}
