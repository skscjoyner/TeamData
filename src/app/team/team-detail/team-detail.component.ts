import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/models/team';
import { TeamEditModalComponent } from '../team-edit-modal/team-edit-modal.component';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player';


@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  private team: Team;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private modalService: NgbModal,
    private playerService: PlayerService
  ) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');
    this.team = this.teamService.allTeams.find((team: Team) => team.id === id);
  }

  editTeam() {
    const modalRef = this.modalService.open(TeamEditModalComponent);
    modalRef.componentInstance.team = _.cloneDeep(this.team);
    modalRef.componentInstance.submit.subscribe(team => {
      this.teamService.editTeam(team);
    });
  }

  // go back to teams page

}
