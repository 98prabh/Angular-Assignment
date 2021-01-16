import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  users: User[] = [
    {
      name: 'Prabhjot',
      username: 'Prabhjot',
      email: 'prabhjot@gmail.com'
    },
    {
      name: 'Gagan',
      username: 'Gagan',
      email: 'gagan@gmail.com'
    },
    {
      name: 'Karan',
      username: 'Karan',
      email: 'karan@gmail.com'
    },
    {
      name: 'user1',
      username: 'user1',
      email: 'user1@gmail.com'
    },
    
    {
      name: 'user2',
      username: 'user2',
      email: 'user2@gmail.com'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteUser(userIndex: number) {
    this.users.splice(userIndex, 1)
  }

}
