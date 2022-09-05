import {IFacility} from '../app/model/IFacility';

export class FacilityDAO {
  static facilities: IFacility[] = [
    {
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
    {
      id: 2,
      name: 'The Nam An Villa Hoi An',
      area: 100,
      cost: 3000000,
      maxPeople: 5,
      rentType: 'Ngày',
      serviceType: 'House',
      standardRoom: 'Vip',
      description: 'None',
      poolArea: 300,
      numberOfFloor: 2,
      // tslint:disable-next-line:max-line-length
      image: 'https://pix8.agoda.net/hotelImages/6945065/-1/d5d086d5350437206263579a5fb79117.jpg?ca=8&ce=1&s=1024x768'
    },
    {
      id: 3,
      name: 'Villa Savanna Rơm Hội An',
      area: 100,
      cost: 1000000,
      maxPeople: 2,
      rentType: 'Ngày',
      serviceType: 'Room',
      standardRoom: 'Vip',
      description: 'None',
      poolArea: 0,
      numberOfFloor: 0,
      // tslint:disable-next-line:max-line-length
      image: 'https://sayhi.vn/blog/wp-content/uploads/seo_beginner_auto_post/2019/01/10/savanna-1.jpg'
    },
    {
      id: 4,
      name: 'M Villa Hoi An',
      area: 100,
      cost: 4000000,
      maxPeople: 2,
      rentType: 'Ngày',
      serviceType: 'Villa',
      standardRoom: 'Vip',
      description: 'None',
      poolArea: 200,
      numberOfFloor: 2,
      // tslint:disable-next-line:max-line-length
      image: 'https://ashui.com/mag/images/stories/201907/mvilla01.jpg'
    },
    {
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
    {
      id: 6,
      name: 'Ancient House',
      area: 100,
      cost: 1000000,
      maxPeople: 2,
      rentType: 'Ngày',
      serviceType: 'Room',
      standardRoom: 'Vip',
      description: 'None',
      poolArea: 0,
      numberOfFloor: 0,
      // tslint:disable-next-line:max-line-length
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ee/33/a7/hoi-an-ancient-house.jpg?w=1200&h=-1&s=1'
    },
    {
      id: 7,
      name: 'The Garden House',
      area: 100,
      cost: 8000000,
      maxPeople: 5,
      rentType: 'Ngày',
      serviceType: 'House',
      standardRoom: 'Vip',
      description: 'None',
      poolArea: 100,
      numberOfFloor: 3,
      // tslint:disable-next-line:max-line-length
      image: 'https://media.mia.vn/uploads/blog-du-lich/the-garden-house-resort-phu-quoc-khu-nghi-duong-co-nha-vuon-xinh-dep-rong-4-ha-chuan-3-sao-01-1616762655.jpg'
    },
    {
      id: 8,
      name: 'The Memory-Danang',
      area: 100,
      cost: 2000000,
      maxPeople: 3,
      rentType: 'Giờ',
      serviceType: 'House',
      standardRoom: 'Vip',
      description: 'None',
      poolArea: 100,
      numberOfFloor: 0,
      // tslint:disable-next-line:max-line-length
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/199843856.jpg?k=5200689d98b8a2c1bf5b3815db586a1c5c8177f7337f3b6a5059fb7f5ecbea93&o=&hp=1'
    },
    {
      id: 9,
      name: 'Le House Boutique',
      area: 100,
      cost: 2000000,
      maxPeople: 2,
      rentType: 'Ngày',
      serviceType: 'Villa',
      standardRoom: 'Vip',
      description: 'None',
      poolArea: 0,
      numberOfFloor: 0,
      // tslint:disable-next-line:max-line-length
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/161851949.jpg?k=2ceb9d0c7869e28c42d512f96c1f37dffa47f9dbc24d6781d6e6aa11ef32dd11&o=&hp=1'
    },
    {
      id: 10,
      name: 'Raon Apartment and Hotel',
      area: 100,
      cost: 700000,
      maxPeople: 3,
      rentType: 'Năm',
      serviceType: 'Room',
      standardRoom: 'Vip',
      description: 'None',
      poolArea: 0,
      numberOfFloor: 0,
      // tslint:disable-next-line:max-line-length
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/142934612.jpg?k=bd7b25088fdd9144c1afa89b15fa0bf96cc232130b94046b1cd8365aa0a325bf&o=&hp=1'
    },
    {
      id: 11,
      name: 'Golden Rose Hotel',
      area: 100,
      cost: 500000,
      maxPeople: 2,
      rentType: 'Giờ',
      serviceType: 'Room',
      standardRoom: 'Vip',
      description: 'None',
      poolArea: 0,
      numberOfFloor: 0,
      // tslint:disable-next-line:max-line-length
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/357219020.jpg?k=ac596a11ff2898fa5426621776591700ba376e91df034a7cb91571372cf4a4cf&o=&hp=1'
    },
    {
      id: 12,
      name: 'Rosabella Boutique Hotel',
      area: 100,
      cost: 5000000,
      maxPeople: 4,
      rentType: 'Tháng',
      serviceType: 'Room',
      standardRoom: 'Vip',
      description: 'None',
      poolArea: 0,
      numberOfFloor: 0,
      // tslint:disable-next-line:max-line-length
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146661594.jpg?k=7382de4c1dc179cf35ad9e6b5dea699052947edd926050b7614b302b123bac19&o=&hp=1'
    },
  ];

  static getAllFacilities() {
    return this.facilities;
  }
}
