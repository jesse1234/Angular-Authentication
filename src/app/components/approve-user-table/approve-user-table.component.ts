import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';

export class Users {
  constructor (
    public id: number,
    public email: string,
    public first_name: string,
    public fullname: string,
    public password: string,
    public phone: string,
    public surname: string,
    public username: string,
    public other_names: string,
    public group_id: number,
    public pos_user_level: number,
    public type_id: number,
    public created_by: number,
    public created_at: Date,
    public agent_id: number,
    public status: number,
    public verification_pass: string,
    public verified: string,
    public verified_by: number,
    public verified_on: Date,
    public agent_code: string,
    public password_change_date: Date,
    public locked: boolean,
    public password_expired: boolean,
    public firstlogin: boolean,
    public branch_id: number,
    public logged_in: boolean,
    public reset: boolean,
    public reject: string,
    public deleted: string,
    public deleted_by: number,
    public deleted_on: Date,
    public apprv_deleted_by: number,
    public apprv_deleted_on: Date,
    public apprv_rejected_by: number,
    public apprv_rejected_on: Date,
    public creationStatus: string,
    public create_json: string,
    public update_json: string,
    public last_login_date: Date,
    public loginattempts: number,
    public modified_on: Date,
    public unblocked_by: string,
    public blocked_by: string,
    public unblocked_on: Date,
    public blocked_on: Date,
    public IDNumber: string,
    public modified_by: number,
    public created_status: string,
    public role: string
  ) {}
  }

@Component({
  selector: 'app-approve-user-table',
  templateUrl: './approve-user-table.component.html',
  styleUrl: './approve-user-table.component.css'
})
export class ApproveUserTableComponent {
  users!: Users[];
  searchtext:any;
  
  constructor(
   private httpClient: HttpClient,
   private service: UsersService
  ) {}

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers() {
    this.httpClient.get<any>('http://localhost:8080/users').subscribe(
      response => {
        this.users = response['users'].filter((user: Users) => user.status === 0);
        console.log(response['users']);
      }
    );
  }
}
