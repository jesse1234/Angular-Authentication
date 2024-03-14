import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrl: './create-users.component.css'
})
export class CreateUsersComponent {
  userForm!: FormGroup;

  constructor(private service: UsersService,
    private fb: FormBuilder,
    private router: Router) {}

    ngOnInit() {
      this.userForm = this.fb.group({
          email: ['',Validators.email],
          first_name: ['',Validators.required],
          fullname: ['',Validators.required],
          username: ['',Validators.required],
          password: ['',Validators.required],
          phone: [''],
          surname: [''],
          other_names: [''],
          group_id: [''],
          pos_user_level: [''],
          type_id: [''],
          created_by: [''],
          created_at: [''],
          agent_id: [''],
          status: [''],
          verification_pass: [''],
          verified: [''],
          verified_by: [''],
          verified_on: [''],
          agent_code: [''],
          password_change_date: ['',Validators.required],
          locked: ['',Validators.required],
          password_expired: ['',Validators.required],
          firstlogin: ['',Validators.required],
          branch_id: [''],
          logged_in: [''],
          reset: ['',Validators.required],
          reject: [''],
          deleted: [''],
          deleted_by: [''],
          deleted_on: [''],
          apprv_deleted_on: [''],
          apprv_deleted_by: [''],
          apprv_rejected_by: [''],
          apprv_rejected_on: [''],
          creationStatus: [''],
          create_json: [''],
          update_json: [''],
          last_login_date: [''],
          loginattempts: [''],
          modified_on: [''],
          unblocked_by: [''],
          unblocked_on: [''],
          blocked_by: [''],
          blocked_on: [''],
          IDNumber: [''],
          modified_by: [''],
          created_status: [''],
          role: [''],
      })
    }

    createUser() {
      console.log(this.userForm?.value)
      this.service.addUser(this.userForm?.value).subscribe((response) => {
        console.log(response);
        alert("User created successfully");
        this.router.navigateByUrl('/admin/users-table')
      })
      
    }
}
