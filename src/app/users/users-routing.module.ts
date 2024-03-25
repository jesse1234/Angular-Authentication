import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoleGuard } from '../guard/role.guard';
import { UserRoleGuard } from '../guard/user-role.guard';
import { AuthGuard } from '../guard/auth.guard';
import { UserChangePasswordComponent } from './components/user-change-password/user-change-password.component';



const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent, canActivate: [UserRoleGuard, AuthGuard]},
  {path: 'change-password/:id', component: UserChangePasswordComponent, canActivate: [UserRoleGuard, AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
