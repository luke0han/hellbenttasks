export default (selectedTab='tasks', action) => {
    if (action.type === 'TAB_SELECTED') {
                return action.payload;
            }
        
            return selectedTab;
        
}