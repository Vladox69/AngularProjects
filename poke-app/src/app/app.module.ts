import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemosMainComponent } from './pokemos-comp/pokemos-main/pokemos-main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemosListComponent } from './pokemos-comp/pokemos-list/pokemos-list.component';
import { PokemonsItemComponent } from './pokemos-comp/pokemons-item/pokemons-item.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonsTipoComponent } from './pokemos-comp/pokemons-tipo/pokemons-tipo.component';
import { AppRoutingModule } from './app.routing.module';
import { PokemonsSearchComponent } from './pokemos-comp/pokemons-search/pokemons-search.component';
import { PokemonsHomeComponent } from './pokemos-comp/pokemons-home/pokemons-home.component';
import { PokemonsFormSearchComponent } from './pokemos-comp/pokemons-form-search/pokemons-form-search.component';
import { FormsModule } from '@angular/forms';
import { PokemonsRandomComponent } from './pokemos-comp/pokemons-random/pokemons-random.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemosMainComponent,
    NavbarComponent,
    PokemosListComponent,
    PokemonsItemComponent,
    PokemonsTipoComponent,
    PokemonsSearchComponent,
    PokemonsHomeComponent,
    PokemonsFormSearchComponent,
    PokemonsRandomComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
