import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-group',
  templateUrl: './create-user-group.component.html',
  styleUrl: './create-user-group.component.css'
})
export class CreateUserGroupComponent {

  groupsForm!: FormGroup;

  constructor(private service: UsersService, private fb: FormBuilder,
    private router: Router) {}

  ngOnInit() {
    this.groupsForm = this.fb.group({
      group_code: [''],
      group_name: [''],
      group_type_id: [''],
      active: [''],
      created_by: [''],
      created_on: [''],
      approved: [''],
      approved_on: [''],
      approved_by: [''],
      reject: [''],
      deleted: [''],
      deleted_on: [''],
      deleted_by: [''],
      apprv_deleted_on: [''],
      apprv_deleted_by: [''],
      apprv_rejected_on: [''],
      apprv_rejected_by: [''],
      creation_status: [''],
      create_json: [''],
      update_json: [''],
      right_display_name: [''],
      modified_on: [''],
      modified_by: [''],
      group_codes: [''],
      group_names: ['']
    })
  }

  createUserGroup() {
    console.log(this.groupsForm?.value)
    this.service.addUserGroup(this.groupsForm?.value).subscribe((response) => {
      console.log(response);
      alert("User Group created successfully");
      this.router.navigateByUrl('/admin/user-groups-table');
    })
  }
}
