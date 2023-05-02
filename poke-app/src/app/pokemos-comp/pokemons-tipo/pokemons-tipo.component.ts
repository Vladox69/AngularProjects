import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons-tipo',
  templateUrl: './pokemons-tipo.component.html',
  styleUrls: ['./pokemons-tipo.component.css']
})
export class PokemonsTipoComponent implements OnInit {

  @Input() type!: string;

  public bgColor!: string;
  public bgClass(tipo: string): string {
    switch (tipo) {
      case 'Fuego':
        return 'bg-danger text-white';
      case 'Planta':
        return 'bg-success text-white';
      default:
        return '';
    }
  }

  constructor() {

  }
  ngOnInit(): void {
    this.bgColor = this.bgClass(this.type)
  }

}
