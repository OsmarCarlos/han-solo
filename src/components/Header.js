import React from 'react';

const Header = (props) => (
    <div className="header">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <p className="header__subtitle">{props.subtitle}</p>}
    </div>
)

Header.defaultProps = {
    title: 'Indecision'
}

export default Header;