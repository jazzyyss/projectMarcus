import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';//access to local storage in browser
import userReducer from './user/user.reducer';
import blogReducer from './blog/blog.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['only the reducers to have the locat storage to be listed here']
}

const rootReducer = combineReducers({
    user: userReducer,
    blog: blogReducer
});

export default persistReducer(persistConfig, rootReducer);