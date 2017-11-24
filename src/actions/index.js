
import {EMAIL_CHANGED, PASS_CHANGED} from '../constants/keys';

export const emailChanged = (text) => {
    return {
        type : EMAIL_CHANGED,
        payload : text
    };
};

export const passChanged = (text) => {
    return {
        type: PASS_CHANGED,
        payload: text,
    };
};