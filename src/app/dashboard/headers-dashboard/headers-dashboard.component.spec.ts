import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersDashboardComponent } from './headers-dashboard.component';

describe('HeadersDashboardComponent', () => {
  let component: HeadersDashboardComponent;
  let fixture: ComponentFixture<HeadersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadersDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
