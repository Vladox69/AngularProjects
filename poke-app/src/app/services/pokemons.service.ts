import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { baseUrl } from './varibles';
import { TypesService } from './types.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private _http: HttpClient, private readonly _serviceTypes: TypesService) { }

  public getPokemons(limit: number): Observable<Pokemon[]> {
    return this._http.get<Pokemon[]>(`${baseUrl}/pokemon?limit=${limit}`);
  }

  public getPokemonById(id: number): Observable<Pokemon> {
    return this._http.get<Pokemon>(`${baseUrl}/pokemon/${id}`);
  }

  public getPokemonByName(name: string): Observable<Pokemon> {
    return this._http.get<Pokemon>(`${baseUrl}/pokemon/${name}`);
  }

  public buildPokemon(response: any): Pokemon {
    const { abilities, height, id, moves, name, sprites, weight, types } = response;
    let urlImg:string = sprites.other['official-artwork'].front_default;
    let typesS:string[]=[];
    types.forEach(({ type }: any) => {
      this._serviceTypes.getType(type.url).subscribe(({ names }) => {
        const t = names.find(({ language }: any) => language.name === 'es');
        const { name } = t;
        typesS.push(name);
      })
    });
    const pok = { abilities, height, id, moves, name, urlImg, weight, types:typesS };
    return pok;
  }

}
