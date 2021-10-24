import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Icon, TextArea } from 'semantic-ui-react'
import axios from 'axios'

const EditTask = props => {
//   const [id, setId] = useState('')
  const [taskTitle, setTaskTitle] = useState('')
  const [taskStartTime, setTaskStartTime] = useState('')
  const [taskEndTime, setTaskEndTime] = useState('')
  const [notes, setNotes] = useState('')
  const [triggerValue, setTriggerValue] = useState('')

  useEffect((id) => {
      setTriggerValue(props.selectedTask._id + 'trigger')

      console.log('props.selectedTask.key' + props.selectedTask._id)
    //   console.log(triggerValue)
//     axios
//       .get('http://localhost:5000/task/' + id)
//       .then(response => {
//         {
//           setTitle(response.data.title)
//         }
//         {
//           setStartTime(response.data.startTime)
//         }
//         {
//           setEndTime(response.data.endTime)
//         }
//         {
//           setNotes(response.data.notes)
//         }
//       })
//       .catch(function (error) {
//         console.log(error)
//       })

//     setId(props.selectedTask._id)
//     console.log(`IMTHE ID: ${id}`)
  })

//   const updateValue = (e) => {
//       const updatedTask = {
//         setTitle: title,
//         setStartTime: startTime,
//         setEndTime: endTime,
//         setNotes: notes
//       }
//   }
const updateTask = () => {
//     // e.preventDefault()

    const updatedTask = {
        taskTitle: taskTitle,
        taskStartTime: taskStartTime,
        taskEndTime: taskEndTime,
        notes: notes
      }

      axios
        .post('http://localhost:5000/update/' + props.selectedTask._id, updatedTask)
        .then(res => {
            setTaskTitle(res.data.taskTitle)
            setTaskStartTime(res.data.taskStartTime)
            setTaskEndTime(res.data.taskEndTim)
            setNotes(res.data.notes)
        })
        .catch(err => console.log(err))

}


  return (
    <Modal
      trigger={
        <Button
          className="ui small teal icon"
        //   onClick={console.log(props.selectedTask._id + 'im the real id')}
        >
          <i className="pencil icon" />
        </Button>
        // <CreateEditTasks />
       
      }
      header="Edit/Delete Task"
      //   content={props.selectedTask}
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    >
      <Modal.Header className="ui centered teal">Edit Task</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <div className="ui raised segment">
            <form className="ui form">
              <div className="field">
                <label>
                  <a href="/" className="ui teal left ribbon label">
                    Task
                  </a>
                </label>
                <input
                  type="text"
                  name="task-name"
                  placeholder=""
                  defaultValue={props.selectedTask.taskTitle}
                  onChange={e => setTaskTitle(e.target.value)}
                  
                />
                {/* <TextArea>{props.selectedTask.title}</TextArea>  */}
              </div>
              <div className="field">
                <label>
                  <a href="/" className="ui teal left ribbon label">
                    Time
                  </a>
                </label>
                <div className="ui three column stackable padded center aligned grid">
                  <div className="seven wide column">
                    <input
                      type="time"
                      name="task-time"
                      placeholder="Task Time"
                      onChange={(e) => setTaskStartTime(e.target.value)}
                      defaultValue={props.selectedTask.taskStartTime}
                    />
                  </div>
                  <div className="two wide column ui horizontal divider">
                    To
                  </div>
                  <div className="seven wide column">
                    <input
                      type="time"
                      name="task-time"
                      placeholder="Task Time"
                      onChange={e => setTaskEndTime(e.target.value)}
                      defaultValue={props.selectedTask.taskEndTime}
                    />
                  </div>
                </div>
              </div>

              <div className="field">
                <div className="field">
                  <label>
                    <a href="/" className="ui teal left ribbon label">
                      Notes
                    </a>
                  </label>
                  <div className="ui loading icon input">
                    <TextArea
                      placeholder=""
                      onChange={e => setNotes(e.target.value)}
                      defaultValue={props.selectedTask.notes}
                    ></TextArea>
                  </div>
                  <div className="ui padded equal width grid"></div>
                </div>
              </div>
              <div className="ui two column padded centered grid ">
                <Modal.Actions>
                  <Button
                    //   onClick={cancelTaskAdd}
                    className="center"
                    basic
                    color="teal"
                  >
                    <Icon name="close" />
                    Cancel
                  </Button>
                  <Button
                      onClick={() => updateTask(props.selectedTask.key)}
                    color="teal"
                    className="four wide column"
                  >
                    Save <Icon name="right chevron" />
                  </Button>
                </Modal.Actions>
              </div>
            </form>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

const mapStateToProps = state => {
  return { selectedTask: state.selectedTask }
}

export default connect(mapStateToProps)(EditTask)
