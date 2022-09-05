import {IContract} from '../app/model/IContract';
import {ICustomer} from '../app/model/ICustomer';
import {IFacility} from '../app/model/IFacility';

export class ContractDAO {
  static contracts: IContract[] = [{
    id: 1,
    customer: {
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
    facility: {
      id: 1,
      name: 'Santorin HoiAn Villa',
      area: 100,
      cost: 2000000,
      maxPeople: 4,
      rentType: 'Tháng',
      serviceType: 'Villa',
      standardRoom: 'Vip',
      description: 'None',
      poolArea: 200,
      numberOfFloor: 1,
      // tslint:disable-next-line:max-line-length
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/238597854.jpg?k=85c0b22f7bbacede657f74fbc030caf1a75575db1ad5ce2966c6d09d45e5a9bd&o=&hp=1'
    },
    startDay: '02/09/2022',
    endDay: '05/09/2022',
    deposit: 500000,
  },
    {
      id: 2,
      customer: {
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
      },
      facility: {
        id: 5,
        name: 'The Beach House',
        area: 100,
        cost: 3000000,
        maxPeople: 2,
        rentType: 'Ngày',
        serviceType: 'Room',
        standardRoom: 'Vip',
        description: 'None',
        poolArea: 0,
        numberOfFloor: 0,
        // tslint:disable-next-line:max-line-length
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/0b/7b/66/the-beach-house-resort.jpg'
      },
      startDay: '10/08/2022',
      endDay: '13/08/2022',
      deposit: 500000,
    }
  ];

  static getAllContracts() {
    return this.contracts;
  }
}
