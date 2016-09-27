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

export default class LandingEN extends React.Component {
  render() {
    return (
      <div>
        <Appbar className={styles.bar}>
          <Row>
            <Col md="2" md-offset="1">
              <img src={logo} height="60px" />
            </Col>
            <Col md="6" className={styles.appBarNav}>
              <span><Link className={styles.navLink} to="">Staff</Link></span>
              <span><Link className={styles.navLink} to="">Schedule</Link></span>
            </Col>
            <Col md="2" className={styles.appBarNav}>
            	<span className={styles.langLink}><Link to="/">中文</Link></span>
            </Col>
          </Row>
        </Appbar>
        <div className={styles.hero} />
        <Container className={styles.body}>
        	<Row>
	          <Col md="8" md-offset="2">
  	          <h3 className={styles.heading}> 2016 g0v hackathon @ NYC</h3>
  	          <p className={styles.bodyText}> g0v.tw is an online community that pushes information transparency, focusing on developing information platform and tools for the citizens to participate in society.
  	          Substituting the “o” with “0″ in gov, the new “g0v” not only stands for rethinking the role that the government plays from the bottom up, but also represents the world view of 0 and 1 in the digital natives generation. Based on the spirit of open source, g0v cares about freedom of speech and open data, writing code to provide citizens the easy-to-use information service. The transparency of information can help citizens to have a better understanding on how the government works, to understand the issues faster and to avoid media monopoly, so they can monitor the government more efficiently, and become involved in actions and finally deepen the quality of democracy.
  	          </p>
              <a href="https://www.eventbrite.com/e/g0v-hackathon-nyc-tickets-27621197746" 
              		target="_blank">
            		<Button color="primary">Registration</Button>
            	</a>
	          </Col>
          </Row>
          <Divider />
          <Row>
          	<Col md="4" md-offset="4">
          		<img src={calendarIcon} className={styles.icon} />
          		<h3 className={styles.heading}> Information </h3>
          	</Col>
            <Col md="6">
            	<a href="https://www.google.com/maps/place/1460+Broadway,+New+York,+NY+10036/@40.7551113,-73.9884183,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259ab29218823:0x9ed7f9958f0596ca!8m2!3d40.7551073!4d-73.9862243" target="_blank">
            		<img src={mapImg} width="100%" />
            	</a>
            </Col>
            <Col md="6" className={styles.eventInfo}>
            	<h4 className={styles.infoLabel}>Date</h4>
            	<p className={styles.bodyTextBold}> 11/5 (Sat) - 11/6 (Sun) </p>
            	<p className={styles.bodyText}>
                <a href='http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=43'>
                  {'Forecast.'}
                </a>
                  Working overnight is optional.
              </p>
            	<h4 className={styles.infoLabel}>Location</h4>
            	<p className={styles.bodyTextBold}>NYC WeWork Times Square</p>
            	<p className={styles.bodyText}>1460 Broadway, NY 10036  
                <a href="https://www.google.com/maps/place/1460+Broadway,+New+York,+NY+10036/@40.7551113,-73.9884183,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259ab29218823:0x9ed7f9958f0596ca!8m2!3d40.7551073!4d-73.9862243" target="_blank">
                 {' Map'}
                </a>
              </p>
            	<h4 className={styles.infoLabel}>Who should attend</h4>
            	<p className={styles.bodyTextBold}>You and your love for open gov / open data</p>
            	<p className={styles.bodyText}>...and your laptop</p>
            	<h4 className={styles.infoLabel}>More Questions？</h4>
            	<p className={styles.bodyText}>We wrote a 
            	<a href="https://chatbotsmagazine.com/the-complete-beginner-s-guide-to-chatbots-8280b7b906ca#.v0tviytqq" target="_blank">
            	{'chatbot'}</a> to answer them. Give it a try！</p>
            	<a href="https://m.me/g0vus" 
              		target="_blank">
              	<Button color="primary">Chat with g0v bot</Button>
              </a>
            </Col>
          </Row>
          <Row>
            <div className={styles.sponsor}>
          	  <Col md="4" md-offset="4">
                <img src={sponsorIcon} className={styles.icon} />
              	<h3 className={styles.heading}> Sponsor Us</h3>
              	<p className={styles.bodyTextWhite}> 
              		Hackathons don't host themselves. We need all the help we can get! Our invited speakers fly all over the world to NYC. 
              		We reimburse out-of-state hackers and in g0v hackathons dishes of Taiwanese delicacy flow in endless supply. 
              		Chip in to help make this an unforgettable experience for our hackers, speakers and staff!
              	</p>
              	<a href="https://www.generosity.com/volunteer-fundraising/g0v-at-nyc-first-ever-hackathon" 
              		target="_blank">
              		<Button color="accent">Donate</Button>
              	</a>
              </Col>
            </div>
          </Row>
          <Row className={styles.speakerHeader}>
	          <Col md="4" md-offset="4">
	    	  		<img src={speakersIcon} className={styles.icon} />
	      			<h3 className={styles.heading}> Speakers </h3>
	      		</Col>
	      	</Row>
	      	<Row className={styles.speakerSection}>
	      		<Col md="4">
              <div className={styles.speakerCard}>
                <div className={styles.speakerImgLin}>
                </div>
                <div className={styles.speakerInfo}>
	      			   <h5 className={styles.speakerTitle}>Billy Lin</h5>
                 <p className={styles.speakerSubtitle}>Judicial Reform Foundation, Taiwan</p>
                 <p className={styles.speakerSubtitle}>Committee of Ill Gotten Party Assets, Executive Yuan, Taiwan</p>
                </div>
              </div>
	      		</Col>
	      		<Col md="4">
	      			<div className={styles.speakerCard}>
                <div className={styles.speakerImgKao}>
                </div>
                <div className={styles.speakerInfo}>
                 <h5 className={styles.speakerTitle}>CL Kao</h5>
                 <p className={styles.speakerSubtitle}>G0V Founder</p>
                 <p className={styles.speakerSubtitle}>Taiwanese open source community</p>
                </div>
              </div>
	      		</Col>
	      		<Col md="4">
	      			<div className={styles.speakerCard}>
                <div className={styles.speakerImgNicklin}>
                </div>
                <div className={styles.speakerInfo}>
                 <h5 className={styles.speakerTitle}>Andrew Nicklin</h5>
                 <p className={styles.speakerSubtitle}>Center for Gov. Excellence, JHU</p>
                 <p className={styles.speakerSubtitle}>Former Director, Open NY</p>
                </div>
              </div>
	      		</Col>
	      		{/*<Button color="primary" className={styles.speakerButton}>認識講者</Button>*/}
      		</Row>
      		<Row>
      			<Col md="4" md-offset="4">
      				<h3 className={styles.heading}> Host </h3>
      			</Col>
      			<Col md="6">
      				<a href="http://g0v.tw" 
              		target="_blank">
      					<img src={logo} height="100px" />
      				</a>
      			</Col>
      			<Col md="6">
      				<a href="https://www.facebook.com/cafephiloatNY/" 
              		target="_blank">
      					<img src={cafePhiloLogo} height="100px" />
      				</a>
      			</Col>
      		</Row>
          <Divider />
      		<Row>
      			<Col md="4" md-offset="4">
      				<h3 className={styles.heading}> Sponsors </h3>
      			</Col>
      			<Col md="8" md-offset="2">
              <div className={styles.bodyTextBottom}>
      				  Overseas Taiwanese for Democracy | G0VUS | TLA Law | C Bao | Taiwan Bear House
              </div>
      			</Col>
      		</Row>
        </Container>
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
