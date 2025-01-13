import {createStore} from "redux";



const ADD_TASK ="task/add";
const DELETE_TASK ="task/DELETE";
const initialState  = {
    task: [],
    isLoaing:false,
};
const taskReducer = (State = initialState, action) => {
  switch (action.type) {

    case ADD_TASK:
        return {
            ...State,
            task: [...State.task,action.payload],
        };
        case DELETE_TASK:
            const updatedTask =State.task.filter((curTask,index)=> {
                return index == action.payload;
                
            })
        return {
            ...State,

            task: [...State.task,updatedTask],
        };
        default:
            return State;
  }
};

// create the redex store using te reducer
const store = createStore(taskReducer);
console.log();
console.group("initial  State:",store.getState());

store.dispatch(addTask("Buy TT code"));
console.log("updated State:",store.getState());


store.dispatch(addTask("Buy Mango"));
console.log("updated State:",store.getState());

store.dispatch({type:DELETE_TASK,payload:1});
console.log("delete State:",store.getState());


const addTask =  (data) => {
    return {type:ADD_TASK,payload:"data"};
};

const deleteTask = (id) => {
    return{type:DELETE_TASK,payload:id};
};
store.dispatch(addTask("Buy TT code"));
store.dispatch(addTask("Buy apple"));
store.dispatch(addTask("Buy banana"));
console.log("updated State:", store.getState());


store.dispatch(addTask("Buy Mango"));

console.log("update State:", store.getState
    
)










