
import {
    FOOTER_LOAD_LINKS_SUCCESS
} from './actions';

import {
    footerData
} from './data';

export function FooterReducer(state = {}, action) {
    switch (action.type) {
        case FOOTER_LOAD_LINKS_SUCCESS:
            return Object.assign({}, state, {
                footerLinks: footerData
            });
        default:
            return state;
    }
}
