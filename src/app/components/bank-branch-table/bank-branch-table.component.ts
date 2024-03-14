import { Component } from '@angular/core';
import { BankBranchService } from '../../service/bank-branch.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface BankBranch{
  id: number,
  branch_code: string,
  address: string,
  bank_id: number,
  location_id: number,
  name: string,
  phone: number,
  status: number,
  created_by: number,
  created_at: Date,
  territory_id: number,
  latitude: string,
  longitude: string,
  verified: string,
  verified_on: string,
  verified_by: string,
  reject: string,
  deleted: string,
  deleted_by: number,
  deleted_on: string,
  apprv_deleted_by: number,
  apprv_deleted_on: Date,
  apprv_rejected_by: number,
  apprv_rejected_on: Date,
  creation_status: string,
  create_json: string,
  update_json: string,
  modified_date: Date,
  modified_by: number,
  created_status: string,
}

@Component({
  selector: 'app-bank-branch-table',
  templateUrl: './bank-branch-table.component.html',
  styleUrl: './bank-branch-table.component.css'
})
export class BankBranchTableComponent {
  bankBranch!: BankBranch[];

  constructor(private httpClient: HttpClient, private service: BankBranchService, private router: Router) {}

  ngOnInit(): void {
    this.getBankBranches();
  }

  getBankBranches() {
    this.httpClient.get<any>('http://localhost:8080/bank-branch').subscribe(
      response => {
        this.bankBranch = response['branches'];
        console.log(response['branches']);
      }
    )
  }

  deleteBankBranch(id: number) {
    this.service.deleteBankBranch(id).subscribe((res) => {
      console.log(res);
      alert("Bank Branch deleted successfully");
      this.getBankBranches();
    })
  }

}
