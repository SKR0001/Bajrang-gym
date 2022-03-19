import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagistrationComponent } from './ragistration.component';

describe('RagistrationComponent', () => {
  let component: RagistrationComponent;
  let fixture: ComponentFixture<RagistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RagistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RagistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
