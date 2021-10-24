import { BrowserRouter, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import Tasks from './pages/Tasks'
import Reminders from './pages/Reminders'
import Goals from './pages/Goals'

const App = () => {
  return (
    <div className="ui container" style={{ height: '98vh', margin: '10px' }}>
      <BrowserRouter>
        <Route name="tasks" path="/tasks" component={Tasks} />
        <Route name="reminders" path="/reminders" component={Reminders} />
        <Route name="goals" path="/goals" component={Goals} />
        <Route name="login" path="/" exact component={LoginPage} />
      </BrowserRouter>
    </div>
  )
}

export default App
