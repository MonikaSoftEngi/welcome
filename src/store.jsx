const ADD_TASK ="task/add";
const DELETE_TASK ="task/DELETE";
const initialState  = {
    task: [],
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
