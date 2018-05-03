import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/logo.png'
import PropTypes from 'prop-types';

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><span className="image left"><img src={logo} alt="" /></span>
        </Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
