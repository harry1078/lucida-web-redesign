import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Solutions.css";

const Solutions = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/lucidahome");
  }, [navigate]);

  const onAboutUSTextClick = useCallback(() => {
    navigate("/lucidaaboutus");
  }, [navigate]);

  const onRESOURCESTextClick = useCallback(() => {
    navigate("/lucidaresources");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="solutions8">
      <div className="offeringsandservices">
        <div className="line-container">
          <div className="group-child89" />
          <div className="group-wrapper10">
            <div className="frame-wrapper1">
              <div className="offerings-group">
                <b className="offerings1">Offerings</b>
                <div className="frame-child21" />
              </div>
            </div>
          </div>
          <div className="services1">Services</div>
        </div>
        <div className="group-parent42">
          <div className="llm-text-analysis-using-gen-ai-group">
            <i className="llm-text-analysis1">LLM TEXT ANALYSIS using Gen AI</i>
            <div className="experience-advanced-text1">
              Experience advanced text analytics with human-like capabilities.
            </div>
            <div className="structured-and-unstructured">
              Structured and unstructured text formats present an abundant
              source of rich information, offering vast potential for insights
              and analysis. Our product, Epiphany, harnesses this potential by
              utilizing a powerful and flexible analytics framework, powered by
              large language models (LLMs). Epiphany excels at processing and
              interpreting diverse data types, from well-organized databases to
              free-form text such as emails, reports, and social media posts. By
              leveraging LLMs, Epiphany can comprehend context, identify
              patterns, and extract meaningful insights from both structured and
              unstructured data. This enables businesses to make informed
              decisions, uncover hidden trends, and gain a deeper understanding
              of their data, driving innovation and growth.
            </div>
            <div className="image-22-group">
              <img className="image-22-icon1" alt="" src="/image-22@2x.png" />
              <b className="b9">1</b>
            </div>
            <img className="image-24-icon" alt="" src="/image-24@2x.png" />
          </div>
          <div className="image-video-analytics-using-parent">
            <i className="image-video1">{`IMAGE & VIDEO ANALYTICS using Gen AI`}</i>
            <div className="unlock-value-for1">
              Unlock value for your enterprise with advanced image analysis.
            </div>
            <div className="enterprises-often-possess">
              {" "}
              Enterprises often possess unstructured datasets in the form of
              images and videos, containing hidden insights of significant
              value. Lucida’s Envisage Image Analysis Platform leverages large
              language models (LLMs) and advanced image analytics to extract,
              analyse, and process information from these visual data sources.
              This powerful platform enables enterprises to capitalize on
              various applications, including threat detection, annotation,
              summarization, and object tracking. By mining visual data, the
              Envisage Image Analysis Platform provides updated information and
              actionable triggers, aiding in informed decision-making.
            </div>
            <div className="image-21-container">
              <img className="image-21-icon2" alt="" src="/image-21@2x.png" />
              <b className="b10">2</b>
            </div>
            <img className="image-23-icon" alt="" src="/image-23@2x.png" />
          </div>
          <div className="designgeneratedeployeffortl-group">
            <i className="designgeneratedeployeffortl1">
              DESIGN.GENERATE.DEPLOY.EFFORTLESSLY
            </i>
            <div className="effortlessly-design-generate1">
              Effortlessly design, generate, and deploy solutions that elevate
              your business to new heights.
            </div>
            <div className="lucida-offers-a">
              Lucida offers a groundbreaking platform that utilizes GenAI for
              the automated coding of user interfaces (UI). This innovative
              solution simplifies and accelerates the development process by
              leveraging advanced AI algorithms to generate high-quality,
              responsive UI code automatically. Lucida's platform analyzes
              design inputs and user requirements, transforming them into
              functional and aesthetically pleasing interfaces without the need
              for extensive manual coding. This automation not only reduces
              development time and costs but also ensures consistency and
              precision in the final product. By integrating GenAI into the UI
              development process, Lucida empowers enterprises to rapidly
              create, test, and deploy user interfaces, enhancing user
              experiences and driving digital transformation with unmatched
              efficiency and creativity.
            </div>
            <div className="group-parent43">
              <div className="image-21-parent1">
                <img
                  className="image-21-icon3"
                  alt=""
                  src="/image-211@2x.png"
                />
                <div className="auto-ui-code1">Auto UI Code Gen</div>
              </div>
              <b className="b11">3</b>
            </div>
            <img className="image-23-icon1" alt="" src="/image-231@2x.png" />
          </div>
        </div>
      </div>
      <div className="chatbot8">
        <div className="lucidas-chat-bot-parent6">
          <div className="lucidas-chat-bot8">Lucida’s Chat bot</div>
          <img className="avatar-icon8" alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className="divnavbar-parent6">
        <div className="divnavbar8">
          <div className="list-item-link40">
            <b className="home8" onClick={onHomeTextClick}>
              Home
            </b>
          </div>
          <div className="list-item-link41">
            <b className="about-us8" onClick={onAboutUSTextClick}>
              About US
            </b>
          </div>
          <div className="list-item-link42">
            <div className="solutions9">SOlutions</div>
            <div className="list-item-link-child5" />
          </div>
          <div className="list-item-link43">
            <b className="resources8" onClick={onRESOURCESTextClick}>
              Resources
            </b>
          </div>
          <div className="list-item-link44">
            <b className="contact9" onClick={onContactTextClick}>
              Contact
            </b>
          </div>
        </div>
        <img className="link-logopng8" alt="" src="/link--logopng@2x.png" />
      </div>
    </div>
  );
};

export default Solutions;
