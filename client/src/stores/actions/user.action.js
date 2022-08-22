import * as api from "../../Api/api";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";

// export const loginUser = (authData) => {
//   const { email, password } = authData;
//   return async (dispatch) => {
//     try {
//       const check = (x, y) => {
//         const {email,password} = api?.fetchData();
//         const {data} = api?.fetchData();
//         if (x === email && y === password) {
//           dispatch({type: LOGIN_USER_SUCCESS,payload: data });

//           return 1;
//         } else {
//           console.log("e =>", x, y);
//           dispatch({
//             type: LOGIN_USER_FAIL,
//           });
//         }
//       };
//       const result = await check(email, password);

//       console.log("Login Data >", result);
//       const resultData = await result;
//       // console.log('Shop data', resultData)
//       //
//       // console.log(resultData.data.data.shop)
//       return resultData;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const RegisterUser = (authData) => {
//   const { email, password, sex, date, country, Conditions } = authData;

//   return async (dispatch) => {
//     try {
//       const check = (i) => {
//         if (i) {
//           dispatch({
//             type: REGISTER_USER_SUCCESS,
//             payload: i,
//           });
//           return i;
//         } else {
//           dispatch({
//             type: REGISTER_USER_FAIL,
//           });
//         }
//       };
//       const result = await check(authData);
//       const resultData = await result;
//       console.log(resultData);
//       return resultData;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const PostWork = authData => {
//   const {title, description, link, uri, num} = authData;

//   return async dispatch => {
//     try {
//       const check = i => {
//         // function getRandomInt(max) {
//         //   return Math.floor(Math.random() * max);
//         // }
//         const x = num;
//         console.log('x', x);
//         if (i) {
//           if (x === 0 || x === null) {
//             dispatch({
//               type: POST_WORK_SUCCESS,
//               payload: i,
//             });
//           } else if (x === 1) {
//             dispatch({
//               type: POST_WORK1_SUCCESS,
//               payload: i,
//             });
//           } else if (x === 2) {
//             dispatch({
//               type: POST_WORK2_SUCCESS,
//               payload: i,
//             });
//           } else if (x === 3) {
//             dispatch({
//               type: POST_WORK3_SUCCESS,
//               payload: i,
//             });
//           } else if (x === 4) {
//             dispatch({
//               type: POST_WORK4_SUCCESS,
//               payload: i,
//             });
//           }

//           return i;
//         } else {
//           dispatch({
//             type: POST_EVENT_FAIL,
//           });
//         }
//       };
//       const result = await check(authData);
//       const resultData = await result;
//       console.log(resultData);
//       return resultData;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const AddCollection = authData => {
//   const {title, description, link, uri, num} = authData;

//   return async dispatch => {
//     try {
//       const check = i => {
//         const x = num;
//         console.log('x', x);
//         if (i) {
//           if (x === 0 || x === null) {
//             dispatch({
//               type: ADD_COLLECTION1_SUCCESS,
//               payload: i,
//             });
//           } else if (x === 1) {
//             dispatch({
//               type: ADD_COLLECTION2_SUCCESS,
//               payload: i,
//             });
//           }
//           return i;
//         } else {
//           console.log('0000');
//         }
//       };
//       const result = await check(authData);
//       const resultData = await result;
//       console.log(resultData);
//       return resultData;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const AddWork = authData => {
//   return async dispatch => {
//     try {
//       const check = i => {
//         const x = i?.num;
//         console.log('x', x);
//         if (i) {
//           if (x === 0 || x === null) {
//             dispatch({
//               type: ADD_WORK_COLLECTION1_SUCCESS,
//               payload: i,
//             });
//           } else if (x === 1) {
//             dispatch({
//               type: ADD_WORK_COLLECTION2_SUCCESS,
//               payload: i,
//             });
//           }
//           return i;
//         } else {
//           console.log('0000');
//         }
//       };
//       const result = await check(authData);
//       const resultData = await result;
//       console.log(resultData);
//       return resultData;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const DeleteWork = authData => {
//   return async dispatch => {
//     try {
//       const check = i => {
//         console.log('i',i)
//         const x = i?.num;
//         console.log('x', x);
//         if (i) {
//           if (x === 1 || x === null) {
//             dispatch({
//               type: DELETE_WORK_COLLECTION1_SUCCESS,
//               payload: i,
//             });
//           } else if (x === 2) {
//             dispatch({
//               type: DELETE_WORK_COLLECTION2_SUCCESS,
//               payload: i,
//             });
//           }
//           return i;
//         } else {
//           console.log('0000');
//         }
//       };
//       const result = await check(authData);
//       const resultData = await result;
//       console.log(resultData);
//       return resultData;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
