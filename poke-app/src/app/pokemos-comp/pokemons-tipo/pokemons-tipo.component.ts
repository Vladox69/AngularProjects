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
        return 'bg-warning text-white';
      case 'Planta':
        return 'bg-success text-white';
      case 'Veneno':
        return 'bg-poison text-white';
      case 'Volador':
        return 'bg-fly text-white';
      case 'Agua':
        return 'bg-water text-white';
      case 'Bicho':
        return 'bg-bug text-white';
      case 'Hada':
        return 'bg-hada text-white';
      case 'Acero':
        return 'bg-acero text-white';
      case 'Dragón':
        return 'bg-dragon text-white';
      case 'Eléctrico':
        return 'bg-electrico text-white'
      case 'Psíquico':
        return 'bg-psiq text-white';
      case 'Roca':
        return 'bg-roca text-white';
      default:
        return 'bg-normal text-white';
    }
  }

  constructor() {

  }
  ngOnInit(): void {
    this.bgColor = this.bgClass(this.type)
  }

}
