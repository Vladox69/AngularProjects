import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons-random',
  templateUrl: './pokemons-random.component.html',
  styleUrls: ['./pokemons-random.component.css']
})
export class PokemonsRandomComponent implements OnInit {

  public pokemon!: Pokemon | any;
  public number!: number;

  public onGetRandom(): void {
    this.number = Math.floor(Math.random() * 1000 + 1);
    this._pokemonService.getPokemonById(this.number).subscribe((response) => {
      this.pokemon = this._pokemonService.buildPokemon(response);
    })
  }


  constructor(private readonly _pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.onGetRandom();
  }

}
