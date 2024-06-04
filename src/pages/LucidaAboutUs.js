import { useCallback ,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LucidaAboutUs.css";
import FunAndMore from "../components/FunAndMore";
import Celebrations from "../components/Celebrations";
import WorkLife from "../components/WorkLife";
import "../components/WorkLife.css";
import "../components/Celebrations.css";
import "../components/FunAndMore.css";

const LucidaAboutUs = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUSTextClick = useCallback(() => {
    navigate("/lucidaaboutus");
  }, [navigate]);

  const onSOLUTIONSTextClick = useCallback(() => {
    navigate("/solutions");
  }, [navigate]);

  const onRESOURCESTextClick = useCallback(() => {
    navigate("/lucidaresources");
  }, [navigate]);

  const [selectedComponent, setSelectedComponent] = useState(WorkLife);

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="lucida-aboutus">
      <img
        className="lucida-aboutus-child"
        alt=""
        src="/rectangle-148217@2x.png"
      />
      <div className="team">
        <div className="team-inner">
          <div className="group-parent30">
            <div className="rectangle-parent11">
              <div className="group-child31" />
              <div className="group-parent31">
                <div className="ramachandran-subramanian-ramc-parent">
                  <b className="ramachandran-subramanian-ramc">
                    Ramachandran Subramanian (Ramc)
                  </b>
                  <i className="over-30-years-container">
                    <span className="over-30-years-container1">
                      <p className="over-30-years">{`Over 30+ years of global IT industry   `}</p>
                      <p className="experience-with-organizations">
                        experience with organizations like Zensar, Accenture,
                        TechMahindra.
                      </p>
                    </span>
                  </i>
                  <div className="ceo-parent">
                    <div className="ceo">CEO</div>
                    <img className="group-icon4" alt="" src="/group6.svg" />
                  </div>
                </div>
                <img className="frame-icon" alt="" src="/frame-244186.svg" />
              </div>
            </div>
            <div className="rectangle-parent12">
              <div className="group-child31" />
              <div className="group-parent32">
                <div className="banu-prakash-c-parent">
                  <b className="banu-prakash-c">Banu Prakash C</b>
                  <i className="software-architect-with">
                    Software Architect with over 28+ years of experience in
                    architecting/ designing/ developing complex n-tier
                    distributed applications.
                  </i>
                  <div className="co-founder-and-cto-parent">
                    <div className="co-founder-and-cto">Co-Founder and CTO</div>
                    <img className="group-icon5" alt="" src="/group6.svg" />
                  </div>
                </div>
                <img
                  className="group-child33"
                  alt=""
                  src="/frame-2441861.svg"
                />
              </div>
            </div>
            <div className="rectangle-parent13">
              <div className="group-child31" />
              <div className="group-parent33">
                <div className="suhas-dutta-parent">
                  <b className="banu-prakash-c">Suhas Dutta</b>
                  <i className="an-ex-accenture-partner">
                    an ex-Accenture partner, with over 30 years experience.
                    Currently runs a Strategy Consulting, and Digital
                    Transformation firm, partner to Lucida.
                  </i>
                  <div className="digital-transformation-advisor-parent">
                    <div className="digital-transformation-advisor">
                      Digital Transformation Advisor / Consultant
                    </div>
                    <img className="group-icon6" alt="" src="/group511.svg" />
                  </div>
                </div>
                <img
                  className="group-child33"
                  alt=""
                  src="/frame-2441862.svg"
                />
              </div>
            </div>
            <div className="rectangle-parent14">
              <div className="group-child31" />
              <div className="group-parent33">
                <div className="suhas-dutta-parent">
                  <b className="banu-prakash-c">Murali Setty</b>
                  <i className="over-20-years">{`Over 20 years of  experience in solution architecting and designing of software systems `}</i>
                  <div className="vp-enterprise-architecture-parent">
                    <div className="vp-enterprise-architecture">
                      VP, Enterprise Architecture
                    </div>
                    <img className="group-icon7" alt="" src="/group61.svg" />
                  </div>
                </div>
                <img
                  className="group-child33"
                  alt=""
                  src="/frame-2441863.svg"
                />
              </div>
            </div>
            <div className="rectangle-parent15">
              <div className="group-child31" />
              <div className="group-parent33">
                <div className="suhas-dutta-parent">
                  <b className="banu-prakash-c">Jahnavi Thekkada</b>
                  <i className="over-22-years">
                    Over 22 years experience in Data Science, Analytics and Data
                    warehousing
                  </i>
                  <div className="vp-analytics-and-data-science-parent">
                    <div className="vp-analytics-and">
                      VP, Analytics and Data Science
                    </div>
                    <img className="group-icon8" alt="" src="/group61.svg" />
                  </div>
                </div>
                <img
                  className="group-child33"
                  alt=""
                  src="/frame-2441864.svg"
                />
              </div>
            </div>
            <div className="rectangle-parent16">
              <div className="group-child31" />
              <div className="group-parent36">
                <div className="krishnamurthy-nt-parent">
                  <b className="krishnamurthy-nt">Krishnamurthy NT</b>
                  <i className="database-technologies-expert">
                    Database Technologies expert with over 28+ years of industry
                    experience
                  </i>
                  <div className="co-founder-and-coo-parent">
                    <div className="co-founder-and-coo">Co-Founder and COO</div>
                    <img className="group-icon9" alt="" src="/group6.svg" />
                  </div>
                </div>
                <img
                  className="group-child41"
                  alt=""
                  src="/frame-2441865.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="team-child">
          <div className="lucidas-core-missions-and-container">
            <b className="lucidas-core5">Meet Our Executive Leadership</b>
            <div className="contact-us-22">Team</div>
          </div>
        </div>
        <i className="lucidas-expert-team">
          Lucida's expert team specializes in digital transformation, boasting
          diverse skills from development to strategic analysis. With a focus on
          innovation and client satisfaction, we deliver cutting-edge solutions
          that unlock the full potential of applications and data.
        </i>
      </div>
      <div className="aboutustabs">
        <div className="line-group">
          <div className="group-child42" />
          <div className="celebrations-parent">
            <div className="celebrations" onClick={() => handleButtonClick(<Celebrations/>)}>Celebrations</div>
            <div className="fun-more" onClick={() => handleButtonClick(<FunAndMore/>)}>{`Fun & more`}</div>
            <div className="frame-container">
              <div className="work-life-wrapper">
                <b className="work-life" onClick={() => handleButtonClick(<WorkLife/>)}>Work Life</b>
              </div>
            </div>
          </div>
        </div>
        <div>
        {selectedComponent}
        </div>
        <img className="aboutustabs-child1" alt="" src="/group-2442251.svg" />
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-co-parent">
        <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing `}</div>
        <div className="lorem-ipsum-dolor1">
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
        </div>
        <b className="testimonial">Testimonial</b>
        <div className="group-parent37">
          <img className="group-child46" alt="" src="/group-244226.svg" />
          <img className="group-child47" alt="" src="/group-244225.svg" />
          <b className="b2">1/4</b>
        </div>
        <div className="group-parent38">
          <div className="lorem-ipsum-dolor-sit-amet-parent">
            <div className="lorem-ipsum-dolor2">Lorem ipsum dolor sit amet</div>
            <div className="lorem-ipsum-dolor3">Lorem ipsum dolor sit amet</div>
            <div className="lorem-ipsum-dolor4">Lorem ipsum dolor sit amet</div>
            <b className="lorem-ipsum">Lorem ipsum</b>
            <div className="lorem-ipsum-dolor5">Lorem ipsum dolor</div>
            <b className="b3">“</b>
            <img className="star-icon" alt="" src="/star-1.svg" />
            <img className="group-child48" alt="" src="/star-1.svg" />
            <img className="group-child49" alt="" src="/star-1.svg" />
            <img className="group-child50" alt="" src="/star-1.svg" />
            <img className="group-child51" alt="" src="/star-1.svg" />
            <img className="ellipse-icon" alt="" src="/ellipse-1843@2x.png" />
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-group">
            <div className="lorem-ipsum-dolor2">Lorem ipsum dolor sit amet</div>
            <div className="lorem-ipsum-dolor3">Lorem ipsum dolor sit amet</div>
            <div className="lorem-ipsum-dolor4">Lorem ipsum dolor sit amet</div>
            <b className="lorem-ipsum">Lorem ipsum</b>
            <div className="lorem-ipsum-dolor5">Lorem ipsum dolor</div>
            <b className="b3">“</b>
            <img className="star-icon" alt="" src="/star-1.svg" />
            <img className="group-child48" alt="" src="/star-1.svg" />
            <img className="group-child49" alt="" src="/star-1.svg" />
            <img className="group-child50" alt="" src="/star-1.svg" />
            <img className="group-child51" alt="" src="/star-1.svg" />
            <img className="ellipse-icon" alt="" src="/ellipse-1844@2x.png" />
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-container">
            <div className="lorem-ipsum-dolor2">Lorem ipsum dolor sit amet</div>
            <div className="lorem-ipsum-dolor3">Lorem ipsum dolor sit amet</div>
            <div className="lorem-ipsum-dolor4">Lorem ipsum dolor sit amet</div>
            <b className="lorem-ipsum">Lorem ipsum</b>
            <div className="lorem-ipsum-dolor5">Lorem ipsum dolor</div>
            <b className="b3">“</b>
            <img className="star-icon" alt="" src="/star-1.svg" />
            <img className="group-child48" alt="" src="/star-1.svg" />
            <img className="group-child49" alt="" src="/star-1.svg" />
            <img className="group-child50" alt="" src="/star-1.svg" />
            <img className="group-child51" alt="" src="/star-1.svg" />
            <img className="ellipse-icon" alt="" src="/ellipse-1845@2x.png" />
          </div>
        </div>
      </div>
      <div className="group-parent39">
        <div className="rectangle-parent18">
          <div className="group-child64" />
          <b className="case-studies">Case Studies</b>
          <b className="b6">40+</b>
        </div>
        <div className="rectangle-parent19">
          <div className="group-child64" />
          <b className="innovations">Innovations</b>
          <b className="b6">25+</b>
        </div>
        <div className="rectangle-parent20">
          <div className="group-child64" />
          <b className="projects">Projects</b>
          <b className="b8">100+</b>
        </div>
      </div>
      <div className="chatbot1">
        <div className="lucidas-chat-bot-group">
          <div className="lucidas-chat-bot1">Lucida’s Chat bot</div>
          <img className="avatar-icon1" alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className="divnavbar-group">
        <div className="divnavbar1">
          <div className="list-item-link5">
            <b className="home1" onClick={onHomeTextClick}>
              Home
            </b>
          </div>
          <div className="list-item-link6">
            <div className="about-us1" onClick={onAboutUSTextClick}>
              About US
            </div>
            <div className="list-item-link-item" />
          </div>
          <div className="list-item-link7">
            <b className="solutions1" onClick={onSOLUTIONSTextClick}>
              SOlutions
            </b>
          </div>
          <div className="list-item-link8">
            <b className="resources1" onClick={onRESOURCESTextClick}>
              Resources
            </b>
          </div>
          <div className="list-item-link9">
            <b className="contact1">Contact</b>
          </div>
        </div>
        <img className="link-logopng1" alt="" src="/link--logopng@2x.png" />
      </div>
    </div>
  );
};

export default LucidaAboutUs;
