import "./Offerings.css";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Offerings = () => {
const navigate = useNavigate();
    
 const onPrimaryButtonContainerClick = useCallback(() => {
    navigate("/solutions");
  }, [navigate]);

return(
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
            <img className="group-icon40" alt="" src="/group5.svg" />
          </div>
        </div>
        <div className="image-21-parent">
          <img className="image-21-icon" alt="" src="/image-212@2x.png" />
          <div className="group-parent15">
            <div className="image-video-analysis-platfor-parent">
              <div className="image-video">{`IMAGE & VIDEO ANALYSIS PLATFORM using Gen AI`}</div>
              <img className="group-icon41" alt="" src="/group5.svg" />
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
              <img className="group-icon42" alt="" src="/group5.svg" />
            </div>
            <div className="experience-advanced-text10">
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
      <img className="vector-icon30" alt="" src="/vector41.svg" />
      <div className="explore10">Explore</div>
    </div>
  </div>
)
}
export default Offerings;