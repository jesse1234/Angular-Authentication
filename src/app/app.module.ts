import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule,  provideHttpClient, withFetch} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent } from './components/landing/landing.component';
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { MainSidebarComponent } from './layout/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './layout/content-wrapper/content-wrapper.component';
import { ContentSidebarComponent } from './layout/content-sidebar/content-sidebar.component';
import { MainFooterComponent } from './layout/main-footer/main-footer.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UpdateUsersComponent } from './components/update-users/update-users.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { UserGroupsTableComponent } from './components/user-groups-table/user-groups-table.component';
import { CreateUserGroupComponent } from './components/create-user-group/create-user-group.component';
import { UpdateUserGroupComponent } from './components/update-user-group/update-user-group.component';
import { BankBranchTableComponent } from './components/bank-branch-table/bank-branch-table.component';
import { CreateBankBranchComponent } from './components/create-bank-branch/create-bank-branch.component';
import { UpdateBankBranchComponent } from './components/update-bank-branch/update-bank-branch.component';

import { UserFilterPipe } from './filter/user-filter.pipe';
import { ApproveUserComponent } from './components/approve-user/approve-user.component';
import { ApproveUserTableComponent } from './components/approve-user-table/approve-user-table.component';
import { AdminChangePasswordComponent } from './components/admin-change-password/admin-change-password.component';
import { UsersModule } from './users/users.module';
import { ChartsComponent } from './components/charts/charts.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    LandingComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ContentSidebarComponent,
    MainFooterComponent,
    UsersTableComponent,
    UpdateUsersComponent,
    CreateUsersComponent,
    UserGroupsTableComponent,
    CreateUserGroupComponent,
    UpdateUserGroupComponent,
    BankBranchTableComponent,
    CreateBankBranchComponent,
    UpdateBankBranchComponent,
    UserFilterPipe,
    ApproveUserComponent,
    ApproveUserTableComponent,
    AdminChangePasswordComponent,
    ChartsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UsersModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
