import * as apodActions from './app.actions';

const initialState = { apods: [] };

export function APODReducer(
  state = initialState,
  action: apodActions.apodActions
) {
  switch (action.type) {
    case apodActions.ADD_APOD_PICTURE:
      return {
        ...state,
        apods: [...state.apods, action.payload],
      };

    case apodActions.DELETE_APOD_PICTURE:
      const newApods = state.apods.filter((a, k) => a.k !== action.payload);

      return {
        ...state,
        apods: newApods,
      };

    case apodActions.UPDATE_APOD_PICTURE:
      const apod = state.apods[action.payload.index];
      // to avoid full replacing of object;
      const updatedApod = {
        ...apod,
        ...action.payload.apod,
      };
      const updatedAPODS = [...state.apods];
      updatedAPODS[action.payload.index] = updatedApod;

      return {
        ...state,
        apods: updatedAPODS,
      };
    default:
      return state;
  }
}
