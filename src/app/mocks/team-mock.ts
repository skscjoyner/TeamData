import { Team } from '../models/team';
import { PLAYERS } from './player-mock';

export const TEAMS: Team[] = [
    {
        id: 1,
        name: 'Boston Red Sox',
        players: PLAYERS.slice(0, PLAYERS.length / 2),
    },
    {
        id: 2,
        name: 'Pittsburgh Pirates',
        players: PLAYERS.slice(PLAYERS.length / 2),
    },
];
