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
          		<h3 className={styles.heading}> 工作人員 </h3>
          		<p className={styles.bodyText}> 感謝在紐約這群身懷絕技又願意為g0v努力不懈的「沒有人」！ </p>
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
          			<h3 className={styles.staffCardHeading}>總召</h3>
          			<p className={styles.bodyText}><a className={styles.linkDecorated} href="https://www.linkedin.com/in/yen-ting-liu-4121597b" target="_blank" >Edward Yen-Ting Liu</a>, <a className={styles.linkDecorated} href="https://github.com/hsin421" target="_blank" >Hsin Hsiao</a> </p>
          		</div>
          	</Col>
            <Col md="8" md-offset="2">
              <div className={styles.staffCard}>
                <h3 className={styles.staffCardHeading}>聯絡組</h3>
                <p className={styles.bodyText}>Yi Hsuan Hsu, Ting-An Lin, 阿肥, 章廣庭, 黃韻儒, Dealia Chen, Eva Tsai </p>
              </div>
            </Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>設計組</h3>
          			<p className={styles.bodyText}><a className={styles.linkDecorated} href="http://mengchih.com/" target="_blank" >Meng Chih Chiang</a>, <a className={styles.linkDecorated} href="http://www.angelnichen.com/" target="_blank" >Angel Chen</a>, Tim Lee, <a className={styles.linkDecorated} href="https://www.linkedin.com/in/cjpdesign" target="_blank" >Chien-Ju Peng</a> </p>
          		</div>
          	</Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>公關組</h3>
          			<p className={styles.bodyText}>Alice Hung, Shun Wang, Iris Shih-Yin Chen, Lala Yao </p>
          		</div>
          	</Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>活動組</h3>
          			<p className={styles.bodyText}>Darren Yang, Jen-Po Cheng, Hsiao-Ya, Linda, <a className={styles.linkDecorated} href="https://github.com/chena" target="_blank" >Alice Chen</a>, Kuo B</p>
          		</div>
          	</Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>募款組</h3>
          			<p className={styles.bodyText}>Jennifer Liu </p>
          		</div>
          	</Col>
            <Col md="8" md-offset="2">
              <div className={styles.staffCard}>
                <h3 className={styles.staffCardHeading}>會計組</h3>
                <p className={styles.bodyText}>王小倩, 郭安宜 </p>
              </div>
            </Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>場地組</h3>
          			<p className={styles.bodyText}>Yo-Chen Lin, Ching S Huang</p>
          		</div>
          	</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
