import { FieldPosition } from '../enums/field-position';

export interface Player {
    id: number;
    name: string;
    position: FieldPosition;
    jerseyNumber: number;
    birthDate: Date;
    leftHanded: boolean;
    image: string;
}
