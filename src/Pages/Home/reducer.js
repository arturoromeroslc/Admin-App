
import {
    HOME_PAGE_LOAD_SUCCESS
} from './actions';

export default function homePageReducer(state = {}, action) {
  switch (action.type) {
    case HOME_PAGE_LOAD_SUCCESS:
      return {
        isLoaded: true,
      };
    default:
      return state;
  }
}
