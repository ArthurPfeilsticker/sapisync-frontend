import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessApiService } from 'src/app/services/access-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  digits: string[] = ['', '', '', ''];

  adminAccess: number = 3497;

  code: any;
  errorMessage: string | null = null;

  user: any;

  constructor(
    private router: Router,
    private apiService: AccessApiService,
  ) { }

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
    //check if admin is trying to access the data
    if(number == this.adminAccess){
      this.code = +number;
      this.navigateToUserInfo();
    }else{
      //requisition to check if the typed id corresponds to an active data
      this.apiService.getOneUser(number).subscribe(data => {
        this.user = data;
        if(this.user == null){
            this.errorMessage = 'Digite um id válido';
            throw new Error(this.errorMessage);
        }else{
          //here the data exists then we can proceed
          this.code = +number;
          this.navigateToUserInfo();
        }
      });
    }
  }

  navigateToUserInfo(){
    this.router.navigate(['/user-page', this.code]);
  }

}
