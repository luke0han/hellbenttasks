import db from '../../apis/db'

export const selectTab = tab => {
  return {
    type: 'TAB_SELECTED',
    payload: tab,
  }
}

export const selectTask = task => {
  return {
    type: 'TASK_SELECTED',
    payload: task,
  }
}

export const fetchTasks = () => async dispatch => {
  const response = await db.get('/task')

  dispatch({ type: 'FETCH_TASK', payload: response.username })
}
