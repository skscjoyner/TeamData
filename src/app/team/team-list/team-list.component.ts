import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';
import { TeamEditModalComponent } from '../team-edit-modal/team-edit-modal.component';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[];

  constructor(
    private teamService: TeamService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.teamService.allTeams$.subscribe(teams => {
      this.teams = teams;
    });
  }

  addTeam() {
    const newTeam: Team = {} as Team;
    newTeam.players = [];
    const modalRef = this.modalService.open(TeamEditModalComponent);
    modalRef.componentInstance.team = newTeam;
    modalRef.componentInstance.submit.subscribe(team => {
      this.teamService.addTeam(team);

    });
  }

  deleteTeam(teamId: number): void {
    this.teamService.removeTeam(teamId);
  }

}
