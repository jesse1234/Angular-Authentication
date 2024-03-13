import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainSidebarComponent } from './layout/main-sidebar/main-sidebar.component';
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { ContentWrapperComponent } from './layout/content-wrapper/content-wrapper.component';
import { ContentSidebarComponent } from './layout/content-sidebar/content-sidebar.component';
import { MainFooterComponent } from './layout/main-footer/main-footer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainSidebarComponent,
    MainHeaderComponent,
    ContentWrapperComponent,
    ContentSidebarComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
