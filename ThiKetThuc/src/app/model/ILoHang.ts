import {ISanPham} from './ISanPham';

export interface ILoHang {
  id?: number;
  ma?: string;
  sanpham?: ISanPham;
  soLuong?: number;
  ngayNhapHang?: string;
  ngaySanXuat?: string;
  ngayHetHan?: string;
}
