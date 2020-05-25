import React, {Component} from 'react';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import ListTodosComponent from './ListTodosComponent';
import {Link} from 'react-router-dom';
import './../../index.css';
import AuthenticationService from './AuthenticationService';
import AuthenticatedRoute from './AuthenticatedRoute';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
class TodoApp extends Component{
    render= () => {
        return (<div className="TodoApp">
            <Router>
                <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>                      
                        <Route path="" component={ErrorComponent}/>           
                    </Switch>         
                    <FooterComponent/>       
                </>
            </Router>
            {/* <LoginComponent/> */}
        </div>)
    }
} 

export default TodoApp;