import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // <Header title = '... display the value passed by the 
    return (
      < div > 
        < h1 > { this . props . title } </ h1 > 
      </ div > 
    )
  }
}

export default Header;