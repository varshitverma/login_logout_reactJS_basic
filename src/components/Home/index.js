// Write your code here
import {Component} from 'react'
import './index.css'

import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  changeBtnState = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    const buttonText = isLoggedIn ? 'Logout' : 'Login'

    return (
      <div className="bg-container">
        <div className="card">
          {isLoggedIn ? <Logout /> : <Login />}
          <button
            type="button"
            className="button"
            onClick={this.changeBtnState}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
