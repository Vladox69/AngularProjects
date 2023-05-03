import { Component,Output,EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-pokemons-form-search',
  templateUrl: './pokemons-form-search.component.html',
  styleUrls: ['./pokemons-form-search.component.css']
})
export class PokemonsFormSearchComponent {

  @Output() pokemonEvent=new EventEmitter<any>()

  public onSubmit({value}:NgForm):void{
    this.pokemonEvent.emit(value);
  }

  constructor(){}

}
