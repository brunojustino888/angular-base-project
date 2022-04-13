import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula00Component } from './aula00.component';

describe('Aula00Component', () => {
  let component: Aula00Component;
  let fixture: ComponentFixture<Aula00Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aula00Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
