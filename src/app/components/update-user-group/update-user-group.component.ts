import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user-group',
  templateUrl: './update-user-group.component.html',
  styleUrl: './update-user-group.component.css'
})
export class UpdateUserGroupComponent {
  updateGroups!: FormGroup;
  id: number = this.route.snapshot.params['id'];

  constructor(private service: UsersService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    this.updateGroups = this.fb.group({
      id: [null],
      group_code: [null],
      group_name: [null],
      group_type_id: [null],
      active: [null],
      created_by: [null],
      created_on: [null],
      approved: [null],
      approved_on: [null],
      approved_by: [null],
      reject: [null],
      deleted: [null],
      deleted_by: [null],
      deleted_on: [null],
      apprv_deleted_by: [null],
      apprv_deleted_on: [null],
      apprv_rejected_by: [null],
      apprv_rejected_on: [null],
      creation_status: [null],
      create_json: [null],
      update_json: [null],
      right_display_name: [null],
      modified_by: [null],
      modified_on: [null],
      group_codes: [null],
      group_names: [null]
    })
    this.getUserGroupById();
  }

  getUserGroupById() {
    this.service.getUserGroup(this.id).subscribe((res: any) => {
      if(res && res.user_group_master) {
        console.log(res.user_group_master);
        this.updateGroups.patchValue(res.user_group_master);
      }
    })
  }

  updatingUserGroup() {
    this.service.updateUserGroup(this.id, this.updateGroups.value).subscribe((res:any) => {
      console.log(res)
      if(res.updated_user_group_master !=null) {
        alert("User Group updated successfully");
        this.router.navigateByUrl('/admin/user-groups-table');
      }
    })
  }
}
