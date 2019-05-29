import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import './Menu.scss';
import { FormattedMessage } from 'react-intl';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.createNavItem = this.createNavItem.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    createHome() {
        return (
            <NavItem className='Menu-navbar--nav-item'>
                <NavLink className='Menu-navbar--nav-item-link' href="#Hero">
                    Start
                </NavLink>
            </NavItem>
        )
    }

    createNavItem(id) {
        return (
            <NavItem className='Menu-navbar--nav-item'>
                <NavLink className='Menu-navbar--nav-item-link' href={'#'+id}>
                    <FormattedMessage id={id} />
                </NavLink>
            </NavItem>
        )
    }

    render() {
        let components = ['About', 'Portfolio', 'Technologies', 'Contact'];

        return (
            <div className='Menu'>
                <div id="lang" className='Menu-lang' data-aos='zoom-in'>
                    <button className='Menu-lang--button' onClick={() => this.props.setLanguage('pl')}>PL</button>|
                    <button className='Menu-lang--button' onClick={() => this.props.setLanguage('en')}>EN</button>
                </div>

                <Navbar className='Menu-navbar navbar-dark' expand="md">
                    <NavbarToggler id="hamburger" className='Menu-navbar--hamburger' onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav id="menu" className="ml-auto Menu-navbar--nav" navbar data-aos='zoom-in'>
                            { this.createHome() }
                            { components.map((component) => this.createNavItem(component)) }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}