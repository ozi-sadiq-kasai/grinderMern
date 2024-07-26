import {FETCH_USER} from '../actions/types' 

const authReducer = function (state = null, action) {
 // console.log(action);
 switch (action.type) {
   // Add your case statements here
case FETCH_USER:
 return action.payload || false
   default:
     return state;
 }
};

export default authReducer;
