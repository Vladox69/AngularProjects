import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsTipoComponent } from './pokemons-tipo.component';

describe('PokemonsTipoComponent', () => {
  let component: PokemonsTipoComponent;
  let fixture: ComponentFixture<PokemonsTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsTipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
