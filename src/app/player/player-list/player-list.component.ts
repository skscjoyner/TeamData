import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';
import { PlayerEditModalComponent } from '../player-edit-modal/player-edit-modal.component';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  @Input() players: Player[];
  @Input() team: Team;

  constructor(
    private teamService: TeamService,
    private playerService: PlayerService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}

  addPlayer() {
    const newPlayer: Player = {} as Player;
    const modalRef = this.modalService.open(PlayerEditModalComponent);
    modalRef.componentInstance.player = newPlayer;
    modalRef.componentInstance.mode = 'Add';
    modalRef.componentInstance.submit.subscribe(player => {
      if (this.team) {
        this.playerService.addPlayerToTeam(player, this.team);
      } else {
        this.playerService.addPlayer(player);
      }
    });
  }

  removePlayerFromTeam(player: Player): void {
    this.playerService.removePlayerFromTeam(player, this.team);
  }

  getTeam(player: Player): Team {
    return this.teamService.getTeamFromPlayer(player);
  }
}
