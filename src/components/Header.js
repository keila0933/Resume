import React from 'react'
import me from './../images/me.jpg'

class Header extends React.Component {
  render() {
    return (
      <div className="header mgb">
        <div className="photo">
          <img src={me} alt="" />
        </div>
        <div className="header-content">
          <p>Welocome to my website</p>
          <h1 className="header-title">I'm Josh FU</h1>
          <p className="header-text">Web Developer</p>
          <div className="socialMedia">
            <a href="" className="socialIcon">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="" className="socialIcon">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
