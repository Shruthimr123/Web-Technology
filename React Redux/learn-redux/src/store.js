import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter';
import loggedReducer from './reducers/isLoggedIn';

const store = configureStore({
  reducer: {
    counter:counterReducer,
    isloggedIn:loggedReducer
  },
});

export default store;