import "./HowTochooseSolution.css";

const HowTochooseSolution = ({ className = "" }) => {
  return (
    <div className={`howtochoosesolution ${className}`}>
      <div className="property-1group-244208">
        <div className="group-parent11">
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
            <button className="contactus">
              <h2 className="contact-us">Contact Us</h2>
            </button>
            <button className="requestdemo">
              <h2 className="request-demo">Request Demo</h2>
            </button>
          </div>
        </div>
        <img
          className="property-1group-244208-child"
          alt=""
          src="/rectangle-148216@2x.png"
        />
        <div className="property-1group-244208-item" />
      </div>
      <div className="property-1group-244209">
        <div className="group-parent11">
          <div className="how-to-choose-a-perfect-soluti-parent">
            <b className="how-to-choose">How to Choose a perfect solution</b>
            <b className="to-your-business">To Your Business</b>
          </div>
          <div className="group-parent13">
            <div className="rectangle-parent1">
              <div className="group-child9" />
              <b className="phone">Phone*</b>
            </div>
            <div className="rectangle-parent2">
              <div className="group-child9" />
              <b className="phone">Email*</b>
            </div>
            <div className="rectangle-parent3">
              <div className="group-child9" />
              <b className="phone">Name*</b>
            </div>
          </div>
          <div className="buttons1">
            <button className="requestdemo1">
              <h2 className="submit">Submit</h2>
            </button>
          </div>
        </div>
        <img
          className="property-1group-244208-child"
          alt=""
          src="/rectangle-148216@2x.png"
        />
        <div className="property-1group-244208-item" />
        <img className="vector-icon6" alt="" src="/vector4.svg" />
      </div>
    </div>
  );
};

HowTochooseSolution.propTypes = {
  className: PropTypes.string,
};

export default HowTochooseSolution;
