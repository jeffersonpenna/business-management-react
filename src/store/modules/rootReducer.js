import { combineReducers } from 'redux';

import company from './company/reducer';
import employee from './employee/reducer';
import search from './search/reducer';

export default combineReducers({
  company,
  employee,
  search,
});
