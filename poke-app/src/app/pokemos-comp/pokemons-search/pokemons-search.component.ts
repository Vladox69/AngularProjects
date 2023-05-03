import { Component } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons-search',
  templateUrl: './pokemons-search.component.html',
  styleUrls: ['./pokemons-search.component.css']
})
export class PokemonsSearchComponent {

  public pokemon!: Pokemon | any;

  public onSearch({ pokemon }: any): void {
    this.pokemon = null;
    this._servicePokemon.getPokemonByName(pokemon).subscribe((response) => {
      this.pokemon = this._servicePokemon.buildPokemon(response);
    })
  }

  constructor(private readonly _servicePokemon: PokemonsService) { }

}
