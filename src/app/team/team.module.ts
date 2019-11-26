import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from '../team/team-detail/team-detail.component';
import { TeamEditModalComponent } from './team-edit-modal/team-edit-modal.component';
import { PlayerModule } from '../player/player.module';
import { EnumToArrayPipe } from '../pipes/enum-to-array.pipe';

@NgModule({
  declarations: [
    TeamListComponent,
    TeamDetailComponent,
    TeamEditModalComponent,
  ],
  exports: [
    TeamListComponent,
    TeamDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PlayerModule
  ],
  providers: [EnumToArrayPipe],
  entryComponents: [TeamEditModalComponent]
})
export class TeamModule { }
