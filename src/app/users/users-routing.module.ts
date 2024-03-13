import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoleGuard } from '../guard/role.guard';
import { UserRoleGuard } from '../guard/user-role.guard';
import { AuthGuard } from '../guard/auth.guard';


const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent, canActivate: [UserRoleGuard, AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
