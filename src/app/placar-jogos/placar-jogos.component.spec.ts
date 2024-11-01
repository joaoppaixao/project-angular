import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacarJogosComponent } from './placar-jogos.component';

describe('PlacarJogosComponent', () => {
  let component: PlacarJogosComponent;
  let fixture: ComponentFixture<PlacarJogosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacarJogosComponent]
    });
    fixture = TestBed.createComponent(PlacarJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
