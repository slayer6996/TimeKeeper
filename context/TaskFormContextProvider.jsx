import React, { createContext, useReducer } from "react";
import taskFormReducer from "../reducers/TaskFormReducer";

const TaskFormContext = createContext();
export { TaskFormContext };

const initialForm = {
    taskName: null,
    time: {
        timeAt: null,
        timeFrom: null,
        timeTo: null
    },
    days: [],
    notes: null,
    taskTag: null
};

const TaskFormContextProvider = ({children}) => {
    const [taskForm, dispatch] = useReducer(taskFormReducer, initialForm);

    return(
        <TaskFormContext.Provider value={{taskForm, dispatch}}>
            {children}
        </TaskFormContext.Provider>
    )
}

export { TaskFormContextProvider };
