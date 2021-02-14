import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import dialogs from './reducers/dialogs';
import messages from './reducers/messages';
import user from './reducers/user';

const reducer = combineReducers({ dialogs, messages, user });

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
