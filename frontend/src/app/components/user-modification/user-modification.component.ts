import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, User } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-user-modification',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './user-modification.component.html',
    styleUrls: ['./user-modification.component.css']
})
export class UserModificationComponent implements OnInit {
    userId: number = 0;
    user: User = { id: 0, firstname: '', lastname: '', email: '', city: '' };
    errorMessage = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit(): void {

        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.userId = +id;
                this.userService.getUserById(this.userId).subscribe({
                    next: (data) => {
                        this.user = data[0];
                        console.log(data);
                    },
                    error: () => this.errorMessage = 'Erreur lors du chargement de l\'utilisateur.'
                });
            }

        });
    }

    updateUser(): void {
        this.userService.updateUser(this.userId, this.user).subscribe({

            next: () => {

                console.log('User modifié');
                this.router.navigateByUrl('/');
            },
            error: () => this.errorMessage = 'Erreur lors de la modification.'
        });
    }
}
