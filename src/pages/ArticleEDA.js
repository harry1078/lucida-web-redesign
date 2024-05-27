import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleEDA.css";

const ArticleEDA = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/lucidahome");
  }, [navigate]);

  const onAboutUSTextClick = useCallback(() => {
    navigate("/lucidaaboutus");
  }, [navigate]);

  return (
    <div className="article-eda">
      <div className="lucidas-core7">Articles</div>
      <img
        className="article-eda-child"
        alt=""
        src="/rectangle-148241@2x.png"
      />
      <div className="how-exploratory-data-container">
        <li className="how-exploratory-data-analysis">
          <span className="eda">
            <span className="how">{`
How `}</span>
            <span className="exploratory-data-analysis1">
              Exploratory Data Analysis (EDA)
            </span>
            <span className="span">{` `}</span>
          </span>
          <span className="made-easier-using-chatgpt">
            <span className="span">
              <span className="has-traditionally-been">{`made easier using `}</span>
            </span>
            <span className="chatgpt">
              <span className="exploratory-data-analysis1">ChatGpt</span>
            </span>
            <span>
              <span className="chatgpt">{`?
`}</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="chatgpt">Exploratory Data Analysis (EDA</span>
                <span>{`) is a critical step in the data analysis process, and it involves summarizing and visualizing data to understand its characteristics and identify patterns and insights. While `}</span>
                <span className="eda">EDA</span>
                <span className="has-traditionally-been">{` has traditionally been performed by human data analysts and data scientists, there are several advantages to using AI models like `}</span>
                <span className="eda">ChatGPT</span>
                <span className="has-traditionally-been">{` for `}</span>
                <span className="eda">EDA</span>
              </span>
            </span>
          </li>
        </ul>
        <li className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="eda">Efficiency:</span>
                <span className="has-traditionally-been">{` `}</span>
                <span className="eda">ChatGPT</span>
                <span>{` can rapidly process and analyze large datasets, allowing for quick insights into the data's structure, distribution, and potential anomalies. This can save significant time compared to manual analysis.
`}</span>
              </span>
            </span>
          </li>
        </ul>
        <li className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="eda">Consistency:</span>
                <span>
                  {" "}
                  AI models provide consistent results and don't suffer from
                  human biases or fatigue. They can perform EDA tasks
                  consistently, reducing the risk of human errors in data
                  exploration.
                </span>
              </span>
            </span>
          </li>
        </ul>
        <li className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="eda">Accessibility: ChatGPT</span>
                <span className="has-traditionally-been">{` can make `}</span>
                <span className="eda">EDA</span>
                <span>
                  {" "}
                  more accessible to individuals who may not have in-depth data
                  analysis skills. It can provide insights and visualizations to
                  a broader audience within an organization.
                </span>
              </span>
            </span>
          </li>
        </ul>
        <li className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="eda">Data Exploration at Scale:</span>
                <span className="has-traditionally-been">{` For massive datasets, manual `}</span>
                <span className="eda">EDA</span>
                <span>
                  {" "}
                  can be time-consuming and impractical. AI models can
                  efficiently handle large volumes of data, allowing for a more
                  comprehensive exploration.
                </span>
              </span>
            </span>
          </li>
        </ul>
        <li className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="eda">Automated Data Cleaning:</span>
                <span>
                  {" "}
                  AI models can identify and suggest strategies for handling
                  missing data, outliers, and inconsistencies, streamlining the
                  data cleaning process.
                </span>
              </span>
            </span>
          </li>
        </ul>
        <li className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="eda">Interactive Conversations:</span>
                <span className="has-traditionally-been">{` `}</span>
                <span className="eda">ChatGPT</span>
                <span>{` can engage in interactive conversations to clarify specific data analysis questions or requirements, making it a more dynamic and conversational approach to `}</span>
                <span className="eda">EDA</span>
                <span>.</span>
              </span>
            </span>
          </li>
        </ul>
        <li className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="eda">Natural Language Interpretation:</span>
                <span>
                  {" "}
                  AI can provide natural language explanations for data
                  insights, helping non-technical stakeholders better understand
                  the implications of the data.
                </span>
              </span>
            </span>
          </li>
        </ul>
        <li className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="eda">Continuous Availability: ChatGPT</span>
                <span>
                  {" "}
                  is available 24/7 and can be utilized at any time, making it
                  convenient for organizations with data analysts in different
                  time zones or those needing immediate insights.
                </span>
              </span>
            </span>
          </li>
        </ul>
        <li className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="eda">Data Anomaly Detection:</span>
                <span>
                  {" "}
                  AI models can effectively identify potential anomalies in
                  data, helping in early detection of irregularities that may
                  require further investigation.
                </span>
              </span>
            </span>
          </li>
        </ul>
        <li className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="eda">Scalability: ChatGPT</span>
                <span className="has-traditionally-been">{` can scale `}</span>
                <span className="eda">EDA</span>
                <span>
                  {" "}
                  tasks as needed, making it suitable for both small and large
                  datasets, as well as for real-time data streaming scenarios.
                </span>
              </span>
            </span>
          </li>
        </ul>
        <li className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="eda">Learning from Data:</span>
                <span>
                  {" "}
                  AI models can learn and adapt from the data they analyze,
                  potentially uncovering hidden patterns or insights that may
                  not be apparent through manual analysis.
                </span>
              </span>
            </span>
          </li>
        </ul>
        <li className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </li>
        <ul className="exploratory-data-analysis-eda">
          <li className="how-exploratory-data-analysis">
            <span className="made-easier-using-chatgpt">
              <span>
                <span className="eda">{`Data Exploration Best Practices: `}</span>
                <span className="ai-can-be">
                  AI can be programmed to follow best practices in data
                  exploration, ensuring that standard analysis procedures are
                  consistently applied.
                </span>
              </span>
            </span>
          </li>
        </ul>
        <p className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span className="ai-can-be">{`     In practice, the choice between using `}</span>
              <span className="eda">ChatGPT</span>
              <span className="ai-can-be">{` for EDA and manual coding depends on       `}</span>
            </span>
          </span>
        </p>
        <p className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span className="ai-can-be">{`     the specific needs of the analysis, the size and complexity of the dataset, and the  `}</span>
            </span>
          </span>
        </p>
        <p className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span className="ai-can-be">{`     availability of human expertise. In many cases, a hybrid approach may be most `}</span>
            </span>
          </span>
        </p>
        <p className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span className="ai-can-be">{`     effective, where AI models are used for initial data exploration and automation of `}</span>
            </span>
          </span>
        </p>
        <p className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span className="ai-can-be">{`     routine tasks, while human analysts provide the domain expertise and critical thinking `}</span>
            </span>
          </span>
        </p>
        <p className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span className="ai-can-be">{`     necessary for deeper insights and validation. The key is to leverage the strengths of `}</span>
            </span>
          </span>
        </p>
        <p className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span className="ai-can-be">{`     both approaches to gain the most comprehensive and accurate understanding of the `}</span>
            </span>
          </span>
        </p>
        <p className="how-exploratory-data-analysis">
          <span className="made-easier-using-chatgpt">
            <span>
              <span className="ai-can-be"> data.</span>
            </span>
          </span>
        </p>
      </div>
      <div className="buttons-group">
        <img className="buttons-icon" alt="" src="/buttons2@2x.png" />
        <div className="group-child67" />
      </div>
      <div className="chatbot3">
        <div className="lucidas-chat-bot-parent1">
          <div className="lucidas-chat-bot3">Lucida’s Chat bot</div>
          <img className="avatar-icon3" alt="" src="/avatar@2x.png" />
        </div>
      </div>
      <div className="divnavbar-parent1">
        <div className="divnavbar3">
          <div className="list-item-link15">
            <b className="home3" onClick={onHomeTextClick}>
              Home
            </b>
          </div>
          <div className="list-item-link16">
            <b className="about-us3" onClick={onAboutUSTextClick}>
              About US
            </b>
          </div>
          <div className="list-item-link17">
            <b className="solutions3">SOlutions</b>
          </div>
          <div className="list-item-link18">
            <div className="resources3">Resources</div>
            <div className="ellipse-div" />
          </div>
          <div className="list-item-link19">
            <b className="contact3">Contact</b>
          </div>
        </div>
        <img className="link-logopng3" alt="" src="/link--logopng@2x.png" />
      </div>
    </div>
  );
};

export default ArticleEDA;
