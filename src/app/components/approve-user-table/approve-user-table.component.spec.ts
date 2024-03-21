import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveUserTableComponent } from './approve-user-table.component';

describe('ApproveUserTableComponent', () => {
  let component: ApproveUserTableComponent;
  let fixture: ComponentFixture<ApproveUserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveUserTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
