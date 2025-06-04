import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiFirstDialogComponent } from './mi-first-dialog.component';

describe('MiFirstDialogComponent', () => {
  let component: MiFirstDialogComponent;
  let fixture: ComponentFixture<MiFirstDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiFirstDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiFirstDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
