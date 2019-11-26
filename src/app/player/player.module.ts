import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PlayerDetailComponent } from '../player/player-detail/player-detail.component';
import { PlayerEditModalComponent } from './player-edit-modal/player-edit-modal.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { RouterModule } from '@angular/router';
import { EnumToArrayPipe } from '../pipes/enum-to-array.pipe';
import { PipeModule } from '../pipes/pipe.module';
import { AllPlayersComponent } from '../player/all-players/all-players.component';

@NgModule({
  declarations: [
    PlayerDetailComponent,
    PlayerEditModalComponent,
    PlayerListComponent,
    AllPlayersComponent,
  ],
  exports: [
    PlayerListComponent,
    PlayerDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    PipeModule
  ],
  providers: [EnumToArrayPipe],
  entryComponents: [PlayerEditModalComponent]
})
export class PlayerModule { }
