import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons-main',
  templateUrl: './pokemos-main.component.html',
  styleUrls: ['./pokemos-main.component.css']
})
export class PokemosMainComponent implements OnInit{
  
  public pokemons!:Pokemon[];
  public cantidad!:number;
  public filterPokemon!:string;

  public getData(){
    this.pokemons=[];
    this._pokemonService.getPokemons(20).subscribe(({results}:any)=>{
      results.forEach(({name}:any) => {
        this._pokemonService.getPokemonByName(name)
        .subscribe((response:any)=>{
          let pok=this._pokemonService.buildPokemon(response);
          this.pokemons=[...this.pokemons,pok];       
        })
      });
    })
  }

  constructor(private readonly _pokemonService:PokemonsService){}
  ngOnInit(): void {
    this.getData();
  }

  public onFilter({pokemon}:any):void{
    this.filterPokemon=pokemon;
  }
  
}
