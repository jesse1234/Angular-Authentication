import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BankBranchService } from '../../service/bank-branch.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-bank-branch',
  templateUrl: './create-bank-branch.component.html',
  styleUrl: './create-bank-branch.component.css'
})
export class CreateBankBranchComponent {
  createBranch!: FormGroup;

  constructor(private router: Router, private service: BankBranchService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createBranch = this.fb.group({
      branch_code: [''],
      address: [''],
      bank_id: [''],
      location_id: [''],
      name: [''],
      phone: [''],
      status: [''],
      created_by: [''],
      created_at: [''],
      territory_id: [''],
      latitude: [''],
      longitude: [''],
      verified: [''],
      verified_on: [''],
      verified_by: [''],
      reject: [''],
      deleted: [''],
      deleted_by: [''],
      deleted_on: [''],
      apprv_deleted_by: [''],
      apprv_deleted_on: [''],
      apprv_rejected_by: [''],
      apprv_rejected_on: [''],
      creation_status: [''],
      create_json: [''],
      update_json: [''],
      modified_date: [''],
      modified_by: [''],
      created_status: [''],
    })
  }

  createBankBranch() {
    console.log(this.createBranch.value)
    this.service.addBankBranch(this.createBranch.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/bank-branch-table');
    })
  }
}
