import { Player } from '../models/player';
import { FieldPosition } from '../enums/field-position';

export const PLAYERS: Player[] = [
    {
        id: 1,
        name: 'Donn Haskins',
        birthDate: new Date(1956, 2, 12),
        position: FieldPosition.Pitcher,
        leftHanded: true,
        image: 'assets/photo1.jpg',  // If no photo need to set default image?
        jerseyNumber: 32,

    },
    {
        id: 2,
        name: 'George Brett',
        birthDate: new Date(1952, 6, 10),
        position: FieldPosition.Catcher,
        leftHanded: false,
        image: 'assets/no-photo-available-icon-10.jpg',
        jerseyNumber: 46,

    },
    {
        id: 3,
        name: 'Freddie Freeman',
        birthDate: new Date(1950, 12, 1),
        position: FieldPosition.FirstBase,
        leftHanded: false,
        image: '',
        jerseyNumber: 15,

    },
    {
        id: 4,
        name: 'Jose Altuve',
        birthDate: new Date(1962, 3, 17),
        position: FieldPosition.SecondBase,
        leftHanded: false,
        image: 'assets/photo4.jpg',
        jerseyNumber: 17,

    },
    {
        id: 5,
        name: 'Nolan Arenado',
        birthDate: new Date(1962, 7, 17),
        position: FieldPosition.ShortStop,
        leftHanded: false,
        image: 'assets/photo5.jpg',
        jerseyNumber: 22,

    },
    {
        id: 6,
        name: 'Franscisco Lindor',
        birthDate: new Date(1963, 8, 12),
        position: FieldPosition.ThirdBase,
        leftHanded: false,
        image: 'assets/photo6.jpg',
        jerseyNumber: 18,

    },
    {
        id: 7,
        name: 'Christian Yelich',
        birthDate: new Date(1965, 10, 12),
        position: FieldPosition.RightField,
        leftHanded: false,
        image: 'assets/photo7.jpg',
        jerseyNumber: 77,

    },
    {
        id: 8,
        name: 'Mike Trout',
        birthDate: new Date(1947, 6, 29),
        position: FieldPosition.CenterField,
        leftHanded: false,
        image: 'assets/photo8.jpg',
        jerseyNumber: 31,

    },
    {
        id: 9,
        name: 'Mookie Betts',
        birthDate: new Date(1960, 7, 22),
        position: FieldPosition.LeftField,
        leftHanded: false,
        image: 'assets/photo9.jpg',
        jerseyNumber: 56,

    },
    {
        id: 10,
        name: 'Sam Waters',
        birthDate: new Date(1959, 11, 6),
        position: FieldPosition.Pitcher,
        leftHanded: true,
        image: 'assets/photo10.jpg',
        jerseyNumber: 62,

    },
    {
        id: 11,
        name: 'Champ Stallings',
        birthDate: new Date(1959, 3, 31),
        position: FieldPosition.FirstBase,
        leftHanded: true,
        image: 'assets/photo11.jpg',
        jerseyNumber: 31,

    },
    {
        id: 12,
        name: 'Stan Gettis',
        birthDate: new Date(1960, 2, 11),
        position: FieldPosition.SecondBase,
        leftHanded: false,
        image: 'assets/photo12.jpg',
        jerseyNumber: 99,

    },
    {
        id: 13,
        name: 'Don Peterson',
        birthDate: new Date(1961, 6, 22),
        position: FieldPosition.ShortStop,
        leftHanded: false,
        image: 'assets/photo13.jpg',
        jerseyNumber: 7,

    },
    {
        id: 14,
        name: 'Robert Sands',
        birthDate: new Date(1961, 12, 31),
        position: FieldPosition.RightField,
        leftHanded: true,
        image: 'assets/photo14.jpg',
        jerseyNumber: 54,

    }
];
