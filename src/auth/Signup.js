// import { x } from 'keyboard-key'
import { useState, useEffect } from 'react'
import { Grid, Button, Header, Input, Divider } from 'semantic-ui-react'

// import img from '../media/hellbentLogo.png'
import Auth from './Auth'

const Signup = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const [passwordMatchDisable, setPasswordMatchDisable] = useState(false)

  console.log(name, password, email, confirmPassword, document.getElementById("myPassword"))

  useEffect(() => {
    if ( password === confirmPassword) {
      setPasswordMatchDisable(false)
    } else setPasswordMatchDisable(true) 
    
  }, [password, confirmPassword])

  return (
    <>
      <Divider horizontal>
        <Header as="h4" color="teal">
          Signup
        </Header>
      </Divider>
      <div style={{ position: 'relative', top: '10%', width: '100%' }}>
        <Grid.Column textAlign="center">
          <div className="ui grid centered">
            <div className="ui row">
              <Input
                action={{
                  icon: 'user',
                  color: 'teal',
                }}
                onChange={(e) => {setName(e.target.value)}}
                actionPosition="left"
                type="text"
                className="ui input"
                placeholder="Name"
              />
            </div>
            <div className="ui row">
              <Input
                action={{
                  icon: 'envelope',
                  color: 'teal',
                }}
                onChange={(e) => {setEmail(e.target.value)}}
                actionPosition="left"
                type="text"
                className="ui input"
                placeholder="Email"
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
                type={(passwordVisible && "text") || "password"}
                className="ui input"
                placeholder="Password"
              />
            </div>

            <div className="ui row">
              <Input
                action={{
                  icon: 'eye',
                  color: 'teal',
                  onClick: () => setConfirmPasswordVisible(!confirmPasswordVisible)
                }}
                onChange={(e) => {setConfirmPassword(e.target.value)}}
                actionPosition="left"
                type={(confirmPasswordVisible && "text") || "password"}
                className="ui input"
                placeholder="Confirm Password"
              />
            </div>
            <div className="ui row">
              <Button disabled={passwordMatchDisable} color="teal">Sign up</Button>
              <Auth />
            </div>
          </div>
        </Grid.Column>
      </div>
    </>
  )
}

export default Signup
