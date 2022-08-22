// /* eslint-disable prettier/prettier */
// /* eslint-disable no-console */

// import {
//     LOGIN_USER_SUCCESS,
//     LOGIN_USER_FAIL,
//     REGISTER_USER_SUCCESS,
//     REGISTER_USER_FAIL,
//     // LOGOUT_SUCCESS,
//     // LOGOUT_FAIL,
   
//   } from '../../stores/actions/user.action';
  
//   const initialState = {
//     user: {},
//   };
  
//   export const userReducer = (state = initialState, action) => {
//     console.log(action, initialState);
//     switch (action.type) {
//       case LOGIN_USER_SUCCESS:
//         return {
//           ...state,
//           user: action.payload,
//         };
//       case LOGIN_USER_FAIL:
//         return {
//           ...state,
//           errors: true,
//         };
  
//       case REGISTER_USER_SUCCESS:
//         return {
//           ...state,
//           user: action.payload,
//         };
//       case REGISTER_USER_FAIL:
//         return {
//           ...state,
//           errors: true,
//         };
  
//       default:
//         return state;
//     }
//   };
  
//   export default userReducer;