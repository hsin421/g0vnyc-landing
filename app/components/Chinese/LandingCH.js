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

export default class LandingCH extends React.Component {
	render() {
		return(
			<div>
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
              <a href="https://www.eventbrite.com/e/g0v-hackathon-nyc-tickets-27621197746" 
              		target="_blank">
            		<Button color="primary">我要報名</Button>
            	</a>
	          </Col>
          </Row>
          <Divider />
          <Row>
          	<Col md="4" md-offset="4">
          		<img src={calendarIcon} className={styles.icon} />
          		<h3 className={styles.heading}> 活動資訊 </h3>
          	</Col>
            <Col md="6">
            	<a href="https://www.google.com/maps/place/1460+Broadway,+New+York,+NY+10036/@40.7551113,-73.9884183,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259ab29218823:0x9ed7f9958f0596ca!8m2!3d40.7551073!4d-73.9862243" target="_blank">
            		<img src={mapImg} width="100%" />
            	</a>
            </Col>
            <Col md="6" className={styles.eventInfo}>
            	<h4 className={styles.infoLabel}>資訊</h4>
            	<p className={styles.bodyTextBold}> 11/5 (Sat) - 11/6 (Sun) </p>
            	<p className={styles.bodyText}>
                <a href='http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=43'>
                  {'Forecast. '}
                </a>
                  Working overnight is optional.
              </p>
            	<h4 className={styles.infoLabel}>地點</h4>
            	<p className={styles.bodyTextBold}>NYC WeWork Times Square</p>
            	<p className={styles.bodyText}>1460 Broadway, NY 10036  
                <a href="https://www.google.com/maps/place/1460+Broadway,+New+York,+NY+10036/@40.7551113,-73.9884183,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259ab29218823:0x9ed7f9958f0596ca!8m2!3d40.7551073!4d-73.9862243" target="_blank">
                 {' Map'}
                </a>
              </p>
            	<h4 className={styles.infoLabel}>招募對象</h4>
            	<p className={styles.bodyTextBold}>熱血如火的你！</p>
            	<p className={styles.bodyText}>請自備電腦</p>
            	<h4 className={styles.infoLabel}>還有問題？</h4>
            	<p className={styles.bodyText}>我們寫了一個 
            	<a href="https://chatbotsmagazine.com/the-complete-beginner-s-guide-to-chatbots-8280b7b906ca#.v0tviytqq" target="_blank">
            	{' chatbot'}</a> 來回答你的問題，試試看！</p>
            	<a href="https://m.me/g0vus" 
              		target="_blank">
              	<Button color="primary">跟g0v bot聊聊</Button>
              </a>
            </Col>
          </Row>
          <Row>
            <div className={styles.sponsor}>
          	  <Col md="4" md-offset="4">
                <img src={sponsorIcon} className={styles.icon} />
              	<h3 className={styles.heading}> 贊助我們 </h3>
              	<p className={styles.bodyTextWhite}> 不論⾦額的⼤⼩，您的⽀持都讓我們距離上述目標更近⼀步。
活動結束後，我們會將財務明細以及成果報告⽤電⼦郵件的⽅式寄給貴組織，
持續分享各個專案的開發進度與成果。</p>
              	<a href="https://www.generosity.com/volunteer-fundraising/g0v-at-nyc-first-ever-hackathon" 
              		target="_blank">
              		<Button color="accent">贊助資訊</Button>
              	</a>
              </Col>
            </div>
          </Row>
          <Row className={styles.speakerHeader}>
	          <Col md="4" md-offset="4">
	    	  		<img src={speakersIcon} className={styles.icon} />
	      			<h3 className={styles.heading}> 邀請講者 </h3>
	      		</Col>
	      	</Row>
	      	<Row className={styles.speakerSection}>
	      		<Col md="4">
              <div className={styles.speakerCard}>
                <div className={styles.speakerImgLin}>
                </div>
                <div className={styles.speakerInfo}>
	      			   <h5 className={styles.speakerTitle}>林雨蒼</h5>
                 <p className={styles.speakerSubtitle}>民間司法改革基金會</p>
                 <p className={styles.speakerSubtitle}>行政院不當黨產委員會</p>
                </div>
              </div>
	      		</Col>
	      		<Col md="4">
	      			<div className={styles.speakerCard}>
                <div className={styles.speakerImgKao}>
                </div>
                <div className={styles.speakerInfo}>
                 <h5 className={styles.speakerTitle}>高嘉良</h5>
                 <p className={styles.speakerSubtitle}>G0V 創始人</p>
                 <p className={styles.speakerSubtitle}>台灣開源社群 長老</p>
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
      				<h3 className={styles.heading}> 主辦單位 </h3>
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
      				<h3 className={styles.heading}> 贊助單位 </h3>
      			</Col>
      			<Col md="8" md-offset="2">
              <div className={styles.bodyTextBottom}>
      				  海台青 | 美東G0V | 達里律師事務所 | C Bao 餐館 | Taiwan Bear House
              </div>
      			</Col>
      		</Row>
        </Container>
			</div>
		);
	}
}

