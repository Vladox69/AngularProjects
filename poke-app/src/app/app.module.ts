import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemosMainComponent } from './pokemos-comp/pokemos-main/pokemos-main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemosListComponent } from './pokemos-comp/pokemos-list/pokemos-list.component';
import { PokemonsItemComponent } from './pokemos-comp/pokemons-item/pokemons-item.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonsTipoComponent } from './pokemos-comp/pokemons-tipo/pokemons-tipo.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemosMainComponent,
    NavbarComponent,
    PokemosListComponent,
    PokemonsItemComponent,
    PokemonsTipoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
