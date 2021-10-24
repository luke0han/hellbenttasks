import React, { useState, useEffect } from 'react'
import { Button, Icon, Modal, TextArea } from 'semantic-ui-react'
import axios from 'axios'
// import e from 'express'
// import TaskDataService from '../services/taskService'

const AddTask = props => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [firstOpen, setFirstOpen] = useState(false)
  const [secondOpen, setSecondOpen] = useState(false)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskStartTime, setTaskStartTime] = useState('')
  const [taskEndTime, setTaskEndTime] = useState('')
  const [notes, setNotes] = useState('')
  // const id = user.result.googleId

  const clearTaskForm = () => {
    setTaskTitle('')
    setTaskStartTime('')
    setTaskEndTime('')
    setNotes('')
  }

  const cancelTaskAdd = () => {
    setSecondOpen(false)
    setFirstOpen(false)
  }

  const closeModal = () => {
    setSecondOpen(false)
    clearTaskForm()

    setTimeout(() => {
      setSecondOpen(false)
      setFirstOpen(false)
    }, 1000)
  }

  const newTaskAdded = e => {
    e.preventDefault()

    const newTask = {
      id: user.result.googleId,
      taskTitle: taskTitle,
      taskStartTime: taskStartTime,
      taskEndTime: taskEndTime,
      notes: notes,
    }

    axios
      .post('http://localhost:5000/task/add', newTask)
      .then(res => props.renderTasks())

    setFirstOpen(true)
    setSecondOpen(true)

    setTimeout(() => {
      setSecondOpen(false)
      setFirstOpen(false)
    }, 1000)

    props.updateTasksList()
  }

  return (
    <>
      <Button
        className="ui small teal labeled icon button"
        onClick={() => setFirstOpen(true)}
      >
        <i className="plus icon" /> Add New Task
      </Button>

      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
      >
        <Modal.Header className="ui centered teal">Add New Task</Modal.Header>
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
                    onChange={e => setTaskTitle(e.target.value)}
                    type="text"
                    name="taskTitle"
                    placeholder="Task Name"
                    value={taskTitle}
                  />
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
                        name="taskStartTime"
                        placeholder="Task Time"
                        onChange={e => setTaskStartTime(e.target.value)}
                        value={taskStartTime}
                      />
                    </div>
                    <div className="two wide column ui horizontal divider">
                      To
                    </div>
                    <div className="seven wide column">
                      <input
                        type="time"
                        name="taskEndTime"
                        placeholder="Task Time"
                        onChange={e => setTaskEndTime(e.target.value)}
                        value={taskEndTime}
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
                    <div className="ui loading icon input" name="notes">
                      <TextArea
                        name="notes"
                        placeholder="Add notes about your task..."
                        onChange={e => setNotes(e.target.value)}
                        value={notes}
                      />
                    </div>
                    <div className="ui padded equal width grid"></div>
                  </div>
                </div>
                <div className="ui two column padded centered grid ">
                  <Modal.Actions>
                    <Button
                      onClick={cancelTaskAdd}
                      className="center"
                      basic
                      color="teal"
                    >
                      <Icon name="close" />
                      Cancel
                    </Button>
                    <Button
                      onClick={newTaskAdded}
                      color="teal"
                      className="four wide column"
                    >
                      Proceed <Icon name="right chevron" />
                    </Button>
                  </Modal.Actions>
                </div>
              </form>
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal onClose={closeModal} open={secondOpen} size="small">
          <Modal.Content style={{ textAlign: 'center' }}>
            <h2 className="ui centered icon teal header">
              <i className="circular check icon white"></i>
              <div className="content">Task added successfully!</div>
            </h2>
          </Modal.Content>
        </Modal>
      </Modal>
    </>
  )
}

export default AddTask
