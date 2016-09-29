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
        <Container className={styles.pageBody}>
          <Row className={styles.pageTop}>
          	<Col md="4" md-offset="4">
          		<img src={speakersIcon} className={styles.icon} />
          		<h3 className={styles.heading}> Speakers</h3>
          	</Col>
          </Row>
          <Row>
          	<Col md="8" md-offset="2">
          		<div className={styles.greenDivider} />
          	</Col>
          </Row>
          <Row className={styles.speakerBio}>
          	<Col md="2" md-offset="2">
              <div className={styles.speakerImgLin + ' ' + styles.speakerAvatar} />
            </Col>
            <Col md="6" className={styles.speakerDetail}>
        			<h3 className={styles.speakerTitle}>林雨蒼</h3>
              <h4 className={styles.speakerSubtitle}>自由軟體工作者、公民記者</h4>
        			<p className={styles.staffCardBodyText}>
                中山大學生科系畢業，研究所主要專研動物生理學研究，同
                時開始自學程式，並參與撰寫 Lazyscript 專案。由於撰寫程式的經驗，因此有機會到中國
                擔任四年的工程師；但卻因為看見中國政府統治的荒謬而開始針對時事撰寫文章，希望能
                讓台灣看清獨裁體制的問題。後來加入沃草團隊，在立法院擔任國會記者以及沃草專案經
                理。在過去台灣 g0v 黑客松活動中，林雨蒼是積極的行動者，他參與 g0v 的許多專案，以
                及研究政策，為公開透明盡一份心力。 目前雨蒼卸下民間司法改革基金會的工作，擔任
                台灣不當黨產委員會委員，透過其資訊科技與司法政策的專長，為開放政府與公平正義的理想打拼。
               </p>
          	</Col>
          </Row>
          <Row>
            <Col md="8" md-offset="2">
              <div className={styles.iceDivider} />
            </Col>
          </Row>
          <Row className={styles.speakerBio}>
            <Col md="2" md-offset="2">
              <div className={styles.speakerImgKao + ' ' + styles.speakerAvatar} />
            </Col>
            <Col md="6" className={styles.speakerDetail}>
              <h3 className={styles.speakerTitle}>高嘉良</h3>
              <h4 className={styles.speakerSubtitle}>自由軟體工作者</h4>
              <p className={styles.staffCardBodyText}>
                台中一中畢業後保送台大資訊工程系。活躍於台灣及國際自由軟體界，曾與唐鳳等人共同
                創辦了藝立協（Elixir，藝術家獨立協會），發展台灣開源社群。曾與 RT 開發者 Jesse
                Vincent 共同經營 BestPractical 公司。2013 年底協助台灣學研界推廣自由開源軟體人才培
                育計畫。高嘉良是 Subversion 為版本控制系統 SVK 之創始者。他也是 Xcin 輸入法框架的
                前開發者以及 ChewingOSX / 酷音輸入法作者。在 2012 年，高嘉良與唐鳳等人共同發起零
                時政府，以開源軟體推動開放資料及開放政府運動。投入開放國會、中央政府總預算視覺
                化等專案。在台灣的公民社會與科技的結合發展中，扮演關鍵的角色。
               </p>
            </Col>
          </Row>
          <Row>
            <Col md="8" md-offset="2">
              <div className={styles.iceDivider} />
            </Col>
          </Row>
          <Row className={styles.speakerBio}>
            <Col md="2" md-offset="2">
              <div className={styles.speakerImgNicklin + ' ' + styles.speakerAvatar} />
            </Col>
            <Col md="6" className={styles.speakerDetail}>
              <h3 className={styles.speakerTitle}>Andrew Nicklin</h3>
              <h4 className={styles.speakerSubtitle}>自由軟體工作者</h4>
              <p className={styles.staffCardBodyText}>
                被美國開放資料社群以及政治界譽為「集創新與技術於一身的資料科學家」，不僅是為科技人，也是一位思想家。Andrew 在紐約前市長Bloomberg主政時期，帶領紐約市建構開放資料系統，並在隨後幫助在Andrew Cuomo州長建置紐約州開放資料。目前已經超過一千一百項開放資料可以在NYOpenData網站中找尋到，這兩個系統在隨後紐約市與紐約州扮演重要的政策決策角色。除了紐約，Andrew 也幫助全美超過一百個中型規模以上城市建構開放資料系統，在美國的開放資料系統建置中是最關鍵的人物。目前Andrew 加入 John Hopkins University 的GovEx中心，擔任研究中心主任，並且持續參與開放資料社群建立以及開放資料的建立。
               </p>
            </Col>
          </Row>
          <Row>
            <Col md="8" md-offset="2">
              <div className={styles.iceDivider} />
            </Col>
          </Row>
          <Row className={styles.speakerBio}>
            <Col md="2" md-offset="2">
              <div className={styles.speakerImgLi + ' ' + styles.speakerAvatar} />
            </Col>
            <Col md="6" className={styles.speakerDetail}>
              <h3 className={styles.speakerTitle}>李務熙</h3>
              <h4 className={styles.speakerSubtitle}>MIT Media Lab PhD</h4>
              <p className={styles.staffCardBodyText}>
                李務熙是台北萬華人，2014 年取得麻省理工學院媒體實驗室博士學位，師事美國電腦音
                樂先驅 Barry Vercoe 和人機互動專家 Chris Schmandt，研究包括聲音在虛擬與擴增實境
                (VR/AR)上的應用，以及音樂遊戲設計。李務熙創辦的新創公司正在開發 inMusic，
                (<a href="http://inmusic.space">http://inmusic.space</a>)，
                一個音樂的虛擬實境體驗。這個聽音樂的 app 讓聽者可以將音樂拆
                解，再重組在一個虛擬的互動聲響空間中。
               </p>
            </Col>
          </Row>
          <Row>
            <Col md="8" md-offset="2">
              <div className={styles.iceDivider} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
