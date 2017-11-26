import React, {Component} from 'react';
import ReactDom from 'react-dom';

const cn = require('bem-cn')('header');
if (process.env.BROWSER) {
  require('./header.css')
}

class Header extends Component {
  render () {
    return (
      <header className={cn()}>
        <h1>
          {this.props.title}
        </h1>
      </header>
    );
  }
}
export default Header;
