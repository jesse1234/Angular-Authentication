import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModule } from '../models/user/user.module';
import { Router } from '@angular/router';

const BASE_URL = ['http://localhost:8080/']

export interface UsersResponse {
     id: number,
     email: string,
     first_name: string,
     fullname: string,
     password: string,
     phone: string,
     surname: string,
     username: string,
     other_names: string,
     group_id: number,
     pos_user_level: number,
     type_id: number,
     created_by: number,
     created_at: Date,
     agent_id: number,
     status: boolean,
     verification_pass: string,
     verified: string,
     verified_by: number,
     verified_on: Date,
     agent_code: string,
     password_change_date: Date,
     locked: boolean,
     password_expired: boolean,
     firstlogin: boolean,
     branch_id: number,
     logged_in: boolean,
     reset: boolean,
     reject: string,
     deleted: string,
     deleted_by: number,
     deleted_on: Date,
     apprv_deleted_by: number,
     apprv_deleted_on: Date,
     apprv_rejected_by: number,
     apprv_rejected_on: Date,
     creationStatus: string,
     create_json: string,
     update_json: string,
     last_login_date: Date,
     loginattempts: number,
     modified_on: Date,
     unblocked_by: string,
     blocked_by: string,
     unblocked_on: Date,
     blocked_on: Date,
     IDNumber: string,
     modified_by: number,
     created_status: string,
     role: string
  }

  export interface UserEditResponse {
    code: Number,
    message: string,
    user: UsersResponse
  }

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,
    ) {

  }

  addUser(addUser: any): Observable<any> {
    return this.http.post(BASE_URL + "users/add", addUser);
  }

  updateUser(id: number, updateUser: any): Observable<any> {
    return this.http.put(BASE_URL + `users/update/${id}`, updateUser);
  }

  getUser(id: number){
     return this.http.get(BASE_URL + `users/${id}`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(BASE_URL + `users/delete/${id}`)
  }

  approveUser(id: number, approveUser: any): Observable<any> {
    return this.http.put(BASE_URL + `approve-user/${id}`, approveUser)
  }

  getAllUserGroups() {
    return this.http.get(BASE_URL + 'user-groups')
  }

  addUserGroup(addUserGroup: any): Observable<any> {
    return this.http.post(BASE_URL + 'user-groups/add', addUserGroup);
  }

  getUserGroup(id: number) {
    return this.http.get(BASE_URL + `user-groups/${id}`);
  }

  updateUserGroup(id: number, updateUserGroup: any) {
    return this.http.put(BASE_URL + `user-groups/update/${id}`, updateUserGroup);
  }

  deleteUserGroup(id: number) {
    return this.http.delete(BASE_URL + `user-groups/delete/${id}`);
  }
}
