export default (selectedTask='null', action) => {
        if (action.type === 'TASK_SELECTED') {
            return action.payload;
        }
    
        return selectedTask;
}