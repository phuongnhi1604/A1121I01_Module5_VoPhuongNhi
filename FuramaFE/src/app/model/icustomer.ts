import {ICustomerType} from './icustomer-type';

export interface ICustomer {
  customer_id?: number;
  customer_code?: string;
  customerType?: ICustomerType;
  customer_name?: string;
  customer_birthday?: string;
  customer_gender?: boolean;
  customer_id_card?: string;
  customer_phone?: string;
  customer_email?: string;
  customer_address?: string;
}
