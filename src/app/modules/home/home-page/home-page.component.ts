import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  digits: string[] = ['', '', '', ''];
  //numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  code: any;
  inputCode: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addDigit(number: number) {
    const index = this.digits.findIndex(digit => !digit);
    if (index !== -1) {
      this.digits[index] = number.toString();
    }
  }

  deleteLastDigit() {
    for (let i = this.digits.length - 1; i >= 0; i--) {
      if (this.digits[i] !== '') {
        this.digits[i] = '';
        break;
      }
    }
  }

  setCode() {
    const number = parseInt(this.digits.join(''), 10);
    this.code = +number;
    this.navigateToUserInfo();
  }

  navigateToUserInfo(){
    this.router.navigate(['/user-page', this.code]);
  }


}
