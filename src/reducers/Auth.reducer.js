import {ACTION_TYPES} from '../actions/auth.actions';

const initialState = {
    auth: false
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_AUTH:
            return {
                ...state.auth,
            }
            case ACTION_TYPES.SET_AUTH:
                return {
                    ...state, auth: true,
                }
                case ACTION_TYPES.REMOVE_AUTH:  
                return {
                    
                    ...state, auth: false,
                }
        default:
            return {...state}
    }
}
