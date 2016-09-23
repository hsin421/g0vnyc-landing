import React from 'react';
import { render } from 'react-dom';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import styles from './styles.css';
import calendarIcon from './images/icon_event.png';
import sponsorIcon from './images/icon_sponsors.png';
import speakersIcon from './images/icon_speakers.png';
import mapImg from './images/map.jpg';
import logo from './images/organized_g0v.png';
import cafePhiloLogo from './images/organized_cafe_philo.png';

class Example extends React.Component {
  render() {
    return (
      <div>
        <Appbar className={styles.bar}>
          <Row>
            <Col md="8">
              <img src={logo} height="60px" />
            </Col>
          </Row>
        </Appbar>
        <div className={styles.hero} />
        <Container className={styles.body}>
        	<Row>
	          <Col md="8" md-offset="2">
  	          <h3 className={styles.heading}>「紐」轉台灣 g0v黑客松</h3>
  	          <p className={styles.bodyText}> 『不能沒有你！』你有一身程式設計的絕技卻渴望能一展身手嗎？ </p>
  	          <p className={styles.bodyText}> 你的UI/UX與設計長才想讓更多人看見嗎？ </p>
              <p className={styles.bodyText}> 你有一堆想讓這社會更好的創意點子嗎？ </p>
              <p className={styles.bodyText}> 你知道座落在海外關於台灣的神秘檔案已經逐一開放，等這我們去探詢嗎？ </p>
              <p className={styles.bodyText}> 海外的大秘寶需要熱血如你 一身絕技如你來參與 </p>
              <Button color="primary">活動詳情</Button>
	          </Col>
          </Row>
          <Divider />
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
          <Divider />
          <Row>
          <div className={styles.sponsor}>
      	  <Col md="4" md-offset="4">
        	  	<img src={sponsorIcon} className={styles.icon} />
          		<h3 className={styles.heading}> 贊助我們 </h3>
          		<p> 哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈 哈哈哈哈哈</p>
          	  <Button color="primary">button</Button>
          </Col>
          </div>
          </Row>
          <Divider />
          <Row className={styles.speakerSection}>
	          <Col md="4" md-offset="4">
	    	  		<img src={speakersIcon} className={styles.icon} />
	      			<h3 className={styles.heading}> 邀請講者 </h3>
	      		</Col>
	      	</Row>
	      	<Row className={styles.speakerSection}>
	      		<Col md="4">
              <div className={styles.speakerCard}>
                <div className={styles.speakerImg}>
                </div>
                <div>
	      			   <h5 className={styles.speakerTitle}>Speaker</h5>
                 <p className={styles.speakerSubtitle}>subtitle</p>
                </div>
              </div>
	      		</Col>
	      		<Col md="4">
	      			<div className={styles.speakerCard}>
                <div className={styles.speakerImg}>
                </div>
                <div>
                 <h5 className={styles.speakerTitle}>Speaker</h5>
                 <p className={styles.speakerSubtitle}>subtitle</p>
                </div>
              </div>
	      		</Col>
	      		<Col md="4">
	      			<div className={styles.speakerCard}>
                <div className={styles.speakerImg}>
                </div>
                <div>
                 <h5 className={styles.speakerTitle}>Speaker</h5>
                 <p className={styles.speakerSubtitle}>subtitle</p>
                </div>
              </div>
	      		</Col>
      		</Row>
          <Divider />
      		<Row>
      			<Col md="4" md-offset="4">
      				<h3 className={styles.heading}> 主辦單位 </h3>
      			</Col>
      			<Col md="6">
      				<img src={logo} height="100px" />
      			</Col>
      			<Col md="6">
      				<img src={cafePhiloLogo} height="100px" />
      			</Col>
      		</Row>
          <Divider />
      		<Row>
      			<Col md="4" md-offset="4">
      				<h3 className={styles.heading}> 贊助單位 </h3>
      			</Col>
      			<Col md="8" md-offset="2">
              <div className={styles.bodyTextBottom}>
      				  海台青 | 美東G0V | 里達律師事務所 | C Bao 餐館 | Taiwan Bear
              </div>
      			</Col>
      		</Row>
        </Container>
        <Appbar className={styles.footer}>
          <Row>
            <Col md="8">
              I am footer
            </Col>
          </Row>
        </Appbar>
      </div>
    );
  }
}

render(<Example />, document.getElementById('app'));