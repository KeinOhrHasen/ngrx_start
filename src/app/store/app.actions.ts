import { Action } from '@ngrx/store';
import { IAPOD } from '../shared/interfaces/apod.interface';

export const ADD_APOD_PICTURE = 'ADD_APOD_PICTURE';

export class AddAPODPicture implements Action {
    readonly type = ADD_APOD_PICTURE;

    constructor(public payload: IAPOD) { }
}
