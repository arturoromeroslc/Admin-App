
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import homePageReducer from '../Pages/Home/reducer';
import FooterReducer from '../Layout/Footer/reducer';

export default () => createStore(combineReducers({
  homePage: homePageReducer,
  footer: FooterReducer,
}), composeWithDevTools(applyMiddleware(thunk)));
