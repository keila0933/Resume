import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer container">
        <div className="contact container-flex">
          <div className="title_box container-flex">
            <h2>聯絡方式</h2>
            <span>CONTACT METHOD</span>
          </div>
        </div>
        <ul className="contactList font-size">
          <li>Mail：keila0933@gmail.com</li>
          <li>Phone：0988398037</li>
          <li>Miaoli, Taiwan</li>
        </ul>
        <ul className="footerIcon container-flex">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100000498964461">
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/keila0933">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Footer
