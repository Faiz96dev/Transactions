import React, {Component} from "react";
import Manager from "../manager/Manager";
import LoginPage  from "../logIn/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { compose } from "redux";
import * as authActions from '../../actions/auth.actions';
import {Route, BrowserRouter, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

class Main extends Component {
    componentDidMount() {
     this.props.authActions.getAuth()
    }
    
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="container">
                        {this.props.auth ? (
       <Manager/>
      ) : (
       <LoginPage/>
      )}                    
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth.auth
})

const mapDispatchToProps = (dispatch) =>({
    authActions: bindActionCreators(authActions,  dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Main)
