import { combineReducers } from 'redux';

import company from './company/reducer';
import employee from './employee/reducer';

export default combineReducers({
  company,
  employee,
});
