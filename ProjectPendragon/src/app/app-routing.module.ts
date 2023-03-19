import { inject, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCharacterComponent } from "./components/characters/add-character/add-character.component";
import { CharactersListComponent } from "./components/characters/characters-list/characters-list.component";
import { EditCharacterComponent } from "./components/characters/edit-character/edit-character.component";
import { ViewCharacterComponent } from "./components/characters/view-character/view-character.component";
import { DisconnectedPageComponent } from "./components/disconnected-page/disconnected-page.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { PendingChangesGuardService } from "./services/guards/pending-changes-guard.service";
import { CharacterResolverService } from "./services/resolvers/character-resolver.service";

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'characters',
        component: CharactersListComponent,
        resolve: {
            data: CharacterResolverService
        }
    },
    {
        path: 'characters/view/:id',
        component: ViewCharacterComponent,
        resolve: {
            data: CharacterResolverService
        }
    },
    {
        path: 'characters/add',
        component: AddCharacterComponent,
        resolve: {
            data: CharacterResolverService
        },
        canDeactivate: [
            async (component: AddCharacterComponent) => { return await inject(PendingChangesGuardService).canDeactivate(component.form.dirty == true) }
        ]
    },
    {
        path: 'characters/edit/:id',
        component: EditCharacterComponent,
        resolve: {
            data: CharacterResolverService
        },
        canDeactivate: [
            async (component: EditCharacterComponent) => { return await inject(PendingChangesGuardService).canDeactivate(component.form.dirty == true) }
        ]
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
