import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultdisplayComponent } from './resultdisplay.component';

describe('ResultdisplayComponent', () => {
  let component: ResultdisplayComponent;
  let fixture: ComponentFixture<ResultdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultdisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
