
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import homePageReducer from '../Pages/Home/reducer';

export default () => createStore(combineReducers({
  homePage: homePageReducer,
}), composeWithDevTools(applyMiddleware(thunk)));
