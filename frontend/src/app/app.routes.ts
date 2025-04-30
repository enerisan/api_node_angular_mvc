import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreationComponent } from './components/user-creation/user-creation.component';
import { UserModificationComponent } from './components/user-modification/user-modification.component';
export const routes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'creation', component: UserCreationComponent },
    { path: 'update/:id', component: UserModificationComponent }

];
