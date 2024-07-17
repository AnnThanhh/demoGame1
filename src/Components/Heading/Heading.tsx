import React from "react";
import "./heading.css";
interface IProps {
  type: String;
  text: String;
}
const Heading: React.FC<IProps> = (props) => {
  const { type, text } = props;
  return (
    <>
      <div className="heading-container">
        <img src="/img/MIN-OP1.png" className="logo" alt="Logo" />
        <h1 className="title-heading">Word Game</h1>
      </div>
      <div className="heading-bottom container">
        <div id="correctHeader">Correct</div>
        <div id="almostHeader">Almost</div>
        <div id="wrongHeader">Wrong</div>
      </div>
    </>
  );
};

export default Heading;
