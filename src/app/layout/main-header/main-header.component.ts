import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  message!: String;
  username!: String;
isOpen: boolean = false;

  constructor(
    private service: AuthService,
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.hello();
  }

 toggleMenu(): void {
    this.isOpen = !this.isOpen
  }

  hello() {
    this.service.hello().subscribe((response) => {
      console.log(response);
      this.message = response.message;
      this.username=response.username;
    })
  }

  logouts(): void {
        localStorage.removeItem('JWT'); // Remove JWT token from local storage
        // Optionally, perform additional cleanup tasks or navigate to another page
        localStorage.removeItem('I_user');
        localStorage.removeItem('I_role');
        alert("User logged out successfully");
        console.log('logout successful')
        this.router.navigateByUrl('/login');
  }

  changePassword() {
    const userId = this.userService.getUserId();

    if(userId) {
      this.router.navigate(['/admin/change-password', userId]);
    } else {
      console.error("User ID not found in local storage");
    }
  }
}
