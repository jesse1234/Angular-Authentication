import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

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
    private router: Router
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
    this.service.logout().subscribe(
      () => {
        console.log('Logout successful');
        localStorage.removeItem('JWT'); // Remove JWT token from local storage
        // Optionally, perform additional cleanup tasks or navigate to another page
        localStorage.removeItem('I_user');
        localStorage.removeItem('I_role');
        this.router.navigateByUrl('/login');
      },
      error => {
        console.error('Logout error:', error);
        // Handle logout error if needed
        this.router.navigateByUrl('/login');
      }
    );
  }
}
