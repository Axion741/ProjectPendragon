import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCharacterComponent } from "./components/characters/add-character/add-character.component";
import { CharactersListComponent } from "./components/characters/characters-list/characters-list.component";
import { EditCharacterComponent } from "./components/characters/edit-character/edit-character.component";
import { DisconnectedPageComponent } from "./components/disconnected-page/disconnected-page.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'characters',
        component: CharactersListComponent
    },
    {
        path: 'characters/add',
        component: AddCharacterComponent
    },
    {
        path: 'characters/edit/:id',
        component: EditCharacterComponent
    },
    {
        path: 'disconnected',
        component: DisconnectedPageComponent
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
