import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankBranchTableComponent } from './bank-branch-table.component';

describe('BankBranchTableComponent', () => {
  let component: BankBranchTableComponent;
  let fixture: ComponentFixture<BankBranchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankBranchTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankBranchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
