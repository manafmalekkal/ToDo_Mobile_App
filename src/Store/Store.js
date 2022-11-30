// import {configureStore} from '@reduxjs/toolkit';
// import LocalReducer from '../Reducers/LocalReducer';
// import LoginReducer from '../Reducers/LoginReducer';
// import RemoteReducer from '../Reducers/RemoteReducer';
// import {combineReducers} from 'redux';

// const rootReducer = combineReducers({
//   LocalReducer,
//   LoginReducer,
//   RemoteReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
import {legacy_createStore as createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import LocalReducer from '../Reducers/LocalReducer';
import LoginReducer from '../Reducers/LoginReducer';
import RemoteReducer from '../Reducers/RemoteReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  LocalReducer,
  LoginReducer,
  RemoteReducer,
});

const initalState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
// const store = createStore(rootReducer, composedEnhancer);

export default store;
