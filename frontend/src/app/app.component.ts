import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreationComponent } from './components/user-creation/user-creation.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, UserCreationComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

bootstrapApplication(AppComponent, {
  providers: [],

})

