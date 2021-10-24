// import React from "react"
// import { useState, useEffect } from "react"
// import { Button, Icon } from "semantic-ui-react"

// class GoogleAuth extends React.Component {
// state = { isSignedIn: null}

//     componentDidMount() {
//         window.gapi.load('client:auth2', () => {
//             window.gapi.client.init({
//                 clientId: '325275291512-jr3142ptf4kib4non2t5cffpu9v9k1th.apps.googleusercontent.com',
//                 scope: 'email'
//             })
//             .then(() => {
//                 this.auth = window.gapi.auth2.getAuthInstance();
//                 this.setState({ isSignedIn: this.auth.isSignedIn.get() })
//                 this.auth.isSignedIn.listen( () => this.updateSigninStatus( window.gapi.auth2.getAuthInstance().currentUser.get() ))
//             })
//         })
//     }

//     onAuthChange = () => {
//         this.setState({ isSignedIn: this.auth.isSignedIn.get() })
//     }

//     onSignIn = () => {
//         window.gapi.auth2.getAuthInstance().signIn()
//     }

//     onSignOut = () => {
//         window.gapi.auth2.getAuthInstance().signOut()
//     }

//     renderAuthButton = () => {
//         if(this.state.isSignedIn === null){
//             return null
//         } else if (this.state.isSignedIn) {
//             return <Button basic color="teal" onClick={this.onSignOut} ><Icon name="google" />Logout</Button>
//         } else {
//             return <Button basic color="teal" onClick={this.onSignIn} ><Icon name="google" />Google Login</Button>
//         }
//     }

//     render() {
//         return (
// <>
//         {this.renderAuthButton()}
        
//         </>
//         )
        
//     }
// }

// export default GoogleAuth