import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  id: any;
  user: any;

  constructor(private userService: UserService, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.userService.getUserbyId(this.id).subscribe(data => {
      this.user = data;
    })
  }

  onSubmit(data: any){
    this.userService.deleteUser(this.id).subscribe(a => console.log(a))
  }



}
