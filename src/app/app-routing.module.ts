import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent } from './components/landing/landing.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UpdateUsersComponent } from './components/update-users/update-users.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { UserGroupsTableComponent } from './components/user-groups-table/user-groups-table.component';
import { CreateUserGroupComponent } from './components/create-user-group/create-user-group.component';
import { UpdateUserGroupComponent } from './components/update-user-group/update-user-group.component';
import { BankBranchTableComponent } from './components/bank-branch-table/bank-branch-table.component';
import { CreateBankBranchComponent } from './components/create-bank-branch/create-bank-branch.component';
import { UpdateBankBranchComponent } from './components/update-bank-branch/update-bank-branch.component';
import { UsersModule } from './users/users.module';
import { RoleGuard } from './guard/role.guard';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/dashboard', component: DashboardComponent, canActivate: [RoleGuard]},
  {path: 'admin/users-table', component: UsersTableComponent, canActivate: [AuthGuard]},
  {path: 'admin/update-user/:id', component: UpdateUsersComponent, canActivate: [AuthGuard]},
  {path: 'admin/create-user', component:CreateUsersComponent, canActivate: [AuthGuard]},
  {path: 'admin/user-groups-table', component:UserGroupsTableComponent, canActivate: [AuthGuard]},
  {path: 'admin/create-user-group', component: CreateUserGroupComponent, canActivate: [AuthGuard]},
  {path: 'admin/update-user-group/:id', component: UpdateUserGroupComponent, canActivate: [AuthGuard]},
  {path: 'admin/bank-branch-table', component: BankBranchTableComponent, canActivate: [AuthGuard]},
  {path: 'admin/create-bank-branch', component: CreateBankBranchComponent, canActivate: [AuthGuard]},
  {path: 'admin/update-bank-branch/:id', component: UpdateBankBranchComponent, canActivate: [AuthGuard]},

  {path: 'user',loadChildren:() => import('./users/users.module').then(m => m.UsersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
