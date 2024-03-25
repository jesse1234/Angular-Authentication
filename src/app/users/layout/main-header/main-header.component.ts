import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { UsersService } from '../../../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private router: Router
  ) {}

  isOpen: boolean = false;
  message!: String;
  username!: String;

  ngOnInit() {
    this.hello();
  }

  hello() {
    this.authService.hello().subscribe((response) => {
      console.log(response);
      this.message = response.message;
      this.username=response.username;
    })
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen
  }

  logouts(): void {
    localStorage.removeItem('JWT'); // Remove JWT token from local storage
    // Optionally, perform additional cleanup tasks or navigate to another page
    localStorage.removeItem('I_user');
    localStorage.removeItem('I_role');
    alert("User logged out successfully");
    console.log('logout successful');
}

  changePassword() {
    const userId = this.userService.getUserId();

    if(userId) {
      this.router.navigate(['/user/change-password', userId]);
    } else {
      console.error("User ID not found in local storage");
    }
  }
}

