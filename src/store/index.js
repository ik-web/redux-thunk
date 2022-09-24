import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReduser } from './cashReduser';
import { customerReduser } from './castomerReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReduser = combineReducers({
  cash: cashReduser,
  customers: customerReduser,
});

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));
