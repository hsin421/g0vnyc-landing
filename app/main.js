import React from 'react';
import { render } from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import styles from './styles.css';
import calendarIcon from './images/icon_event.png';
import sponsorIcon from './images/icon_sponsors.png';
import speakersIcon from './images/icon_speakers.png';
import mapImg from './images/map.jpg';
import logo from './images/organized_g0v.png';

class Example extends React.Component {
  render() {
    return (
      <div>
        <Appbar>
        	<img src={logo} height={60} />
        </Appbar>
        <div className={styles.hero} />
        <Container>
        	<Row>
	          <Col md="6" md-offset="3">
	          <h3 className={styles.heading}>「紐」轉台灣 g0v黑客松</h3>
	          <p className={styles.bodyText}> 哈哈哈哈哈 哈哈哈哈哈 哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
	          <Button color="primary">活動詳情</Button>
	          </Col>
          </Row>
          <Row>
        	<Col md="4" md-offset="4">
        		<img src={calendarIcon} className={styles.icon} />
        		<h3 className={styles.heading}> 活動資訊 </h3>
        	</Col>
          <Col md="6">
          	<img src={mapImg} width="100%" />
          </Col>
          <Col md="6">
          	<h4>資訊</h4>
          	<p> 哈哈哈哈哈</p>
          	<h4>地點</h4>
          	<p>哈哈哈哈哈</p>
          	<h4>招募對象</h4>
          	<p>哈哈哈哈哈</p>
          </Col>
          </Row>
          <Row>
      	  <Col md="4" md-offset="4">
      	  	<img src={sponsorIcon} className={styles.icon} />
        		<h3 className={styles.heading}> 贊助我們 </h3>
        		<p> 哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈 哈哈哈哈哈</p>
        	  <Button color="primary">button</Button>
          </Col>
          </Row>
          <Row>
	          <Col md="4" md-offset="4">
	    	  		<img src={speakersIcon} className={styles.icon} />
	      			<h3 className={styles.heading}> 邀請講者 </h3>
	      		</Col>
	      	</Row>
	      	<Row>
	      		<Col md="4">
	      			Speaker
	      		</Col>
	      		<Col md="4">
	      			Speaker
	      		</Col>
	      		<Col md="4">
	      			Speaker
	      		</Col>
      		</Row>
      		<Row>
      			<Col md="4" md-offset="4">
      				<h3 className={styles.heading}> 主辦單位 </h3>
      			</Col>
      			<Col md="6">
      				G0V logo
      			</Col>
      			<Col md="6">
      				Cafe philo logo
      			</Col>
      		</Row>
      		<Row>
      			<Col md="4" md-offset="4">
      				<h3 className={styles.heading}> 贊助單位 </h3>
      			</Col>
      			<Col md="4" md-offset="4">
      				海台青 | 里達律師事務所 | C Bao
      			</Col>
      		</Row>
      		<footer>
      			I am footer
      		</footer>
        </Container>
      </div>
    );
  }
}

render(<Example />, document.getElementById('app'));