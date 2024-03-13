import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BankBranchService } from '../../service/bank-branch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-bank-branch',
  templateUrl: './update-bank-branch.component.html',
  styleUrl: './update-bank-branch.component.css'
})
export class UpdateBankBranchComponent {
  updateBranch!: FormGroup;
  id: number = this.route.snapshot.params['id'];

  constructor(private fb: FormBuilder, private service: BankBranchService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.updateBranch = this.fb.group({
      branch_code: [null],
      address: [null],
      bank_id: [null],
      location_id: [null],
      name: [null],
      phone: [null],
      status: [null],
      created_by: [null],
      created_at: [null],
      territory_id: [null],
      latitude: [null],
      longitude: [null],
      verified: [null],
      verified_on: [null],
      verified_by: [null],
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
      modified_date: [null],
      modified_by: [null],
      created_status: [null],
    })
    this.getBranchById();
  }

  getBranchById() {
    this.service.getBranchById(this.id).subscribe((res: any) => {
      if (res && res.branch) {
          console.log(res.branch);
          this.updateBranch.patchValue(res.branch);
      }
    })
  }

  updateBankBranch() {
    this.service.updateBankBranch(this.id, this.updateBranch.value).subscribe((res: any) => {
      console.log(res)
      if(res.updated_branch != null) {
        this.router.navigateByUrl('/bank-branch-table')
      }
    })
  }
}
