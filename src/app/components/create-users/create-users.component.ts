import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { BankBranchService } from '../../service/bank-branch.service';
import { LocalStorageService } from '../../service/storage-service/local-storage.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrl: './create-users.component.css'
})
export class CreateUsersComponent {
  userForm!: FormGroup;
  bankBranches: any[] = [];
  selectedBranchId: number | null=null;

  userGroups: any[] = []

  constructor(private service: UsersService,
    private fb: FormBuilder,
    private router: Router,
    private branchService: BankBranchService) {}

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
      });
      const userId = localStorage.getItem('I_user');
      this.userForm.patchValue({
        created_by: userId,
        deleted_by: userId,
        apprv_deleted_by: userId,
        apprv_rejected_by: userId,
        blocked_by: userId,
        unblocked_by: userId,
        modified_by: userId
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

    loadBankBranch() {
      this.branchService.getAllBankBranches().subscribe((branches: any) => {
        this.bankBranches = branches['branches'];
      })
    }

    loadUserGroup() {
      this.service.getAllUserGroups().subscribe((groups: any) => {
        this.userGroups = groups['user_group_masters'];
      })
    }
}
