import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ISanPham} from '../../model/ISanPham';
import {LohangService} from '../../service/lohang.service';
import {Router} from '@angular/router';
import {SanphamService} from '../../service/sanpham.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-lohang-create',
  templateUrl: './lohang-create.component.html',
  styleUrls: ['./lohang-create.component.css']
})
export class LohangCreateComponent implements OnInit {
  createForm: FormGroup;
  id: number;
  dsSanPham: ISanPham[] = [];
  constructor(private loHangService: LohangService, private router: Router, private sanPhamService: SanphamService) { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      ma: new FormControl('', [Validators.required, Validators.pattern('^LH-[0-9]{4}$')]),
      sanpham: new FormControl('', [Validators.required]),
      soLuong: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      ngayNhapHang: new FormControl('', [Validators.required]),
      ngaySanXuat: new FormControl('', [Validators.required]),
      ngayHetHan: new FormControl('', [Validators.required])
    });
    this.getAllSanPham();
  }

  create() {
    const lohang = this.createForm.value;
    this.loHangService.create(lohang).subscribe(() => {
      this.createForm.reset();
      alert('Tạo mới thành công');
      this.router.navigateByUrl('lohang/list');
    }, error => {
      console.log(error);
    });
  }

  getAllSanPham() {
    this.sanPhamService.getAll().subscribe((dsSanPham) => {
      this.dsSanPham = dsSanPham;
    });
  }

}
