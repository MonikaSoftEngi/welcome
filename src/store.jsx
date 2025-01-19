// import { applyMiddleware, createStore } from "redux";
// import { composewithDevTools } from "@redux-devtools/extension";
// import { thunk } from "redux-thunk";
// import { configureStore } from "@reduxjs/toolkit";

// const ADD_TASK = "task/add";
// const DELETE_TASK = "task/DELETE";
// const FETCH_TASKS = "task/fetch";

// const initialState = {
//   task: [],
// };
// const taskReducer = (State = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return {
//         ...State,
//         task: [...State.task, action.payload],
//       };
//     case DELETE_TASK:
//       const updatedTask = State.task.filter((curTask, index) => {
//         return index == action.payload;
//       });
//       return {
//         ...State,

//         task: [...State.task, updatedTask],
//       };

//     case FETCH_TASKS:
//       return {
//         ...State,
//         task: [...State.task, ...action.payload],
//       };
//     default:
//       return State;
//   }
// };

// // create the redex store using te reducer

// // const store = createStore(
// //   taskReducer,
// //   composewithDevTools(applyMiddleware(thunk))
// // );
// // console.log();


//  export const store = configureStore({
//   reducer:{
//     taskReducer,
//   },
// });





// console.group("initial  State:", store.getState());

// store.dispatch(addTask("Buy TT code"));
// console.log("updated State:", store.getState());

// store.dispatch(addTask("Buy Mango"));
// console.log("updated State:", store.getState());

// store.dispatch({ type: DELETE_TASK, payload: 1 });
// console.log("delete State:", store.getState());

// export const addTask = (data) => {
//   return { type: ADD_TASK, payload: "data" };
// };

// export const deleteTask = (id) => {
//   return { type: DELETE_TASK, payload: id };
// };
// store.dispatch(addTask("Buy TT code"));
// store.dispatch(addTask("Buy apple"));
// store.dispatch(addTask("Buy banana"));
// console.log("updated State:", store.getState());

// store.dispatch(addTask("Buy Mango"));

// console.log("update State:", store.getState);

// export const fetchTask = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(
//         "https://jsonplaceholder.typicode.com/todos?_limit=3"
//       );
//       const task = await res.json();
//       dispatch({
//         type: FETCH_TASKS,
//         payload: task.map((curTask) => curTask.title),
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };





// RTK slice*******
import {ConfigureStore, createSlice} from " @reduxjs/toolkit";
const initialState = {
  task: [],
 };
 
 //?RTK slice
   const taskReducer =  createSlice({
  name:"task",
  initialState,
  reducers:{
 addTask(state,action) {},
 deleteTask(state,action) {},
  },
 });
 console.log(taskReducer);
 
 // new style
 export const store = ConfigureStore({
   reducer: {
     taskReducer,
   },
 });
 