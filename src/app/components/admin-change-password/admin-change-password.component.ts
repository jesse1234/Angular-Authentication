import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrl: './admin-change-password.component.css'
})
export class AdminChangePasswordComponent {
  changePasswordForm!: FormGroup;
  id: number = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute, private service: AuthService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.changePasswordForm = this.fb.group({
      password: ['',Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator})
  }

  onSubmit() {
    if (this.id) {
        const newPassword = this.changePasswordForm.get('password')?.value;
        this.service.changePassword(this.id, { password: newPassword }).subscribe(
            (response) => {
                console.log(response);
                alert("Password changed successfully");
                this.router.navigateByUrl('admin/dashboard');
            },
            (error) => {
                console.error(error);
                if (error.status === 400 && error.error.message === "New password must be different from the current password") {
                    alert("New password must be different from the current password");
                } else {
                    alert("Failed to change password. Please try again");
                }
            }
        );
    } else {
        console.error("User ID not found");
        alert("User ID not found. Please try again");
    }
}

  private passwordMatchValidator(fg: FormGroup) {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;

    if(password != confirmPassword) {
      fg.get('confirmPassword')?.setErrors({ passwordMismatch: true});
    } else {
      fg.get('confirmPassword')?.setErrors(null);
    }
  }
}
