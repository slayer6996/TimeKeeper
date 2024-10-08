const taskFormReducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_TASK_FORM":
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default taskFormReducer;
