import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './team/team-list/team-list.component';
import { TeamDetailComponent } from './team/team-detail/team-detail.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllPlayersComponent } from './player/all-players/all-players.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'team/:id', component: TeamDetailComponent },
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: 'players', component: AllPlayersComponent },
  { path: '', redirectTo: '/teams', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
