import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsRandomComponent } from './pokemons-random.component';

describe('PokemonsRandomComponent', () => {
  let component: PokemonsRandomComponent;
  let fixture: ComponentFixture<PokemonsRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsRandomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
