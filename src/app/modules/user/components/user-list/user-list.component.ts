import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessApiService } from 'src/app/services/access-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any[] = [];

  constructor(
    private apiService: AccessApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
      console.log("USERS: ", this.users)
    });
  }

  goToInfo(id: number){
    this.router.navigate(['/user-page', id]);
  }

}
