import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './../../index.css';
import AuthenticationService from './AuthenticationService';
import { withRouter } from 'react-router';


class HeaderComponent extends Component{
    render(){
        const isuserLoggedIn = AuthenticationService.isUserLoggedIn();
    //    console.log(isuserLoggedIn);
       return( <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://localhost:3000" className="navbar-brand">in28Minutes</a></div>
                        <ul className="navbar-nav">
                            {isuserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/welcome/in28Minutes">Home</Link></li>}
                            {isuserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/todos">Todos</Link></li>}
                        </ul> 
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isuserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/login">Login</Link></li> }
                             {isuserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>LogOut</Link></li>}
                        </ul>
                    </nav>
                </header>)
    }
}

export default withRouter(HeaderComponent);