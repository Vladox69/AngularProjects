import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsFormSearchComponent } from './pokemons-form-search.component';

describe('PokemonsFormSearchComponent', () => {
  let component: PokemonsFormSearchComponent;
  let fixture: ComponentFixture<PokemonsFormSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsFormSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsFormSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
