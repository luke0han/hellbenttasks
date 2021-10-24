import { useState } from 'react'
import { Grid, Button, Header, Input, Divider } from 'semantic-ui-react'
// import img from '../media/hellbentLogo.png'
import Auth from './Auth'

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
console.log(passwordVisible, username, password)
  return (
    <>
      <Divider horizontal>
        <Header as="h4" color="teal">
          Login
        </Header>
      </Divider>
      <div style={{ position: 'relative', top: '15%', width: '100%' }}>
        <Grid.Column textAlign="center">
          <div className="ui grid centered">
            <div className="ui row">
              <Input
                action={{
                  icon: 'user',
                  color: 'teal',
                }}
                onChange={(e) => {setUsername(e.target.value)}}
                actionPosition="left"
                type="text"
                className="ui input"
                placeholder="Username"
              />
            </div>

            <div className="ui row">
              <Input
                action={{
                  icon: 'eye',
                  color: 'teal',
                  onClick: () => setPasswordVisible(!passwordVisible)
                }}
                onChange={(e) => {setPassword(e.target.value)}}
                actionPosition="left"
                type={passwordVisible && "password" || 'text'}
                className="ui input"
                placeholder="Password"
              />
            </div>
            <div className="ui row right floated">
              <Button color="teal">Login</Button>
              <Auth />
            </div>
          </div>
        </Grid.Column>
      </div>
   
      
    </>
  )
}

export default Login
