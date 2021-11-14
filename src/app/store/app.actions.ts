import { Action } from '@ngrx/store';
import { IAPOD } from '../shared/interfaces/apod.interface';

export const ADD_APOD_PICTURE = 'ADD_APOD_PICTURE';
export const DELETE_APOD_PICTURE = 'DELETE_APOD_PICTURE';
export const UPDATE_APOD_PICTURE = 'UPDATE_APOD_PICTURE';

export class AddAPODPicture implements Action {
  readonly type = ADD_APOD_PICTURE;

  constructor(public payload: IAPOD) {}
}

export class deleteAPODPicture implements Action {
  readonly type = DELETE_APOD_PICTURE;

  constructor(public payload: number) {}
}
export class updateAPODPicture implements Action {
  readonly type = UPDATE_APOD_PICTURE;

  constructor(public payload: { apod: IAPOD; index: number }) {}
}

export type apodActions =
  | AddAPODPicture
  | deleteAPODPicture
  | updateAPODPicture;
