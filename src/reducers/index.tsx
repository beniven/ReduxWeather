import * as Redux from 'redux';

const rootReducer = Redux.combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
