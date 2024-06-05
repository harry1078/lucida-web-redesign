import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LucidaResources.css";

const LucidaResources = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/articleeda");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/articleeda");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/articlehealthcare");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/articlehealthcare");
  }, [navigate]);

  const onFrameContainer22Click = useCallback(() => {
    navigate("/articlebiai");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/articlebiai");
  }, [navigate]);

  const onFrameContainer32Click = useCallback(() => {
    navigate("/articlellm");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/articlellm");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUSTextClick = useCallback(() => {
    navigate("/lucidaaboutus");
  }, [navigate]);

  const onSOLUTIONSTextClick = useCallback(() => {
    navigate("/solutions");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="lucida-resources">
      <div className="frame-parent1">
        <div className="rectangle-parent21" onClick={onFrameContainerClick}>
          <img
            className="frame-child13"
            alt=""
            src="/rectangle-148239@2x.png"
          />
          <div className="exploratory-data-analysiseda">
            Exploratory Data Analysis(EDA) using chatGPT
          </div>
          <div className="group-wrapper2">
            <div className="exploratory-data-analysis-eda-wrapper">
              <div className="exploratory-data-analysis-eda-wrapper">
                <div className="exploratory-data-analysis">
                  Exploratory Data Analysis (EDA) is a critical step in the data
                  analysis process..
                </div>
              </div>
            </div>
          </div>
          <div className="frame-child14" />
          <div className="read-more-wrapper1" onClick={onFrameContainer2Click}>
            <div className="read-more3">Read more</div>
          </div>
        </div>
        <div className="rectangle-parent22" onClick={onFrameContainer1Click}>
          <img
            className="frame-child13"
            alt=""
            src="/rectangle-148240@2x.png"
          />
          <div className="generative-ai-in">
            Generative AI in healthcare industries
          </div>
          <div className="group-wrapper2">
            <div className="exploratory-data-analysis-eda-wrapper">
              <div className="exploratory-data-analysis-eda-wrapper">
                <div className="exploratory-data-analysis">
                  Generative AI is playing an increasingly important role in
                  healthcare, revolution...
                </div>
              </div>
            </div>
          </div>
          <div className="frame-child14" />
          <div className="read-more-wrapper1" onClick={onFrameContainer3Click}>
            <div className="read-more3">Read more</div>
          </div>
        </div>
        <div className="rectangle-parent23" onClick={onFrameContainer22Click}>
          <img
            className="frame-child13"
            alt=""
            src="/rectangle-1482401@2x.png"
          />
          <div className="how-bi">{`How BI & AI are shaping the future of Business`}</div>
          <div className="group-wrapper2">
            <div className="exploratory-data-analysis-eda-wrapper">
              <div className="exploratory-data-analysis-eda-wrapper">
                <div className="exploratory-data-analysis">
                  In the rapidly evolving landscape of business technology, two
                  acronym...
                </div>
              </div>
            </div>
          </div>
          <div className="frame-child14" />
          <div className="read-more-wrapper1" onClick={onFrameContainer4Click}>
            <div className="read-more3">Read more</div>
          </div>
        </div>
        <div className="rectangle-parent24" onClick={onFrameContainer32Click}>
          <img
            className="frame-child13"
            alt=""
            src="/rectangle-1482402@2x.png"
          />
          <div className="exploring-the-realm">
            Exploring the Realm of Large Language Models
          </div>
          <div className="group-wrapper2">
            <div className="exploratory-data-analysis-eda-wrapper">
              <div className="exploratory-data-analysis-eda-wrapper">
                <div className="exploratory-data-analysis">
                  Large Language Models (LLMs) stand at the forefront of
                  artificial...
                </div>
              </div>
            </div>
          </div>
          <div className="frame-child14" />
          <div className="read-more-wrapper1" onClick={onFrameContainer5Click}>
            <div className="read-more3">Read more</div>
          </div>
        </div>
      </div>
      <div className="lucidas-core6">Articles</div>
      <div className="chatbot2">
        <div className="lucidas-chat-bot-container">
          <div className="lucidas-chat-bot2">Lucida’s Chat bot</div>
          <img className="avatar-icon2" alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className="divnavbar-container">
        <div className="divnavbar2">
          <div className="list-item-link10">
            <b className="home2" onClick={onHomeTextClick}>
              Home
            </b>
          </div>
          <div className="list-item-link11">
            <b className="about-us2" onClick={onAboutUSTextClick}>
              About US
            </b>
          </div>
          <div className="list-item-link12">
            <b className="solutions2" onClick={onSOLUTIONSTextClick}>
              SOlutions
            </b>
          </div>
          <div className="list-item-link13">
            <div className="resources2">Resources</div>
            <div className="list-item-link-inner" />
          </div>
          <div className="list-item-link14">
            <b className="contact2" onClick={onContactTextClick}>
              Contact
            </b>
          </div>
        </div>
        <img className="link-logopng2" alt="" src="/link--logopng@2x.png" />
      </div>
    </div>
  );
};

export default LucidaResources;
