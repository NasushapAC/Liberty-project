import React from 'react';

const Nav = () => {
    return (
      <nav className="navbar">
        <div className="container ">
          <div className="navbar__container">
            <ul className="navbar__left">
              <div className="navbar__left-logo">
                <img src="/images/Logo.png" alt="logo" />
              </div>
              <div className="navbar__logo-text">
                <a href="">Liberty Finace</a>
              </div>
            </ul>
            <ul className="navbar__right">
              <li>
                <a href="">Dashboard</a>
              </li>
              <li>
                <a href="">Pools</a>
              </li>
              <li>
                <a href="">Boardroom</a>
              </li>
              <li>
                <a href="">Governance</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
 }

export default Nav