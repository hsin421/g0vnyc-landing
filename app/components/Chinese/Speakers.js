import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';

import styles from '../../styles.css';
import calendarIcon from '../../images/icon_event.png';
import sponsorIcon from '../../images/icon_sponsors.png';
import speakersIcon from '../../images/icon_speakers.png';
import mapImg from '../../images/map.jpg';
import logo from '../../images/organized_g0v.png';
import logoDark from '../../images/g0v_logo_dark.png';
import cafePhiloLogo from '../../images/organized_cafe_philo.png';

export default class SpeakersCH extends React.Component {
  render() {
    return (
      <div>
        <Container className={styles.body}>
          <Row className={styles.pageTop}>
          	<Col md="4" md-offset="4">
          		<img src={calendarIcon} className={styles.icon} />
          		<h3 className={styles.heading}> 講者介紹(施工中，請幫忙) </h3>
          		<p className={styles.bodyText}> 這是我們從台灣及美國各地請到.... </p>
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
          			<h3 className={styles.staffCardHeading}>林雨蒼</h3>
          			<p className={styles.staffCardBodyText}> Blah blah blah... </p>
          		</div>
          	</Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>高嘉良</h3>
          			<p className={styles.staffCardBodyText}>Blah blah blah </p>
          		</div>
          	</Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>Andrew Nicklin</h3>
          			<p className={styles.staffCardBodyText}>Blah blah lorem ipsum... </p>
          		</div>
          	</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
