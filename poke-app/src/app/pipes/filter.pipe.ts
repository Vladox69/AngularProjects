import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemons: Pokemon[], nombre: string):Pokemon[] {
    if(!nombre)return pokemons;
    let result:Pokemon[]=[];
    for (const pokemon of  pokemons) {
      if(pokemon.name.toLocaleLowerCase().indexOf(nombre.toLocaleLowerCase())>-1){
        result=[...result,pokemon];
      }
    }
    return result;
  }

}
