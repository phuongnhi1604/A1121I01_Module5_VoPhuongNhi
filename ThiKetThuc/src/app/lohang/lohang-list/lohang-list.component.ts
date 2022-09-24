import { Component, OnInit } from '@angular/core';
import {ILoHang} from '../../model/ILoHang';
import {LohangService} from '../../service/lohang.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-lohang-list',
  templateUrl: './lohang-list.component.html',
  styleUrls: ['./lohang-list.component.css']
})
export class LohangListComponent implements OnInit {
  dsLoHang: ILoHang[] = [];
  loHangXoa: ILoHang = {};
  p = 1;
  term: string;
  constructor(private loHangService: LohangService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.loHangService.getAll().subscribe((dsLoHang) => {
      this.dsLoHang = dsLoHang;
    });
  }

  getLoHangXoa(lohang: ILoHang) {
    this.loHangXoa = lohang;
  }
  delete(id: number) {
    this.loHangService.deleteById(id).subscribe(() => {
      // tslint:disable-next-line:no-shadowed-variable
    }, (error) => {
      console.log(error);
    }, () => {
      alert('Xóa thành công');
      this.ngOnInit();
    });
  }
}
