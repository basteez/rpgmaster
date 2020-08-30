import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharactersListComponent} from './components/characters-list/characters-list.component';
import {CharacterEditComponent} from './components/character-edit/character-edit.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'logout',canActivate: [AuthGuardService],component: LogoutComponent},
  {path:'characters', canActivate: [AuthGuardService], component: CharactersListComponent},
  {path:'character/new', component: CharacterEditComponent, canActivate: [AuthGuardService]},
  {path:'character/view/:id', component: CharacterEditComponent, canActivate: [AuthGuardService]},
  {path:'character/edit/:id', component: CharacterEditComponent, canActivate: [AuthGuardService]},
  {path:'', redirectTo:'characters', pathMatch:'full', canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
