import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  signupForm!: FormGroup;

  constructor(
    private service: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      first_name: ['',Validators.required],
      fullname: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required],
      password_change_date: ['',Validators.required],
      locked: ['',Validators.required],
      password_expired: ['',Validators.required],
      firstlogin: ['',Validators.required],
      logged_in: ['',Validators.required],
      reset: ['',Validators.required],
      role: ['',Validators.required],
    } ,{ validator: this.passwordMatchValidator})
  }

  private passwordMatchValidator(fg: FormGroup) {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;

    if(password != confirmPassword) {
      fg.get("confirmPassword")?.setErrors({ passwordMismatch: true });
    } else {
      fg.get("confirmPassword")?.setErrors(null);
    }
  }

  signup(){
    console.log(this.signupForm?.value)
    this.service.signup(this.signupForm?.value).subscribe((response)=>{
      console.log(response);
    })
  }
}
