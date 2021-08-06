import * as apodActions from './app.actions';

const initialState = {apod: 'image'};

export function APODReducer(state = initialState, action: apodActions.AddAPODPicture) {
    switch (action.type) {
        case apodActions.ADD_APOD_PICTURE:
            return {
                ...state,
                apod: action.payload
            };
        default:
            return state;
    }

}
