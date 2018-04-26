
import { createSelector } from 'reselect';
import deep from 'deep-get-set';

import {
  FOOTER_LOAD_LINKS_SUCCESS,
} from './actions';

import {
  footerData,
} from './data';

export default function FooterReducer(state = {}, action) {
  switch (action.type) {
    case FOOTER_LOAD_LINKS_SUCCESS:
      return Object.assign({}, state, {
        footerLinks: footerData,
      });
    default:
      return state;
  }
}

export const getFooterLinks = createSelector(
  state => deep(state, 'footer') || {},
  footer => deep(footer, 'footerLinks') || [],
);
