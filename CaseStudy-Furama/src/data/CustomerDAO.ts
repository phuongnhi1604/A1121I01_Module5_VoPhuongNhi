import {ICustomer} from '../app/model/ICustomer';

export class CustomerDAO {
  static customers: ICustomer[] = [
    {
    id: 1,
    code: 'KH001',
    type: 'Diamond',
    name: 'Vo Phuong Nhi',
    birthday: '20/10/2001',
    gender: false,
    idCard: '382937283728',
    phone: '0421352322',
    email: 'nhi@gmail.com',
    address: 'Da Nang'
    },
    {
      id: 2,
      code: 'KH002',
      type: 'Member',
      name: 'Tran Van A',
      birthday: '12/02/1999',
      gender: true,
      idCard: '387492352728',
      phone: '0921532362',
      email: 'Aaa@gmail.com',
      address: 'Ha Noi'
    },
    {
      id: 3,
      code: 'KH003',
      type: 'Gold',
      name: 'Le Tran Anh Tuyet',
      birthday: '21/07/1992',
      gender: false,
      idCard: '458363926352',
      phone: '0332528533',
      email: 'anhtuyetle@gmail.com',
      address: 'TP HCM'
    },
    {
      id: 4,
      code: 'KH004',
      type: 'Gold',
      name: 'Le Tran Anh Tuyet',
      birthday: '21/07/1992',
      gender: false,
      idCard: '458363926352',
      phone: '0332528533',
      email: 'anhtuyetle@gmail.com',
      address: 'TP HCM'
    },
    {
      id: 5,
      code: 'KH005',
      type: 'Gold',
      name: 'Le Tran Anh Tuyet',
      birthday: '21/07/1992',
      gender: false,
      idCard: '458363926352',
      phone: '0332528533',
      email: 'anhtuyetle@gmail.com',
      address: 'TP HCM'
    },
    {
      id: 6,
      code: 'KH006',
      type: 'Gold',
      name: 'Le Tran Anh Tuyet',
      birthday: '21/07/1992',
      gender: false,
      idCard: '458363926352',
      phone: '0332528533',
      email: 'anhtuyetle@gmail.com',
      address: 'TP HCM'
    },
    {
      id: 7,
      code: 'KH007',
      type: 'Gold',
      name: 'Le Tran Anh Tuyet',
      birthday: '21/07/1992',
      gender: false,
      idCard: '458363926352',
      phone: '0332528533',
      email: 'anhtuyetle@gmail.com',
      address: 'TP HCM'
    },
    {
      id: 8,
      code: 'KH008',
      type: 'Gold',
      name: 'Le Tran Anh Tuyet',
      birthday: '21/07/1992',
      gender: false,
      idCard: '458363926352',
      phone: '0332528533',
      email: 'anhtuyetle@gmail.com',
      address: 'TP HCM'
    },
    {
      id: 9,
      code: 'KH009',
      type: 'Gold',
      name: 'Le Tran Anh Tuyet',
      birthday: '21/07/1992',
      gender: false,
      idCard: '458363926352',
      phone: '0332528533',
      email: 'anhtuyetle@gmail.com',
      address: 'TP HCM'
    },
    {
      id: 10,
      code: 'KH0010',
      type: 'Gold',
      name: 'Le Tran Anh Tuyet',
      birthday: '21/07/1992',
      gender: false,
      idCard: '458363926352',
      phone: '0332528533',
      email: 'anhtuyetle@gmail.com',
      address: 'TP HCM'
    }
  ];

  static getAllCustomers() {
    return this.customers;
  }
}
