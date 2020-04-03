import React from "react";
import "./loginPage.css";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/auth.actions';


 class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    };

  
  }

handleClick(props){
 if(this.state.email === 'test' && this.state.pass === '12345'){
  this.props.authActions.setAuth()
  return
 }
 alert('Incorrenct pass or email!')

}

handleEmail = e => {
  this.setState({email: e.target.value})
}

handlePass = e => {
  this.setState({pass: e.target.value})
}

  componentDidMount(){
  
  }

  render() {
    return (
      <div className="login">
        <div className="login-form">
          <div className="div">
            <span>Email</span>
            <input onSubmit={()=> {this.handleClick()}} onChange={ this.handleEmail} value={this.state.email} className="login-input transition" />
          </div>
          <div className="div">
            <span>Password</span>
            <input onSubmit={()=> {this.handleClick()}} type="password" onChange={  this.handlePass}  value={this.state.pass} className="login-input transition" />
          </div>

          <button
            onClick={()=> {this.handleClick()}}
            className="login-button"
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions,  dispatch)
})

const mapStateToProps = (state) => ({
  auth: state.auth.auth
})


export default connect(mapStateToProps, mapDispatchToProps) (LoginPage);
