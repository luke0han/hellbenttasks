import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import tabsReducer from "./tabsReducer";
import selectedTabReducer from './selectedTabReducer'
import selectedTaskReducer from './selectedTaskReducer';
import auth from './auth'

export default combineReducers({ 
    tabs: tabsReducer, 
    selectedTab: selectedTabReducer,
    selectedTask: selectedTaskReducer,
    auth: auth,
    tasks: tasksReducer
})