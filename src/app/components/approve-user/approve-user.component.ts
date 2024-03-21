import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-approve-user',
  templateUrl: './approve-user.component.html',
  styleUrl: './approve-user.component.css'
})
export class ApproveUserComponent {

 approveForm!: FormGroup;
 user: any;
 id: number = this.route.snapshot.params['id'];

 constructor(private route: ActivatedRoute, private service: UsersService, private fb: FormBuilder, private router: Router ) {}

 ngOnInit() {
  this.approveForm = this.fb.group({
    email: [null],
    first_name: [null],
    fullname: [null],
    phone: [null],
    surname: [null],
    username: [null],
    status: [null],
    verified: [null],
    verified_by: [null],
    verified_on: [null]
  });
  this.getUserById();
 }

 getUserById() {
  this.service.getUser(this.id).subscribe((res: any) => {
    if(res && res.user) {
      const userId = localStorage.getItem('I_user')
      console.log(res.user);
      this.approveForm.patchValue(res.user);
      this.approveForm.get('verified_by')?.setValue(userId);
    }
  })
 }

 approveUser() {
  this.service.approveUser(this.id, this.approveForm.value).subscribe((res: any) => {
    console.log(res);
    if(res.approved_user != null) {
      alert("User approved successfully");
      this.router.navigateByUrl("/admin/users-table");
    }
  })
 }
}
