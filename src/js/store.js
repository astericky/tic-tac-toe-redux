import { createStore, compose} from 'redux';
import reducers from './reducers';

const initialState = {
    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ],
    lastPlay: 'O',
    isWinner: false,
};

const store = createStore(
  reducers,
  initialState,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;