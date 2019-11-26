import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NgbActiveModal, NgbDatepickerConfig, NgbDateStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { Player } from 'src/app/models/player';
import { FieldPosition } from '../../enums/field-position';

@Component({
  selector: 'app-player-edit-modal',
  templateUrl: './player-edit-modal.component.html',
  styleUrls: ['./player-edit-modal.component.css'],
  providers: [NgbDatepickerConfig]
})
export class PlayerEditModalComponent implements OnInit {

  @Output() submit: EventEmitter<Player> = new EventEmitter();
  player: Player;
  fieldPositions = FieldPosition;
  selectedFieldPosition: FieldPosition;
  leftHanded: boolean;
  birthDate: NgbDateStruct;
  mode: string;

  constructor(
    private activeModal: NgbActiveModal,
    private config: NgbDatepickerConfig,
    private dateAdapter: NgbDateAdapter<Date>
    ) {
      config.minDate = {year: 1930, month: 1, day: 1};
    }

  ngOnInit() {
    // const year = this.player.birthDate.getFullYear();
    // this.birthDate = this.dateAdapter.fromModel(this.player.birthDate) ;
  }

  selectFieldPosition(fieldPosition: FieldPosition) {
    this.selectedFieldPosition = fieldPosition;
  }

  onSubmit() {
    // this.player.leftHanded = this.leftHanded;
    this.player.position = this.selectedFieldPosition;
    this.player.birthDate = new Date(this.birthDate.year, this.birthDate.month - 1, this.birthDate.day);
    this.activeModal.close();
    this.submit.emit(this.player);
  }

  onCancel() {
    this.activeModal.close();
  }
}
