import {ICustomerType} from './ICustomerType';

export interface ICustomer {
  id?: number;
  code?: string;
  type?: ICustomerType;
  name?: string;
  birthday?: string;
  gender?: string;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
}
