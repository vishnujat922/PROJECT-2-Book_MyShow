//1  mport Area
import React from 'react'
import Navigation from './Navigation'
//2 Definition Area
//2.1 Function Definition Area

//2.2 Hooks Area
export default function Header() {
  return (
    <>
      <header className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <a href="index.html">
                <img src="assets/images/logo/logo.png" alt="logo" />
              </a>
            </div>
            <Navigation />
            <div className="header-bar d-lg-none">
              <span>
                <span>
                  <span>
                  </span></span></span></div>
          </div>
        </div>
      </header>
    </>  ) 
  //2.3 Return Statement
}
//3 Export Area