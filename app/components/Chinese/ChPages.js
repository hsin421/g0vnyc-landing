import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';

import styles from '../../styles.css';
import logo from '../../images/organized_g0v.png';
import logoDark from '../../images/g0v_logo_dark.png';
import LandingCH from './LandingCH';

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
              <Link to="/">
                <img src={logo} height="60px" />
                <span 
                  className={styles.hamburger}
                  onClick={this.handleHamburgerClick}
                >
                  ☰
                </span>
              </Link>
            </Col>
            <Col md="8" className={styles.appBarText}>
            	<span className={styles.headerItem}><Link to="/schedule">活動流程</Link> </span>
              <span className={styles.headerItem}><Link to="/speakers">講者介紹</Link> </span>
              <span className={styles.headerItem}><Link to="/staff">工作人員</Link> </span>
              <span className={styles.headerItem}><Link to="/en">ENGLISH</Link> </span>
            </Col>
          </Row>
        </Appbar>
        {
          this.state.showMenu &&
          <ul className={styles.dropDownUl}>
            <li className={styles.headerItemResponsive}><Link to="/schedule" onClick={this.handleHamburgerClick}>活動流程</Link> </li>
            <li className={styles.headerItemResponsive}><Link to="/speakers" onClick={this.handleHamburgerClick}>講者介紹</Link> </li>
            <li className={styles.headerItemResponsive}><Link to="/staff" onClick={this.handleHamburgerClick}>工作人員</Link> </li>
            <li className={styles.headerItemResponsive}><Link to="/en" onClick={this.handleHamburgerClick}>ENGLISH</Link> </li>
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