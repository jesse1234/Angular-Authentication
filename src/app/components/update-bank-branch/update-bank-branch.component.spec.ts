import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBankBranchComponent } from './update-bank-branch.component';

describe('UpdateBankBranchComponent', () => {
  let component: UpdateBankBranchComponent;
  let fixture: ComponentFixture<UpdateBankBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateBankBranchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateBankBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
