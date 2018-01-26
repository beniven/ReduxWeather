import * as Redux from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = Redux.combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
