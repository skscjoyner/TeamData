import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';
import { PlayerEditModalComponent } from '../player-edit-modal/player-edit-modal.component';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  private player: Player;
  private team: Team;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private modalService: NgbModal,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.player = this.playerService.allPlayers.find(
      (player: Player) => player.id === id
    );
    this.team = this.teamService.getTeamFromPlayer(this.player);
  }

  editPlayer() {
    const modalRef = this.modalService.open(PlayerEditModalComponent);
    modalRef.componentInstance.player = _.cloneDeep(this.player);
    modalRef.componentInstance.mode = 'Edit';
    modalRef.componentInstance.submit.subscribe(player => {
      this.playerService.editPlayer(player);
    });
  }

  onImgError(e: Event) {
    (e.target as HTMLImageElement).src = 'assets/no-photo-available-icon-10.jpg';
  }
}
