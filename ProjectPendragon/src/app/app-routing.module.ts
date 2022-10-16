import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCharacterComponent } from "./components/characters/add-character/add-character.component";
import { CharactersListComponent } from "./components/characters/characters-list/characters-list.component";

const routes: Routes = [
    {
        path: '',
        component: AddCharacterComponent
    },
    {
        path: 'characters',
        component: CharactersListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
