import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { PokemosMainComponent } from "./pokemos-comp/pokemos-main/pokemos-main.component";
import { PokemonsSearchComponent } from "./pokemos-comp/pokemons-search/pokemons-search.component";
import { PokemonsHomeComponent } from "./pokemos-comp/pokemons-home/pokemons-home.component";

const routes:Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:PokemonsHomeComponent},
    {path:'main',component:PokemosMainComponent},
    {path:'search',component:PokemonsSearchComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})

export class AppRoutingModule{

}