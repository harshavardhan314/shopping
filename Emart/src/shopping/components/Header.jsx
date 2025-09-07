import React from 'react'

const Header = () => {
  return (
    <header className="main-component">
      <div className="title">
        <h1>Life Style</h1>
      </div>

      <nav className="middle">
        <ul className="nav-items">
          <li>Women</li>
          <li>Men</li>
          <li>Kid</li>
          <li>Shoes and Bags</li>
        </ul>

        <div className="search">
          <input type="text" placeholder="What you are looking for" />
        </div>
      </nav>

      <div className="right">
        <button className="sign">Sign In / Sign Up</button>
        <button className="cart">Cart</button>
      </div>
    </header>
  )
}

export default Header
