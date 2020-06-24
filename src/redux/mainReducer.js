import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn21271003Reducer from '../features/SignIn21271003/redux/reducers'
import SignUp11371002Reducer from '../features/SignUp11371002/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn21271003: SignIn21271003Reducer,
SignUp11371002: SignUp11371002Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});