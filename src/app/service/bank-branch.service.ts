import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = ['http://localhost:8080/'];

@Injectable({
  providedIn: 'root'
})
export class BankBranchService {

  constructor(private http: HttpClient) { }

  getAllBankBranches() {
    return this.http.get(BASE_URL + 'bank-branch');
  }

  addBankBranch(addBranch: any): Observable<any> {
    return this.http.post(BASE_URL + 'bank-branch/add', addBranch);
  }

  getBranchById(id: number) {
    return this.http.get(BASE_URL + `bank-branch/${id}`);
  }

  updateBankBranch(id: number, updateBranch: any): Observable<any> {
    return this.http.put(BASE_URL + `bank-branch/update/${id}`, updateBranch);
  }

  deleteBankBranch(id: number): Observable<any> {
    return this.http.delete(BASE_URL + `bank-branch/delete/${id}`);
  }
}
