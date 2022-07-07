import React from 'react'

function Hambar() {
  return (
    <div className="hambar-container">

        <div className="user-detail">
          <section className="ham-logo-section">
            <div className="ham-logo-div">
              <img className="ham-logo" src="http://localhost:3000/favicon.ico" alt="" />
            </div>
          </section>
          <hr className="vl solid" />
          <section className="ham-user-section">
            <h4 className="ham-user-section-name">Full Name</h4>
          </section>
        </div>
        <hr className="hl solid" />
        <div className="ham-menu">
          <ul className="ham-menu-ulist">
            <li className="ham-menu-list-element">Dashboard</li>
            <li className="ham-menu-list-element active">Orders</li>
            <li className="ham-menu-list-element">Products</li>
            <li className="ham-menu-list-element">Statistics</li>
            <li className="ham-menu-list-element">Requests</li>
            <li className="ham-menu-list-element">Settings</li>
          </ul>
        </div>


    </div>
  )
}

export default Hambar;