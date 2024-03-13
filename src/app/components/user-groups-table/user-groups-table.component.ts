import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

export interface UserGroupsMaster {
     id: number,
     group_code: string,
     group_name: string,
     group_type_id: number,
     active: number,
     created_by: number,
     created_on: Date,
     approved: string,
     approved_on: Date,
     approved_by: number,
     reject: string,
     deleted: string,
     deleted_by: number,
     deleted_on: Date,
     apprv_deleted_by: number,
     apprv_deleted_on: Date,
     apprv_rejected_by: number,
     apprv_rejected_on: Date,
     creation_status: string,
     create_json: string,
     update_json: string,
     right_display_name: string,
     modified_by: number,
     modified_on: Date,
     group_codes: string,
     group_names: string,
}

@Component({
  selector: 'app-user-groups-table',
  templateUrl: './user-groups-table.component.html',
  styleUrl: './user-groups-table.component.css'
})
export class UserGroupsTableComponent implements OnInit{

  userGroups!: UserGroupsMaster[];
  constructor(
    private httpClient: HttpClient,
    private service: UsersService

  ) {}

  ngOnInit(): void {
      this.getUserGroups();
  }

  getUserGroups() {
    this.httpClient.get<any>('http://localhost:8080/user-groups').subscribe(
      response => {
        this.userGroups = response['user_group_masters'];
        console.log(response['user_group_masters']);
      }
    )
  }

  deleteUserGroup(id: number) {
    this.service.deleteUserGroup(id).subscribe((res) => {
      console.log(res);
      this.getUserGroups();
    })
  }
}
