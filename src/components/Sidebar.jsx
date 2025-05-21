import React from "react"

const Sidebar = ({ sidebarOpen, setSidebarOpen }) =>
  sidebarOpen && (
    <>
      <div className="overlay visible" onClick={() => setSidebarOpen(false)} />
      <nav className="sidebar open">
        <button
          className="menu-close-button"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          <img src="/images/icon-close.svg" alt="close" />
        </button>
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )

export default Sidebar
