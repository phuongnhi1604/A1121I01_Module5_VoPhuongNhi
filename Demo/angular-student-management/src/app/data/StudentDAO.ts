import {IStudent} from '../../model/IStudent';

export class StudentDAO {
  static students: IStudent[] = [
    {
      id: 1,
      name: 'Phương Nhi',
      address: 'Đà Nẵng',
      age: 21,
      mark: 6,
      // tslint:disable-next-line:max-line-length
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8v3UolyZlLPX6ONi-eQM4evITTOUINtHGfnAdooonCYVFv0MBAzvoL6jwpSJpyUe3Lmc&usqp=CAU'
    },
    {
      id: 2,
      name: 'Quốc Khánh',
      address: 'Sài Gòn',
      age: 22,
      mark: 5,
      // tslint:disable-next-line:max-line-length
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8v3UolyZlLPX6ONi-eQM4evITTOUINtHGfnAdooonCYVFv0MBAzvoL6jwpSJpyUe3Lmc&usqp=CAU'
    },
  ];

  static getAllStudent() {
    return this.students;
  }
}
