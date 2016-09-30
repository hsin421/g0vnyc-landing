import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';

import styles from '../../styles.css';
import staffIcon from '../../images/icon_teams.png';
import mapImg from '../../images/map.jpg';
import logo from '../../images/organized_g0v.png';
import logoDark from '../../images/g0v_logo_dark.png';
import cafePhiloLogo from '../../images/organized_cafe_philo.png';

export default class Staff extends React.Component {
  render() {
    return (
      <div>
        <Container className={styles.pageBody}>
          <Row className={styles.pageTop}>
            <Col md="4" md-offset="4">
              <img src={staffIcon} className={styles.icon} />
              <h3 className={styles.heading}> Staff </h3>
              <p className={styles.bodyText}> We sincerely appreciate all who pitched in to help make g0v@NYC happen! </p>
            </Col>
          </Row>
          <Row>
            <Col md="8" md-offset="2">
              <div className={styles.greenDivider} />
            </Col>
          </Row>
          <Row>
            <Col md="8" md-offset="2">
              <div className={styles.staffCard}>
                <h3 className={styles.staffCardHeading}>Directors</h3>
                <p className={styles.bodyText}>Edward Yen-Ting Liu, Hsin Hsiao </p>
              </div>
            </Col>
            <Col md="8" md-offset="2">
              <div className={styles.staffCard}>
                <h3 className={styles.staffCardHeading}>Coordinators</h3>
                <p className={styles.bodyText}>Yi Hsuan Hsu, Ting-An Lin, 阿肥, 章廣庭, 黃韻儒, Dealia Chen, Eva Tsai </p>
              </div>
            </Col>
            <Col md="8" md-offset="2">
              <div className={styles.staffCard}>
                <h3 className={styles.staffCardHeading}>Designers</h3>
                <p className={styles.bodyText}><a className={styles.linkDecorated} href="http://mengchih.com/" target="_blank" >Meng Chih Chiang</a>, Angel Chen, Tim Lee, Chien-Ju Peng </p>
              </div>
            </Col>
            <Col md="8" md-offset="2">
              <div className={styles.staffCard}>
                <h3 className={styles.staffCardHeading}>Public Relation</h3>
                <p className={styles.bodyText}>Alice Hung, Shun Wang, Iris Shih-Yin Chen, Lala Yao </p>
              </div>
            </Col>
            <Col md="8" md-offset="2">
              <div className={styles.staffCard}>
                <h3 className={styles.staffCardHeading}>Event Planners</h3>
                <p className={styles.bodyText}>Darren Yang, Jen-Po Cheng, Hsiao-Ya, Linda, Alice Chen, Kuo B</p>
              </div>
            </Col>
            <Col md="8" md-offset="2">
              <div className={styles.staffCard}>
                <h3 className={styles.staffCardHeading}>Fundraisers</h3>
                <p className={styles.bodyText}>Jennifer Liu </p>
              </div>
            </Col>
            <Col md="8" md-offset="2">
              <div className={styles.staffCard}>
                <h3 className={styles.staffCardHeading}>Accountants</h3>
                <p className={styles.bodyText}>王小倩, 郭安宜 </p>
              </div>
            </Col>
            <Col md="8" md-offset="2">
              <div className={styles.staffCard}>
                <h3 className={styles.staffCardHeading}>Venue support</h3>
                <p className={styles.bodyText}>Yo-Chen Lin, Ching S Huang</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

