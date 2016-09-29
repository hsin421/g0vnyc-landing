import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import Button from 'muicss/lib/react/button';
import styles from '../../styles.css';
import logo from '../../images/organized_g0v.png';
import logoDark from '../../images/g0v_logo_dark.png';
import LandingEN from './LandingEN';

import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

export default class ChPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleHamburgerClick = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
  	const { children } = this.props;
    return (
      <div>
        <Appbar className={styles.bar}>
          <Row>
            <Col md="3" md-offset="1">
              <Link to="/en">
                <img src={logo} height="60px" />
              </Link>
              <span 
                className={styles.hamburger}
                onClick={this.handleHamburgerClick}
              >
                ☰
              </span>
            </Col>
            <Col md="6" className={styles.appBarNav}>
              <Link to="/en/schedule" className={styles.navLink} activeClassName={styles.navLinkSelected}>Schedule</Link>
              <Link to="/en/speakers" className={styles.navLink} activeClassName={styles.navLinkSelected}>Speakers</Link>
              <Link to="/en/staff" className={styles.navLink} activeClassName={styles.navLinkSelected}>Staff</Link>
              <a href="https://www.generosity.com/volunteer-fundraising/g0v-at-nyc-first-ever-hackathon" 
                target="_blank">
                <Button color="accent" className={styles.navButton}>Donate</Button>
              </a> 
              <a href="https://www.eventbrite.com/e/g0v-hackathon-nyc-tickets-27621197746" 
                target="_blank">
                <Button color="primary" className={styles.navButton}>Register</Button>
              </a>
            </Col>
            <Col md="2" className={styles.appBarNav}>
              <Link className={styles.langLink} to="/">中文</Link>
            </Col>
          </Row>
        </Appbar>
        {
          this.state.showMenu &&
          <ul className={styles.dropDownUl}>
            <li className={styles.headerItemResponsive}><Link to="/en/schedule" onClick={this.handleHamburgerClick}>Schedule</Link> </li>
            <li className={styles.headerItemResponsive}><Link to="/en/speakers" onClick={this.handleHamburgerClick}>Speakers</Link> </li>
            <li className={styles.headerItemResponsive}><Link to="/en/staff" onClick={this.handleHamburgerClick}>Staff</Link> </li>
            <li className={styles.headerItemResponsive}><Link to="/" onClick={this.handleHamburgerClick}>中文</Link> </li>
          </ul>
        }
       	{children}
        <Appbar className={styles.footer}>
          <Row>
            <Col md="3" md-offset="1">
              <img src={logoDark} height="20px" className={styles.footerLogo}/>
            </Col>
          </Row>
        </Appbar>
      </div>
    );
  }
}