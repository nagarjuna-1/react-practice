import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './../counter/Counter.css'
import WelcomeComponent from './WelcomeComponent';
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state ={ 
                username : 'in28minutes',
                password : '',
                hasLoginFailed: false,
                showSuccessMessage: false
        }
    }
    render(){
        return(<div>
            {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}> </ShowInvalidCredentials> */}
            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
            {/* <ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage}></ShowLoginSuccess> */}
            {/* {this.state.showSuccessMessage && <div>Login Successfull</div>} */}
            {/* <WelcomeComponent></WelcomeComponent> */}
            <h1>Login</h1>
            <div className="container"/>
            UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleChangeEvent}/>
            Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChangeEvent}/>
            <Button className="btn btn-success" variant="btn btn-primary" onClick={this.loginClick}>Login</Button>
        </div>);
    }



    loginClick = () =>{
        if(this.state.username === "in28minutes" && this.state.password==="dummy")
        {
            AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password);
            // this.setState({showSuccessMessage: true});
            // this.setState({hasLoginFailed: false});
            this.props.history.push(`/welcome/${this.state.username}`)
        }else{
            this.setState({hasLoginFailed: true});
            this.setState({showSuccessMessage: false});
        }
    }
    // handleUserNameChange = (event) =>{
    //     console.log(event.target.value);
    //     this.setState({username : event.target.value});
    // }

    // handlePasswordChange = (event) =>{
    //     // console.log(event.target.value);
    //     this.setState({password : event.target.value});
    // }

    handleChangeEvent = (event) =>{
        this.setState({[event.target.name] : event.target.value});
    }
}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
    return <div>Invalid Credentials</div>
    }
    return null
}

function ShowLoginSuccess(props){
    console.log(props);
    if(props.showSuccessMessage){
    return <div>Login Successfull</div>
    }
    return null
}

export default LoginComponent;