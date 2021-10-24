import { useEffect, useState } from 'react'
import EditTask from '../components/EditTask'
import { selectTask } from '../redux/actions/index'
import AddTask from '../components/AddTask'
import Menu from '../components/Menu'
import BannerImage from '../components/BannerImage'
import { connect } from 'react-redux'
import { fetchTasks } from '../redux/actions/index'
import axios from 'axios'
import { Button, Icon } from 'semantic-ui-react'
import DeleteTask from '../components/DeleteTask'
// import TaskDataService from '../services/taskService'

const Tasks = props => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [tasksList, setTasksList] = useState([])
  const [tasks, setTasks] = useState([])
  const [listName, setListName] = useState('')

  useEffect(() => {
    console.log(user.result.googleId + ' user!' + tasksList + 'tasksList')
    axios
      .get('http://localhost:5000/task/' + user.result.googleId)
      .then(response => {
        setTasksList(response.data)
        // console.log("tasks List: " + response.data[0]._id)
      })
      .catch(function (error) {
        console.log(error)
      })

    // axios
    // .get('http://localhost:5000/task/' )
    // .then(response => {
    //   setTasksList(response.data)
    //   // console.log("tasks List: " + response.data[0]._id)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }, [props.match.params.id])

  const deleteTask = id => {
    axios.delete('http://localhost:5000/' + id).then(response => {
      console.log(response.data + 'response data')
    })

    setTasksList(tasksList.filter(el => el._id !== id))
  }

  const updateTasksList = async () => {
    await axios
      .get('http://localhost:5000/task/' + user.result.googleId)
      .then(response => {
        setTasksList(response.data)
        // console.log("tasks List: " + response.data[0]._id)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const renderTasks = () => {
    return tasksList.map(task => {
      return (
        <tr key={task._id} onClick={() => props.selectTask(task)}>
          <td className="collapsing ">
            <EditTask id={task._id} selectedTask={props.selectedTask} />
            <Button
              basic
              color="teal"
              className="ui small teal icon"
              onClick={() => deleteTask(task._id)}
            >
              <Icon name="trash alternate" />
            </Button>
          </td>
          <td style={{ textAlign: 'center' }}>{task.taskTitle}</td>
          <td style={{ textAlign: 'center' }}>
            {task.taskStartTime} - {task.taskEndTime}
          </td>
          <td style={{ textAlign: 'center' }}>{task.notes}</td>
        </tr>
      )
    })
  }

  return (
    <>
      <BannerImage />
      <Menu />
      <div className="ui bottom attached segment">
        <table className="ui compact teal celled definition table">
          <thead className="full-width">
            <tr>
              <th></th>
              <th style={{ textAlign: 'center' }}>Task</th>
              <th style={{ textAlign: 'center' }}>Time</th>
              <th style={{ textAlign: 'center' }}>Notes</th>
            </tr>
          </thead>
          <tbody>{renderTasks()}</tbody>
          <tfoot className="full-width">
            <tr>
              <th></th>
              <th colSpan="4" style={{ textAlign: 'center' }}>
                <AddTask
                  user={user}
                  renderTasks={renderTasks}
                  updateTasksList={updateTasksList}
                  tasksList={tasksList}
                  setTasksList={setTasksList}
                />
                {console.log(`tl: ${tasksList}`)}
                {/* <div className="ui right floated  buttons">
                <button className="ui teal button">Edit Task</button>
                <div className="or"></div>
                <button className="ui red button">Delete Task</button>
              </div> */}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return { selectedTask: state.selectedTask, tasks: state.tasks }
}

export default connect(mapStateToProps, { selectTask, fetchTasks })(Tasks)
