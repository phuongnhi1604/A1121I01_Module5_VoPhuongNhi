import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  firstNumber: number;
  secondNumber: number;
  operator: string;
  result: number;
  firstNumberChange(target) {
    this.firstNumber = target;
  }
  secondNumberChange(target) {
    this.secondNumber = target;
  }
  operatorChange(target) {
    this.operator = target;
  }
  addition(): number {
    return this.firstNumber + this.secondNumber;
  }
  subtraction(): number {
    return this.firstNumber - this.secondNumber;
  }
  multiplication(): number {
    return this.firstNumber * this.secondNumber;
  }
  division(): number {
    return this.firstNumber / this.secondNumber;
  }
  calculate() {
    switch (this.operator) {
      case '+': this.result = this.addition(); break;
      case '-': this.result = this.subtraction(); break;
      case '*': this.result = this.multiplication(); break;
      case '/': this.result = this.division(); break;
    }
  }
}
