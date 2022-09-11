import {IRentType} from './IRentType';
import {IServiceType} from './IServiceType';

export interface IFacility {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  rentType?: IRentType;
  serviceType?: IServiceType;
  standardRoom?: string;
  description?: string;
  poolArea?: number;
  numberOfFloor?: number;
  image?: string;
}
