import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  rightNavs = () => {
    return (
      <Menu.Menu position='right'>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div style={{backgroundColor: '#666'}}>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='By Cities' />
          </Link>
          <Link to='/chars'>
            <Menu.Item name='By Characters' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

export default NavBar;
