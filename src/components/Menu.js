import { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
// import Auth from '../auth/Auth'

import { Button, Container } from 'semantic-ui-react'



import { selectTab } from '../redux/actions'

export const Menu = props => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()

  const logout = () => {
    dispatch({ type: 'LOGOUT' })

    history.push('/')

    setUser(null)
  }

  // const noLogin = () => {
  //   if (user.result === null){
  //     dispatch({ type: 'LOGOUT' })
  //     history.push('/')

  //     setUser(null)
  //   }
   
  // }

  useEffect(() => {
    // const token = user?.token
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  return (
    <>
    {/* <Container style={{position: 'absolute', top: '15px'}} textAlign='right' floated='right'>
        <Button  basic color="teal" >Logout</Button>
        </Container> */}
        {/* {noLogin()} */}
     {/* <div className="container">
     <Container style={{position: 'absolute', marginTop: '15px'}} textAlign='right' floated='right'>
       Hi {user.result.givenName}
       {/* logout */}
        {/* </Container> */}
       
    {/* //  </div> */} 
      <div className="ui top attached tabular menu">
        
        {console.log(user)}
        <Link
          to="/tasks"
          className={`item ${props.tab === 'tasks' ? 'active' : ''}`}
          onClick={() => props.selectTab('tasks')}
        >
          Tasks
        </Link>
        <Link
          to="/goals"
          className={`item ${props.tab === 'goals' ? 'active' : ''}`}
          onClick={() => props.selectTab('goals')}
        >
          Goals
        </Link>
        <Link
          to="/reminders"
          className={`item ${props.tab === 'notes' ? 'active' : ''}`}
          onClick={() => props.selectTab('notes')}
        >
          Notes
        </Link>
       <div className="ui right menu" style={{border: 'none', borderShadow: 'none', boxShadow: 'none', marginBottom: '5px'}}>
       <Button floated="right" onClick={logout} basic color="teal" >Logout</Button>
       </div>
        
      </div>
      
      
    </>
  )
}

const mapStateToProps = state => {
  console.log(state)
  // console.log(user)
  return { tab: state.selectedTab, tasks: state.tasks }
}

export default connect(mapStateToProps, { selectTab })(Menu)
