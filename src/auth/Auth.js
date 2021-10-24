import { GoogleLogin } from 'react-google-login'
import { Button, Icon } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Auth = () => {
 const dispatch = useDispatch();
 const history = useHistory();

    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({ type: "AUTH", data: {result, token}})

            history.push('/tasks')
        } catch (err) {
            console.log(err)
        }
    }

    const googleFailure = () => {
        console.log('unsuccessful login')
    }

    return (
        <GoogleLogin 
            clientId="325275291512-jr3142ptf4kib4non2t5cffpu9v9k1th.apps.googleusercontent.com"
            render={(renderProps) => (
                <Button 
                    className='ui'
                    basic color="teal"
                    
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled} 
                    
                    variant="contained"
                >
                    <Icon name="google" />
                    Google Login
                </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure} 
            cookiePolicy="single_host_origin"
        />
    )
}

export default Auth