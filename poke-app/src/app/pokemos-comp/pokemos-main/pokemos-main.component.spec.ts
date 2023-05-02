import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemosMainComponent } from './pokemos-main.component';

describe('PokemosMainComponent', () => {
  let component: PokemosMainComponent;
  let fixture: ComponentFixture<PokemosMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemosMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
