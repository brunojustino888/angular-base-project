import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula02filhoComponent } from './aula02filho.component';

describe('Aula02filhoComponent', () => {
  let component: Aula02filhoComponent;
  let fixture: ComponentFixture<Aula02filhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aula02filhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula02filhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
