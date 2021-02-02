import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import dialogs from './reducers/dialogs';
import messages from './reducers/messages';

const reducer = combineReducers({ dialogs, messages });

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
