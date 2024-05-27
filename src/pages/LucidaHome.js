import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LucidaHome.css";

const LucidaHome = () => {
  const navigate = useNavigate();

  const onPrimaryButtonContainerClick = useCallback(() => {
    navigate("/solutions");
  }, [navigate]);

  const onContactUSClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/lucidahome");
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

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="lucida-home">
      <img className="lucida-home-child" alt="" src="/frame-2442161@2x.png" />
      <div className="group-parent">
        <div className="group-container">
          <div className="lucidas-core-missions-and-parent">
            <div className="lucidas-core">
              The Future of Digital Solutions is Here
              The Future of Digital Solutions is Here
            </div>
            <b className="contact-us-2">Services</b>
          </div>
          <div className="contact-us-21">See All</div>
        </div>
        <div className="frame-parent">
          <div className="rectangle-parent">
            <div className="frame-child" />
            <img className="group-icon" alt="" src="/group51.svg" />
            <div className="next-gen-technology">
              Next Gen Technology Services
            </div>
            <div className="group-div">
              <div className="group-parent1">
                <img className="group-child" alt="" src="/group-2442341.svg" />
                <div className="big-data-analytics-and-aiml-wrapper">
                  <div className="big-data-analytics">
                    Big Data Analytics and AI/ML
                  </div>
                </div>
              </div>
              <div className="group-parent2">
                <img className="group-child" alt="" src="/group-2442341.svg" />
                <div className="big-data-analytics-and-aiml-wrapper">
                  <div className="big-data-analytics">
                    AI automated Product Development
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-item" />
            <div className="read-more-wrapper">
              <div className="read-more">Read more</div>
            </div>
          </div>
          <div className="rectangle-group">
            <div className="frame-child" />
            <img className="vector-icon" alt="" src="/vector.svg" />
            <div className="tool-suite-for">Tool Suite for Smart Future</div>
            <div className="frame-item" />
            <div className="group-parent3">
              <div className="group-parent4">
                <img className="group-inner" alt="" src="/group-2442341.svg" />
                <div className="genai-epiphany-wrapper">
                  <div className="genai-epiphany">GenAI - Epiphany</div>
                </div>
              </div>
              <div className="group-parent5">
                <img className="group-inner" alt="" src="/group-2442341.svg" />
                <div className="genai-epiphany-wrapper">
                  <div className="genai-epiphany">GenAI -Chatbot</div>
                </div>
              </div>
              <div className="group-parent6">
                <img className="group-inner" alt="" src="/group-2442341.svg" />
                <div className="genai-epiphany-wrapper">
                  <div className="genai-epiphany">GenAI -envisage</div>
                </div>
              </div>
            </div>
            <div className="read-more-wrapper">
              <div className="read-more">Read more</div>
            </div>
          </div>
          <div className="rectangle-container">
            <div className="frame-child" />
            <img className="vector-icon1" alt="" src="/vector1.svg" />
            <div className="consulting-and-contracting">
              Consulting and Contracting
            </div>
            <div className="frame-item" />
            <div className="group-parent7">
              <div className="group-parent8">
                <img className="group-child" alt="" src="/group-2442341.svg" />
                <div className="big-data-analytics-and-aiml-wrapper">
                  <div className="big-data-analytics">
                    Expertise and Specialized Knowledge
                  </div>
                </div>
              </div>
              <div className="group-parent9">
                <img className="group-child4" alt="" src="/group-2442341.svg" />
                <div className="flexibility-and-scalability-wrapper">
                  <div className="big-data-analytics">
                    Flexibility and Scalability
                  </div>
                </div>
              </div>
              <div className="group-parent10">
                <img className="group-child5" alt="" src="/group-2442341.svg" />
                <div className="cost-effective-solutions-wrapper">
                  <div className="cost-effective-solutions">
                    Cost-Effective Solutions
                  </div>
                </div>
              </div>
            </div>
            <div className="read-more-wrapper">
              <div className="read-more">Read more</div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-parent11">
        <div className="group-wrapper">
          <div className="build-your-vision-product-with-parent">
            <div className="build-your-vision">
              Build your vision product with our cutting edge solutions and
              technologies
            </div>
            <b className="lucidas-core1">Your Business.</b>
            <b className="lucidas-core2">Our Solutions.</b>
          </div>
        </div>
        <div className="rectangle-parent1">
          <img
            className="rectangle-icon"
            alt=""
            src="/rectangle-148197@2x.png"
          />
          <div className="rectangle-parent2">
            <div className="group-child6" />
            <img className="vector-icon2" alt="" src="/vector2.svg" />
            <div className="play-video">Play Video</div>
          </div>
        </div>
      </div>
      <div className="howsolutionscanhelp">
        <div className="group-parent12">
          <div className="lucidas-core-missions-and-group">
            <b className="how-to-choose">How Our Solutions</b>
            <b className="to-your-business">Can Help You!!</b>
          </div>
          <div className="line-parent">
            <div className="group-child7" />
            <div className="group-frame">
              <div className="frame-wrapper">
                <div className="offerings-parent">
                  <b className="offerings">Offerings</b>
                  <div className="frame-child2" />
                </div>
              </div>
            </div>
            <div className="services">Services</div>
          </div>
        </div>
        <div className="group-parent13">
          <div className="group-wrapper1">
            <div className="frame-wrapper">
              <div className="image-22-parent">
                <img className="image-22-icon" alt="" src="/image-221@2x.png" />
                <div className="llm-text-analysis-using-gen-ai-parent">
                  <div className="llm-text-analysis">
                    LLM TEXT ANALYSIS using Gen AI
                  </div>
                  <div className="experience-advanced-text">
                    Experience advanced text analytics with human-like
                    capabilities.
                  </div>
                  <img className="group-icon1" alt="" src="/group5.svg" />
                </div>
              </div>
              <div className="image-21-parent">
                <img className="image-21-icon" alt="" src="/image-212@2x.png" />
                <div className="group-parent15">
                  <div className="image-video-analysis-platfor-parent">
                    <div className="image-video">{`IMAGE & VIDEO ANALYSIS PLATFORM using Gen AI`}</div>
                    <img className="group-icon2" alt="" src="/group5.svg" />
                  </div>
                  <div className="unlock-value-for">
                    Unlock value for your enterprise with advanced image
                    analysis.
                  </div>
                </div>
              </div>
              <div className="group-parent16">
                <div className="image-21-group">
                  <img
                    className="image-21-icon1"
                    alt=""
                    src="/image-213@2x.png"
                  />
                  <div className="auto-ui-code">Auto UI Code Gen</div>
                </div>
                <div className="group-parent17">
                  <div className="image-video-analysis-platfor-parent">
                    <div className="designgeneratedeployeffortl">
                      DESIGN.GENERATE.DEPLOY.EFFORTLESSLY
                    </div>
                    <img className="group-icon3" alt="" src="/group5.svg" />
                  </div>
                  <div className="experience-advanced-text">
                    Effortlessly design, generate, and deploy solutions that
                    elevate your business to new heights.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="group-child8" alt="" src="/group-244086.svg" />
          <div className="group-child9" />
          <div
            className="primary-button"
            onClick={onPrimaryButtonContainerClick}
          >
            <img className="vector-icon3" alt="" src="/vector41.svg" />
            <div className="explore">Explore</div>
          </div>
        </div>
      </div>
      <div className="how-our-solutions-parent">
        <b className="how-our-solutions">Check Out Our Case Studies</b>
        <div className="group-parent18">
          <div className="rectangle-parent3">
            <div className="group-child10" />
            <div className="speechscribe-parent">
              <b className="speechscribe">Speechscribe</b>
              <div className="speech-to-script">
                Speech to Script, Powered by AI
              </div>
            </div>
          </div>
          <div className="rectangle-parent4">
            <div className="group-child11" />
            <div className="text-duo-parent">
              <b className="text-duo">Text Duo</b>
              <div className="intelligent-insights-summariz">
                Intelligent Insights: Summarize and Extract, Effortlessly
              </div>
            </div>
          </div>
          <div className="rectangle-parent5">
            <div className="group-child12" />
            <div className="optiscan-parent">
              <b className="optiscan">OptiScan</b>
              <div className="text-discovery-powered">
                Text Discovery, Powered by AI Dialogue
              </div>
            </div>
          </div>
          <div className="rectangle-parent6">
            <div className="group-child13" />
            <div className="senti-mentify-parent">
              <b className="senti-mentify">Senti-Mentify</b>
              <div className="emotional-intelligence-elevat">
                Emotional Intelligence, Elevated by AI
              </div>
            </div>
          </div>
          <div className="rectangle-parent7">
            <div className="group-child14" />
            <div className="traffic-surveillance-system-parent">
              <b className="traffic-surveillance-system">
                Traffic Surveillance System
              </b>
              <div className="ai-powered-traffic-transparenc">
                AI-Powered Traffic Transparency, Through CCTV Lenses
              </div>
            </div>
          </div>
          <div className="rectangle-parent8">
            <div className="group-child15" />
            <div className="pnid-parent">
              <b className="pnid">PnID</b>
              <div className="pid-automation-elevated">{`P&ID Automation, Elevated by AI Vision`}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-our-solutions-group">
        <b className="how-our-solutions1">Partners we work with</b>
        <div className="image-13-parent">
          <img className="image-13-icon" alt="" src="/image-131@2x.png" />
          <img className="image-18-icon" alt="" src="/image-181@2x.png" />
          <img className="image-19-icon" alt="" src="/image-191@2x.png" />
        </div>
      </div>
      <div className="howtochoosesolution">
        <div className="group-parent19">
          <div className="how-to-choose-a-perfect-soluti-parent">
            <b className="how-to-choose">How to Choose a perfect solution</b>
            <b className="to-your-business">To Your Business</b>
          </div>
          <div className="when-it-comes">
            When it comes to choosing the perfect solution for your business,
            it's essential to take a comprehensive approach that aligns with
            your unique needs and goals. At Lucida Technologies, we understand
            that every business is different, and that's why we offer
            personalized consultations to help you find the right fit. We
            believe in building long-lasting partnerships with our clients.
          </div>
          <div className="buttons">
            <button className="contactus" onClick={onContactUSClick}>
              <h2 className="contact-us">Contact Us</h2>
            </button>
            <button className="requestdemo">
              <h2 className="request-demo">Request Demo</h2>
            </button>
          </div>
        </div>
        <img
          className="howtochoosesolution-child"
          alt=""
          src="/rectangle-1482161@2x.png"
        />
        <div className="howtochoosesolution-item" />
      </div>
      <div className="group-parent20">
        <div className="frame-group">
          <div className="vector-parent">
            <img className="frame-child3" alt="" src="/rectangle-1482381.svg" />
            <div className="group-parent21">
              <div className="group-parent22">
                <img className="group-child16" alt="" src="/group-244230.svg" />
                <img className="group-child17" alt="" src="/vector11.svg" />
                <img className="group-child18" alt="" src="/vector11.svg" />
              </div>
              <div className="create-strategy-based-on-organ-wrapper">
                <div className="create-strategy-based-container">
                  <p className="create-strategy-based">
                    Create strategy based on organization current state
                  </p>
                  <p className="create-strategy-based">&nbsp;</p>
                  <p className="create-strategy-based">
                    Set goals and success criteria for transformation journey
                  </p>
                  <p className="create-strategy-based">&nbsp;</p>
                  <p className="create-strategy-based">{`Identify initiatives for maximum impact `}</p>
                </div>
              </div>
            </div>
            <div className="strategy-goals-parent">
              <div className="strategy-goals">{`Strategy & Goals`}</div>
              <b className="phase-01">Phase 01</b>
            </div>
            <img className="frame-child4" alt="" src="/group-244244.svg" />
          </div>
          <div className="vector-group">
            <img className="frame-child5" alt="" src="/rectangle-1482381.svg" />
            <div className="group-parent23">
              <div className="group-parent24">
                <img className="group-child19" alt="" src="/group-244230.svg" />
                <img className="group-child20" alt="" src="/group-244231.svg" />
                <img className="group-child21" alt="" src="/group-244232.svg" />
              </div>
              <div className="prioritize-and-identify-container">
                <p className="create-strategy-based">
                  Prioritize and identify best fit use cases based on target
                  business state
                </p>
                <p className="create-strategy-based">&nbsp;</p>
                <p className="create-strategy-based">
                  Execute PoCs to verify solutions and quantify return on
                  investments
                </p>
                <p className="create-strategy-based">&nbsp;</p>
                <p className="create-strategy-based">
                  Set up organizational change management team to evangelize
                  digital initiatives
                </p>
              </div>
            </div>
            <div className="solutions-and-priorities-parent">
              <div className="strategy-goals">Solutions and Priorities</div>
              <b className="phase-02">Phase 02</b>
            </div>
            <img className="frame-child4" alt="" src="/group-2442441.svg" />
          </div>
          <div className="vector-container">
            <img className="frame-child7" alt="" src="/rectangle-1482381.svg" />
            <div className="plan-initiatives-parent">
              <div className="plan-initiatives">Plan Initiatives</div>
              <b className="phase-03">Phase 03</b>
            </div>
            <div className="group-parent25">
              <img className="group-child22" alt="" src="/group-244233.svg" />
              <div className="create-a-roadmap-container">
                <p className="create-strategy-based">{`Create a roadmap for the rollout of initiatives `}</p>
                <p className="create-strategy-based">{`
Identify investment needs and prioritize spend based on organizational priorities and goals`}</p>
                <p className="create-strategy-based">&nbsp;</p>
                <p className="create-strategy-based">
                  Identify dependencies within organization for rollout
                </p>
              </div>
            </div>
            <img className="frame-child8" alt="" src="/group-244246.svg" />
          </div>
          <div className="frame-div">
            <img className="frame-child7" alt="" src="/rectangle-1482381.svg" />
            <div className="execute-solutions-parent">
              <div className="strategy-goals">Execute Solutions</div>
              <b className="phase-04">Phase 04</b>
            </div>
            <div className="group-parent26">
              <div className="group-parent27">
                <img className="group-child23" alt="" src="/vector11.svg" />
                <img
                  className="group-child24"
                  alt=""
                  src="/group-2442311.svg"
                />
                <img
                  className="group-child25"
                  alt=""
                  src="/group-2442321.svg"
                />
              </div>
              <div className="build-out-initiativesuse-container">
                <p className="build-out-initiativesuse">
                  Build out initiatives/use cases as per plan
                </p>
                <p className="create-strategy-based">&nbsp;</p>
                <p className="create-strategy-based">{`Provide high level guidance and monitoring `}</p>
                <p className="create-strategy-based">
                  Ensure support framework in place to enable execution of
                  solutions
                </p>
              </div>
            </div>
            <img className="frame-child10" alt="" src="/group-244247.svg" />
          </div>
          <div className="vector-parent1">
            <img className="frame-child7" alt="" src="/rectangle-1482381.svg" />
            <div className="measure-success-parent">
              <div className="measure-success">Measure Success</div>
              <b className="phase-01">Phase 05</b>
            </div>
            <div className="group-parent28">
              <div className="group-parent29">
                <img className="group-child23" alt="" src="/vector11.svg" />
                <img
                  className="group-child27"
                  alt=""
                  src="/group-2442322.svg"
                />
              </div>
              <div className="ensure-initiatives-achieve-container">
                <p className="create-strategy-based">
                  Ensure initiatives achieve success and meet the objectives
                  they were set out to achieve
                </p>
                <p className="create-strategy-based">&nbsp;</p>
                <p className="create-strategy-based">{`Continuous change management to ensure initiatives become business as usual `}</p>
              </div>
            </div>
            <img className="frame-child12" alt="" src="/group-244248.svg" />
          </div>
        </div>
        <div className="our-approach-to-container">
          <span>
            <b>Our approach to</b>
            <b className="b">{` `}</b>
          </span>
          <b className="digital-transformation">digital transformation</b>
        </div>
      </div>
      <div className="buttons-parent">
        <div className="buttons1">
          <div className="primary-button1">
            <img className="vector-icon3" alt="" src="/vector8.svg" />
            <div className="contact-us1">Get Started</div>
          </div>
          <div className="rectangle-parent9">
            <div className="group-child28" />
            <div className="search-here">Search here..</div>
            <div className="rectangle-parent10">
              <div className="group-child29" />
              <img className="vector-icon5" alt="" src="/vector9.svg" />
            </div>
          </div>
        </div>
        <div className="at-lucida-we-container">
          <p className="create-strategy-based">
            At Lucida, we understand that digital transformation is more than
            just implementing new technologies. It's a holistic approach that
            requires a deep understanding of your business, your customers, and
            the challenges you face. Our team of experts work closely with you
            to develop a tailored digital transformation strategy that aligns
            with your organizational goals and objectives.
          </p>
          <p className="create-strategy-based">&nbsp;</p>
          <p className="venture-on-your">
            Venture  on your digital transformation journey with Lucida, the
            catalyst that will propel your business into a future of endless
            possibilities.
          </p>
        </div>
        <div className="the-impetus-for-container">
          <span>{`The impetus for embarking on your `}</span>
          <span className="digital-transformation1">
            <span>digital transformation</span>
            <span>{` `}</span>
          </span>
          <span>
            <span>voyage.</span>
          </span>
        </div>
        <div className="group-child30" />
      </div>
      <div className="chatbot">
        <div className="lucidas-chat-bot-parent">
          <div className="lucidas-chat-bot">Lucida’s Chat bot</div>
          <img className="avatar-icon" alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className="divnavbar-parent">
        <div className="divnavbar">
          <div className="list-item-link">
            <div className="home" onClick={onHomeTextClick}>
              Home
            </div>
            <div className="list-item-link-child" />
          </div>
          <div className="list-item-link1">
            <b className="about-us" onClick={onAboutUSTextClick}>
              About US
            </b>
          </div>
          <div className="list-item-link2">
            <b className="solutions" onClick={onSOLUTIONSTextClick}>
              SOlutions
            </b>
          </div>
          <div className="list-item-link3">
            <b className="resources" onClick={onRESOURCESTextClick}>
              Resources
            </b>
          </div>
          <div className="list-item-link4">
            <b className="contact" onClick={onContactTextClick}>
              Contact
            </b>
          </div>
        </div>
        <img className="link-logopng" alt="" src="/link--logopng@2x.png" />
      </div>
    </div>
  );
};

export default LucidaHome;
