import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiningInComponent } from './sining-in.component';

describe('SiningInComponent', () => {
  let component: SiningInComponent;
  let fixture: ComponentFixture<SiningInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiningInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiningInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
