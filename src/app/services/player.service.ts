import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Player } from '../models/player';
import { PLAYERS } from '../mocks/player-mock';
import { TeamService } from './team.service';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  readonly allPlayersStore$ = new BehaviorSubject<Player[]>(PLAYERS);

  readonly allPlayers$ = this.allPlayersStore$.asObservable();

  constructor(private teamService: TeamService) { }

  get allPlayers(): Player[] {
    return this.allPlayersStore$.getValue();
  }

  set allPlayers(val: Player[]) {
    this.allPlayersStore$.next(val);
  }

  addPlayer(player: Player) {
    const newId = Math.max(...this.allPlayers.map(p => p.id)) + 1;
    player.id = newId;
    this.allPlayers = [...this.allPlayers, player];
  }

  editPlayer(player: Player) {
    const playerToEdit = this.allPlayers.find(t => t.id === player.id);
    playerToEdit.name = player.name;
    playerToEdit.jerseyNumber = player.jerseyNumber;
    playerToEdit.position = player.position;
    playerToEdit.birthDate = player.birthDate;
    playerToEdit.leftHanded = player.leftHanded;
    playerToEdit.image = player.image;
  }

  addPlayerToTeam(player: Player, team: Team) {
    this.addPlayer(player);
    this.teamService.addPlayerToTeam(player, team);
  }

  removePlayerFromTeam(player: Player, team: Team) {
    this.teamService.removePlayerFromTeam(player, team);
    this.allPlayers = this.allPlayers.filter(
      p => p.id !== player.id
    );
  }
}
