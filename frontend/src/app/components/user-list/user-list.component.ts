import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../services/user.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet],
  providers: [UserService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });

  }


  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => {

        this.users = this.users.filter(user => user.id !== id);
      },
      error: () => {
        console.error('Erreur: utilisateur non effacé');
      }
    });
  }

}
