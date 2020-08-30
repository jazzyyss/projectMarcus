import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';//access to local storage in browser
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['only the reducers to have the locat storage to be listed here']
}

const rootReducer = combineReducers({
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer);