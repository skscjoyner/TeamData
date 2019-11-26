import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Team } from '../models/team';
import { TEAMS } from '../mocks/team-mock';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  readonly allTeamsStore$ = new BehaviorSubject<Team[]>([]);

  readonly allTeams$ = this.allTeamsStore$.asObservable();

  constructor() {
    this.allTeamsStore$.next(TEAMS);
  }

  get allTeams(): Team[] {
    return this.allTeamsStore$.getValue();
  }

  set allTeams(val: Team[]) {
    this.allTeamsStore$.next(val);
  }

  addTeam(team: Team) {
    const newId = Math.max(...this.allTeams.map(p => p.id)) + 1;
    team.id = newId;
    this.allTeams = [...this.allTeams, team];
  }

  editTeam(team: Team) {
    const teamToEdit = this.allTeams.find(t => t.id === team.id);
    teamToEdit.name = team.name;
  }

  removeTeam(teamId: number) {
    this.allTeams = this.allTeams.filter(team => team.id !== teamId);
  }

  addPlayerToTeam(player: Player, team: Team) {
    team.players.push(player);
  }

  removePlayerFromTeam(player: Player, team: Team) {
    const index = team.players.indexOf(player);
    team.players.splice(index, 1);
  }

  getTeamFromPlayer(player: Player): Team {
    return this.allTeams.find(team => team.players.some(p => player.id === p.id));
  }
}
