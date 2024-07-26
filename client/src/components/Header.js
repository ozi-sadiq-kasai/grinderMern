import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    // const { auth } = this.props;

    switch (this.props.auth) {
      case null:
        return; // Do nothing or return null
      case false:
        return (
          <li >
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
         <li key='1'>
         <Payments />
        </li>,
        <li key='3' style={{margin:'0 10px'}}>
         Credits:{this.props.auth.credits}
        </li>,
          <li key='2'>
            <a href="/api/logout">Logout</a>
          </li>
        ]
    }
  }

  render() {
    console.log(this.props); // Check the props to ensure correct data
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'}
          
          className="left brand-logo">AxonLink</Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

// Correct mapStateToProps function to return { auth: state.auth }
function mapStateToProps(state) {
  return { auth: state.auth };
}

// Connect the component to Redux store
export default connect(mapStateToProps, )(Header);
