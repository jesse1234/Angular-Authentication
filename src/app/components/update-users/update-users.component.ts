import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrl: './update-users.component.css'
})
export class UpdateUsersComponent {
  updateForm!: FormGroup;
 
  id: number = this.route.snapshot.params['id']; 
  constructor(private service: UsersService, private fb:FormBuilder, private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.updateForm = this.fb.group({
      email: [null],
      first_name: [null],
      fullname: [null],
      phone: [null],
      surname: [null],
      username: [null],
      other_names: [null],
      group_id: [null],
      pos_user_level: [null],
      type_id: [null],
      created_by: [null],
      created_at: [null],
      agent_id: [null],
      status: [null],
      verification_pass: [null],
      verified: [null],
      verified_by: [null],
      verified_on: [null],
      agent_code: [null],
      password: [null],
      password_change_date: [null],
      locked: [null],
      password_expired: [null],
      firstlogin: [null],
      branch_id: [null],
      logged_in: [null],
      reset: [null],
      reject: [null],
      deleted: [null],
      deleted_on: [null],
      deleted_by: [null],
      apprv_deleted_by: [null],
      apprv_deleted_on: [null],
      apprv_rejected_by: [null],
      apprv_rejected_on: [null],
      creationStatus: [null],
      create_json: [null],
      update_json: [null],
      last_login_date: [null],
      loginattempts: [null],
      modified_on: [null],
      unblocked_by: [null],
      blocked_by: [null],
      unblocked_on: [null],
      blocked_on: [null],
      IDNumber: [null],
      modified_by: [null],
      created_status: [null],
      role: [null],
    })
    this.getUserById();
  }

  getUserById() {
    this.service.getUser(this.id).subscribe((res: any) => {
      // Check if 'user' exists in the response
      if (res && res.user) {
        console.log(res.user); // Logging the 'user' part
        this.updateForm.patchValue(res.user); // Patching form value with 'user'
      }
    });
  }
  
  updatingUser() {
    this.service.updateUser(this.id, this.updateForm.value).subscribe((res) => {
      console.log(res)
      if(res.updated_user != null) {
        alert("User updated successfully");
        this.router.navigateByUrl("/admin/users-table");
      }
    })
  }
  
}
