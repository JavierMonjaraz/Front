import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutUserDialogComponent } from './put-user-dialog.component';

describe('PutUserDialogComponent', () => {
  let component: PutUserDialogComponent;
  let fixture: ComponentFixture<PutUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutUserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
