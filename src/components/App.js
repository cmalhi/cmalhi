import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import { firebaseAuth } from '../auth/firebase';
import Home from './home';

//Auth route
function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}
//No Auth route
function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/mygames' />}
    />
  )
}

//Authenticated Router and Navigation
//If route doesnt exist display "This route D.N.E."
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      loading: true,
    }
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <div className="title">Loading</div> : (
      <BrowserRouter>
        <div style={styles.container}>
          <nav className="nav">
            <div className="nav-container">
              <div className="nav-title">Chetanpreet Malhi</div>
              <div className="nav-list">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/home" className="nav-item">Home Route</Link>
                <Link to="/privatehome" className="nav-item">Home Private</Link>
                {this.state.authed
                  ? <div
                      style={{border: 'none', background: 'transparent'}}
                      onClick={() => {
                        firebaseAuth().signOut()
                      }}
                      className="nav-item">Logout</div>
                  : <div>
                      <Link to="/login" className="nav-item">Login</Link>
                      <Link to="/signup" className="nav-item">Signup</Link>
                    </div>
                }
              </div>
            </div>
          </nav>
          <div>
            <div>
              <Switch>
                <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/home' component={Home} />
                <PrivateRoute authed={this.state.authed} path='/privatehome' component={Home} />
                <Route render={() => <div>Route does not exist</div>} /> 
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const styles = {
  container: {
    height: '100vh'
  }
}