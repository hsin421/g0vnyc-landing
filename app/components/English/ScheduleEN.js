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

export default class ScheduleCH extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null
    }
  }

  handleSelectDate = (date) => {
    this.setState({
      selectedDate: date
    });
  }

  render() {
    const { selectedDate } = this.state;
    const dateStyle = (date, selectedDate) => {
      if (date === selectedDate) {
        return styles.scheduleDateSelected;
      } else {
        if (selectedDate === null && date === 5) {
          return styles.scheduleDateSelected;
        }
        return styles.scheduleDate;
      }
    }

    const Nov4Schedule = (
      <div className={styles.scheduleBox}>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>18:30 - 20:00</div>
          <div className={styles.scheduleItemActivity}>紐約哲五 歡迎茶會 </div>
        </div>
        <div className={styles.scheduleItemWide}>
          <div className={styles.scheduleItemTime}>20:00 - 21:30</div>
          <div className={styles.scheduleItemActivity}>紐約哲五 黑客講座 <p>講者： 李務熙 </p> </div>
        </div>
      </div>
    );

    const Nov5Schedule = (
      <div className={styles.scheduleBox}>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>08:45 - 09:15</div>
          <div className={styles.scheduleItemActivity}>報到 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>09:15 - 09:30</div>
          <div className={styles.scheduleItemActivity}>開幕 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>09:30 - 09:45</div>
          <div className={styles.scheduleItemActivity}>活動流程說明 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>09:45 - 10:30</div>
          <div className={styles.scheduleItemActivity}>黑客松提案 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>10:30 - 11:00</div>
          <div className={styles.scheduleItemActivity}>揪團討論 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>11:00 - 23:00</div>
          <div className={styles.scheduleItemActivity}>實作 </div>
        </div>
      </div>
    );

    const Nov6Schedule = (
      <div className={styles.scheduleBox}>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>07:40 - 09:00</div>
          <div className={styles.scheduleItemActivity}>早餐 </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>07:00 - 10:30</div>
          <div className={styles.scheduleItemActivity}>討論及實作 </div>
        </div>
        <div className={styles.scheduleItemWide}>
          <div className={styles.scheduleItemTime}>10:30 - 12:00</div>
          <div className={styles.scheduleItemActivity}>論壇主題一 <p>Andrew Nicklin</p></div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>12:00 - 13:00</div>
          <div className={styles.scheduleItemActivity}>午餐交流 </div>
        </div>
        <div className={styles.scheduleItemWide}>
          <div className={styles.scheduleItemTime}>13:00 - 14:45</div>
          <div className={styles.scheduleItemActivity}>論壇主題二 <p>林雨蒼 x 高嘉良</p> </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>14:45 - 15:00</div>
          <div className={styles.scheduleItemActivity}>Tea Time </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.scheduleItemTime}>15:00 - 16:45</div>
          <div className={styles.scheduleItemActivity}>成果發表 </div>
        </div>
      </div>
    )

    return (
      <div>
        <Container className={styles.pageBody}>
          <Row className={styles.pageTop}>
          	<Col md="4" md-offset="4">
          		<img src={calendarIcon} className={styles.icon} />
          		<h3 className={styles.heading}> 活動流程 </h3>
          		<p className={styles.bodyText}> 本次黑客松詳細活動流程 </p>
          	</Col>
          </Row>
          <Row>
          	<Col md="8" md-offset="2">
          		<div className={styles.scheduleControl} >
                <div 
                  onClick={() => this.handleSelectDate(4)}
                  className={dateStyle(4, selectedDate)}
                >
                  11/04
                </div>
                <div 
                  onClick={() => this.handleSelectDate(5)}
                  className={dateStyle(5, selectedDate)}
                >
                  11/05
                </div>
                <div 
                  onClick={() => this.handleSelectDate(6)}
                  className={dateStyle(6, selectedDate)}
                >
                  11/06
                </div>
              </div>
          	</Col>
          </Row>
          <Row>
          	<Col md="8" md-offset="2">
          		<div className={styles.scheduleDateHeader}>
          			<h3 className={styles.staffCardHeading}>{selectedDate === 4 ? 'Friday, 11/04' : (selectedDate === 5 ? 'Saturday, 11/05' : 'Sunday, 11/06')}</h3>
          		</div>
              {selectedDate === 4 ? Nov4Schedule : (selectedDate === 5 ? Nov5Schedule : Nov6Schedule)}
              <div>
                <h3>備註</h3>
                <ul>
                  <li>活動全程提供食物(正餐及點心)和飲料（咖啡、果汁等）</li>
                  <li>設有休息、放鬆閒聊區</li>
                  <li>主辦單位準備睡袋數個，供有需要的夥伴使用</li>
                </ul>
              </div>
          	</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
