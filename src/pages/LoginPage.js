import { useState } from 'react'
import {  Image, Grid,  } from 'semantic-ui-react'
import Signup from '../auth/Signup'
import Login from '../auth/Login'
import img from '../media/hellbentLogo.png'
// import GoogleAuth from '../auth/GoogleAuth'



const LoginPage = () => {
  const [signupVisible, setSignupVisible] = useState(false)

  return (
    <>
    <Image src={img} centered size="medium" />
          <div className="ui container"  >
    <Grid>
    <div className="ui teal" style={{ position: "relative", top: "30%", width: "100%"}}  >
          {(signupVisible && <Signup />) || <Login />}
          <div className="ui container" style={{ position: "relative", marginTop: "60px", width: "100%"}}>
          {(signupVisible && "Already signed up?" || "New User?")}
          <span
            style={{color: 'teal'}}
            onClick={() => setSignupVisible(!signupVisible)}
            className="ui basic teal pointer-cursor"
          >
            <a href="#" style={{color: 'teal', padding: '10px'}}  onClick={() => setSignupVisible(!signupVisible)}>
            {(signupVisible && "Login" || "Sign up")}
            </a>
          </span>
          </div>
        </div>
    </Grid>
          </div>
            </>
  )
}

export default LoginPage
