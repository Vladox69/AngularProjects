import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemosListComponent } from './pokemos-list.component';

describe('PokemosListComponent', () => {
  let component: PokemosListComponent;
  let fixture: ComponentFixture<PokemosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
