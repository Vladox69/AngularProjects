import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { Types } from 'src/app/interfaces/types.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-pokemons-main',
  templateUrl: './pokemos-main.component.html',
  styleUrls: ['./pokemos-main.component.css']
})
export class PokemosMainComponent implements OnInit{
  
  public pokemons!:Pokemon[];
  public types:string[]=[];


  public getData(){
    this.pokemons=[];
    this._pokemonService.getPokemons(2).subscribe(({results}:any)=>{
      results.forEach(({name}:any) => {
        this._pokemonService.getPokemonByName(name)
        .subscribe((response:any)=>{
          let pok=this._pokemonService.buildPokemon(response);
          this.pokemons=[...this.pokemons,pok];       
        })
      });
    })
  }
  


  constructor(private readonly _pokemonService:PokemonsService,private readonly _typeService:TypesService){}
  
  ngOnInit(): void {
    this.getData();
    // throw new Error('Method not implemented.');
  }

  
}
