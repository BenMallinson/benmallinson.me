import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types';

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="close" onClick={props.onToggleMenu}>Close</div>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
