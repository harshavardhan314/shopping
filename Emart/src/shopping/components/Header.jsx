import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="main-component">
            <div className="title">
                <h1>Life Style</h1>
            </div>
            <div className="middle">
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kid</li>
                    <li>Shoes and Bags</li>
                </ul>
                <div className="search">
                    <input type="text" placeholder='search...'/>
                </div>
            </div>
            <div className="right">
                <div className="sign">
                    Sign in / sign up
                </div>
                <div className="cart">
                    Cart
                </div>

            </div>
        </div>
    </div>
  )
}

export default Header