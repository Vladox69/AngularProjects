import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemos-list.component.html',
  styleUrls: ['./pokemos-list.component.css']
})
export class PokemosListComponent {

  @Input() pokemons!: Pokemon[];

  constructor() { }
  ngOnInit(): void {
  }



}
