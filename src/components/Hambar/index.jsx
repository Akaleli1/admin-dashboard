import React from 'react'
import '../../styles/dashboard/hambar/styles.scss'

function Hambar() {
  return (
    <div className="hambar">

        <div className="user-detail">
          <section className="ham-logo-section">logo</section>
          <hr className="vl solid" />
          <section className="ham-user-section">user</section>
        </div>
        <hr className="hl solid" />
        <div className="ham-menu">
          <ul className="ham-menu-ulist">
            <li className="ham-menu-list-element active">Dashboard</li>
            <li className="ham-menu-list-element">Orders</li>
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