import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit{

  message:string="";

  user:User=new User('','',0,'');

  users:User[]=[];

  ngOnInit(): void {
    this.getAllUsers(); 
  }
  
    constructor(private userservice:UserService)
    {
  
    }
  
      saveToDB()
      {
          this.userservice.saveToDB(this.user).subscribe();
  
      }
  
  
      getUser()
      {
          this.userservice.getUser(this.user.username).subscribe(userobject=>this.user=userobject);
      }
  
      
        // [ ( ) User class object  subscribe()] Observable object
  
        // [ ( ) User class object  get() ] ArrayList object
  
  
      // (arguments) => function defination
  
  
      deleteUser()
      {
        // [true subscribe()] Observable object
  
          this.userservice.deleteUser(this.user.username).subscribe(message=>
          {
  
            if(message)
              this.message="record deleted";
            else
              this.message="something went wrong at server side"
          });
      }
  
      getAllUsers()
      {
          this.userservice.getAllUsers().subscribe(arrayFromResponse=>this.users=arrayFromResponse);
      }

}
