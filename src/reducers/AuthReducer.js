
import {EMAIL_CHANGED, PASS_CHANGED} from "../constants/keys";
const INIT_STATE = { email : '', pass : ''};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case EMAIL_CHANGED:

            return {...state, email: action.payload};
        case PASS_CHANGED:
            console.log(action);
            return {...state, pass:action.payload};
        default :
                return state;
    }
};