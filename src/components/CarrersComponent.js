import "./CarrersComponent.css";

const CarrersComponent = ({ className = "" }) => {
  return (
    <div className={`carrerscomponent ${className}`}>
      <div className="property-1group-244256">
        <div className="group-parent">
          <div className="rectangle-parent">
            <img
              className="group-child"
              alt=""
              src="/rectangle-148232@2x.png"
            />
            <div className="group-item" />
            <b className="uiux-design">UI/UX Design</b>
          </div>
          <div className="rectangle-group">
            <img
              className="group-inner"
              alt=""
              src="/rectangle-148232@2x.png"
            />
            <div className="group-item" />
            <b className="full-stack">Full stack</b>
          </div>
          <div className="rectangle-container">
            <img
              className="group-inner"
              alt=""
              src="/rectangle-148232@2x.png"
            />
            <div className="group-item" />
            <b className="big-data">Big Data</b>
          </div>
          <div className="group-div">
            <img
              className="group-inner"
              alt=""
              src="/rectangle-148232@2x.png"
            />
            <div className="group-item" />
            <b className="artificial-intelligence">Artificial Intelligence</b>
          </div>
        </div>
        <img
          className="property-1group-244256-child"
          alt=""
          src="/group-244212@2x.png"
        />
      </div>
      <div className="property-1frame-244248">
        <div className="group-container">
          <div className="qualifications-parent">
            <div className="qualifications">Qualifications:</div>
            <div className="bachelors-degree-in-container">
              <ul className="bachelors-degree-in-design-h">
                <li className="bachelors-degree-in">
                  Bachelor's degree in Design, Human-Computer Interaction,
                  Computer Science, a related field, or equivalent practical
                  experience.
                </li>
                <li className="bachelors-degree-in">
                  4 years of experience in product design or UX.
                </li>
                <li className="bachelors-degree-in">
                  Experience designing across multiple platforms, and working
                  with technical/design teams to create user flows, wireframes,
                  and building user interface mockups and prototypes.
                </li>
                <li className="bachelors-degree-in">
                  A portfolio highlighting multiple projects and your direct
                  contributions. 
                </li>
              </ul>
            </div>
          </div>
          <img className="buttons-icon" alt="" src="/buttons@2x.png" />
          <div className="group-parent1">
            <div className="uxui-designer-parent">
              <div className="uxui-designer">UX/UI Designer</div>
              <div className="bangalore-parent">
                <div className="bangalore">Bangalore</div>
                <img className="icon" alt="" src="/icon.svg" />
              </div>
              <img className="vector-icon" alt="" src="/vector.svg" />
            </div>
            <img className="vector-icon1" alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className="property-1frame-244248-child" />
      </div>
      <div className="property-1frame-244249">
        <div className="group-parent2">
          <div className="group-parent3">
            <div className="qualifications-group">
              <div className="qualifications">Qualifications:</div>
              <div className="bachelors-degree-in-container1">
                <ul className="bachelors-degree-in-design-h">
                  <li className="bachelors-degree-in">
                    Bachelor's degree in Design, Human-Computer Interaction,
                    Computer Science, a related field, or equivalent practical
                    experience.
                  </li>
                  <li className="bachelors-degree-in">
                    4 years of experience in product design or UX.
                  </li>
                  <li className="bachelors-degree-in">
                    Experience designing across multiple platforms, and working
                    with technical/design teams to create user flows,
                    wireframes, and building user interface mockups and
                    prototypes.
                  </li>
                  <li className="bachelors-degree-in">
                    A portfolio highlighting multiple projects and your direct
                    contributions. 
                  </li>
                </ul>
              </div>
            </div>
            <div className="about-the-job-parent">
              <div className="qualifications">About the Job:</div>
              <div className="designers-take-complex-container">
                <p className="designers-take-complex">
                  Designers take complex tasks and make them intuitive and
                  easy-to-use for billions of people around the globe.
                  Throughout the design process—from creating user flows and
                  wireframes to building user interface mockups and
                  prototypes—you’ll envision how people will experience our
                  products, and bring that vision to life in a way that feels
                  inspired, refined, and even magical.
                </p>
              </div>
            </div>
            <div className="responsibilities-parent">
              <div className="qualifications">Responsibilities:</div>
              <div className="collaborate-with-product-container">
                <ul className="bachelors-degree-in-design-h">
                  <li className="bachelors-degree-in">
                    Collaborate with product managers, engineers, and
                    cross-functional stakeholders to understand requirements,
                    and provide creative, thoughtful solutions.
                  </li>
                  <li className="bachelors-degree-in">
                    Communicate the user experience at various stages of the
                    design process with wireframes, flow diagrams, storyboards,
                    mockups, and/or high fidelity prototypes.
                  </li>
                  <li className="bachelors-degree-in">
                    Integrate user feedback and business requirements into
                    ongoing product experience updates.
                  </li>
                  <li>
                    Advocate for the prioritization of design centered changes,
                    refinements, and improvements.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img className="buttons-icon1" alt="" src="/buttons@2x.png" />
          <div className="vector-parent">
            <img className="vector-icon2" alt="" src="/vector2.svg" />
            <div className="uxui-designer-parent">
              <div className="uxui-designer">UX/UI Designer</div>
              <div className="bangalore-parent">
                <div className="bangalore">Bangalore</div>
                <img className="icon" alt="" src="/icon.svg" />
              </div>
              <img className="vector-icon" alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
        <div className="property-1frame-244248-child" />
      </div>
    </div>
  );
};

CarrersComponent.propTypes = {
  className: PropTypes.string,
};

export default CarrersComponent;
