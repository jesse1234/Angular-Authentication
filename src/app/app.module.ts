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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
