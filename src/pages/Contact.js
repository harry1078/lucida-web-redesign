import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

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

  return (
    <div className="contact7">
      <div className="rectangle-parent25">
        <div className="group-child71" />
        <img
          className="undraw-interview-re-e5jn-1-icon"
          alt=""
          src="/undraw-interview-re-e5jn-11.svg"
        />
        <div className="the-most-interesting">
          The most interesting, futuristic digital solutions that you can choose
          from us
        </div>
        <i className="get-in-touch-container">
          <span>
            <span>Get in touch for the niche solutions provided by</span>
            <span className="span4">{` `}</span>
          </span>
          <span className="lucida-technologies">LUCIDA TECHNOLOGIES</span>
        </i>
        <div className="group-parent40">
          <div className="rectangle-parent26">
            <div className="group-child72" />
            <b className="phone">Phone*</b>
          </div>
          <div className="rectangle-parent27">
            <div className="group-child72" />
            <b className="phone">Email*</b>
          </div>
          <div className="rectangle-parent28">
            <div className="group-child74" />
            <b className="phone">Message</b>
            <b className="optional">(optional)</b>
          </div>
          <div className="rectangle-parent29">
            <div className="group-child72" />
            <b className="phone">Name*</b>
          </div>
        </div>
        <div className="rectangle-parent30">
          <div className="group-child76" />
          <b className="join-us">Join Us</b>
        </div>
      </div>
      <div className="lucida-considers-product-devel-parent">
        <div className="lucida-considers-product">
          Lucida considers product development in niche technologies as its main
          focus areas.
        </div>
        <div className="we-leverage-our-container">
          <p className="we-leverage-our">&nbsp;</p>
          <p className="we-leverage-our">
            We leverage our industry and domain expertise combined with our
            technology prowess, delivery focus and quality of work to help our
            clients ideate and develop their dream products
          </p>
        </div>
        <div className="carrerscomponent">
          <div className="group-parent41">
            <div className="rectangle-parent31">
              <img
                className="group-child77"
                alt=""
                src="/rectangle-1482324@2x.png"
              />
              <div className="group-child78" />
              <b className="uiux-design">UI/UX Design</b>
            </div>
            <div className="rectangle-parent32">
              <img
                className="group-child79"
                alt=""
                src="/rectangle-1482325@2x.png"
              />
              <div className="group-child78" />
              <b className="full-stack">Full stack</b>
            </div>
            <div className="rectangle-parent33">
              <img
                className="group-child79"
                alt=""
                src="/rectangle-1482326@2x.png"
              />
              <div className="group-child78" />
              <b className="big-data">Big Data</b>
            </div>
            <div className="rectangle-parent34">
              <img
                className="group-child79"
                alt=""
                src="/rectangle-1482327@2x.png"
              />
              <div className="group-child78" />
              <b className="artificial-intelligence">Artificial Intelligence</b>
            </div>
          </div>
          <img
            className="carrerscomponent-child"
            alt=""
            src="/group-244212@2x.png"
          />
        </div>
        <img className="group-child85" alt="" src="/rectangle-148242@2x.png" />
        <div className="rectangle-parent35">
          <div className="group-child86" />
          <div className="group-child87" />
          <img className="group-child88" alt="" src="/group-243909.svg" />
          <div className="find-your-designation">Find Your Designation</div>
        </div>
        <div className="categories">Spotlight</div>
        <div className="careers">Careers</div>
      </div>
      <div className="chatbot7">
        <div className="lucidas-chat-bot-parent5">
          <div className="lucidas-chat-bot7">Lucida’s Chat bot</div>
          <img className="avatar-icon7" alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className="divnavbar-parent5">
        <div className="divnavbar7">
          <div className="list-item-link35">
            <b className="home7" onClick={onHomeTextClick}>
              Home
            </b>
          </div>
          <div className="list-item-link36">
            <b className="about-us7" onClick={onAboutUSTextClick}>
              About US
            </b>
          </div>
          <div className="list-item-link37">
            <b className="solutions7" onClick={onSOLUTIONSTextClick}>
              SOlutions
            </b>
          </div>
          <div className="list-item-link38">
            <b className="resources7" onClick={onRESOURCESTextClick}>
              Resources
            </b>
          </div>
          <div className="list-item-link39">
            <div className="contact8">Contact</div>
            <div className="list-item-link-child4" />
          </div>
        </div>
        <img className="link-logopng7" alt="" src="/link--logopng@2x.png" />
      </div>
    </div>
  );
};

export default Contact;
