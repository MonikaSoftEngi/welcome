
import {store} from "../../store";
import { addTask } from "./taskSlice";

console.log(store.getState());

   console.log(store.dispatch(addTask("Buy Mango"))); 
 console.log(store.getState());
 console.log(store.dispatch(addTask("Buy Grapes")));
 console.log(store.dispatch(deleteTask(1)));
 console.log(store.getState());
 console.log(store.dispatch(addTask("Buy Apple")));
 console.log(store.getState());