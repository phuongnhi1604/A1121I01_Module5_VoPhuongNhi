import {IRentType} from './iRent-type';
import {IServiceType} from './iService-type';

export interface IService {
  service_id?: number;
  service_name?: string;
  service_area?: number;
  service_cost?: number;
  service_max_people?: number;
  rentType?: IRentType;
  serviceType?: IServiceType;
  standard_room?: string;
  description_other_convenience?: string;
  pool_area?: number;
  number_of_floors?: number;
  image?: number;
}
