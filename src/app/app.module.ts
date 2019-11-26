import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';
import { AppRoutingModule } from './app-routing.module';
import { PipeModule } from './pipes/pipe.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    TeamModule,
    PlayerModule,
    AppRoutingModule,
    NgbModule,
    PipeModule,
  ],
  exports: [
    FormsModule,
    NgbModule,
    PipeModule
  ],
  // providers: [EnumToArrayPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
