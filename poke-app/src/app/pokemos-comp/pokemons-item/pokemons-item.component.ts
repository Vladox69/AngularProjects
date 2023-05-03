import { Component, Input, OnChanges, SimpleChanges,OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemons-item',
  templateUrl: './pokemons-item.component.html',
  styleUrls: ['./pokemons-item.component.css']
})
export class PokemonsItemComponent implements OnChanges,OnInit {
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['pokemon']['currentValue']);
    // throw new Error('Method not implemented.');
  }
  @Input() pokemon!: Pokemon;
  constructor() {}
  ngOnInit(): void {
        
  }

}
