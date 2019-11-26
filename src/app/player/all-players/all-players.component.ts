import { Component, OnInit } from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {

  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.allPlayers;
  }



}
