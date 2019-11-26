import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-team-edit-modal',
  templateUrl: './team-edit-modal.component.html',
  styleUrls: ['./team-edit-modal.component.css']
})
export class TeamEditModalComponent implements OnInit {

  @Output() submit: EventEmitter<Team> = new EventEmitter();
  team: Team;

  constructor(
    private activeModal: NgbActiveModal
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.activeModal.close();
    this.submit.emit(this.team);
  }

  onCancel() {
    this.activeModal.close();
  }

}
