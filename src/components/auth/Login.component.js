import React, { Component } from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'

class Login extends Component {
    state = {
        isSignedIn: false
    }

    responseGoogle = (response) => {
        console.log(response);
        if (response.profileObj) {
            this.setState({isSignedIn: true})
        } else {
            this.setState({isSignedIn:false})
        }
    }

    logout = () => {
        this.setState({isSignedIn:false})
    }

  render() {
    return (
      <div className='ui segment container'>
        { !this.state.isSignedIn && (
            <GoogleLogin
            clientId='479934323372-o2vtv2nvkq21km7g3kvbh5ontr8ufeoh.apps.googleusercontent.com'
            buttonText='Login with Google'
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
        ></GoogleLogin>)}


        {( this.state.isSignedIn && <GoogleLogout
            clientId='479934323372-o2vtv2nvkq21km7g3kvbh5ontr8ufeoh.apps.googleusercontent.com'
            buttonText='Logout'
            onLogoutSuccess={this.logout}
        ></GoogleLogout>)}
      </div>
    )
  }
}

export default Login
