import { Component, Input, OnInit } from '@angular/core';
import { AccessApiService } from 'src/app/services/access-api.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() code: string = '';
  user: any;

  constructor(
    private apiService: AccessApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getOneUser(+this.code).subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

}
