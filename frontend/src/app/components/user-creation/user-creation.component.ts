import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { UserService, User } from '../../services/user.service';
import { UserListComponent } from "../user-list/user-list.component";


@Component({
  selector: 'app-user-creation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-creation.component.html',
  styleUrl: './user-creation.component.css'
})
export class UserCreationComponent {

  newUser: Partial<User> = {
    firstname: '',
    lastname: '',
    email: '',
    city: ''
  };


  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  addUser() {
    this.userService.addUser(this.newUser).subscribe({
      next: (data) => {
        this.router.navigate(['/']);
        console.log('Utilisateur ajouté:', data);


        this.newUser = { firstname: '', lastname: '', email: '', city: '' };

      },
      error: (err) => {
        console.error('Erreur: utilisateur non ajouté', err);
      }
    });
  }

}