import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterPatrimoniosComponent } from './manter-patrimonios.component';

describe('ManterPatrimoniosComponent', () => {
  let component: ManterPatrimoniosComponent;
  let fixture: ComponentFixture<ManterPatrimoniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterPatrimoniosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterPatrimoniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
