import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.css'
})
export class MainSidebarComponent {
  message!: String;
  username!: String;

  constructor(
    private service: AuthService,
  ) {}

  ngOnInit() {
    this.hello();
  }

  hello() {
    this.service.hello().subscribe((response) => {
      console.log(response);
      this.message = response.message;
      this.username=response.username;
    })
  }

  logout(): void {
    this.service.logout();
  }
}
