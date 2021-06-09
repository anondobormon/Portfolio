import React from "react";
import Image from "./pImage";
import "./AllProject.css";

const AllProjects = () => {
  return (
    <div>
      <div className="container5">
        <div className="allProjectImg">
          <div className="imageCont">
            <img src={Image.leospaBeauty} alt="" />
            <a href="" className=" codeLink" target="blank">
              <button className="allProjectButton">Code Link</button>
            </a>
            <a href="" className="liveLink" target="blank">
              <button className="allProjectButton">Live Link</button>
            </a>
          </div>
          <div className="imageCont">
            <img src={Image.leospaBeauty} alt="" />
            <a href="" className=" codeLink" target="blank">
              <button className="allProjectButton">Code Link</button>
            </a>
            <a href="" className="liveLink" target="blank">
              <button className="allProjectButton">Live Link</button>
            </a>
          </div>
          <div className="imageCont">
            <img src={Image.leospaBeauty} alt="" />
            <a href="" className=" codeLink" target="blank">
              <button className="allProjectButton">Code Link</button>
            </a>
            <a href="" className="liveLink" target="blank">
              <button className="allProjectButton">Live Link</button>
            </a>
          </div>
          <div className="imageCont">
            <img src={Image.leospaBeauty} alt="" />
            <a href="" className=" codeLink" target="blank">
              <button className="allProjectButton">Code Link</button>
            </a>
            <a href="" className="liveLink" target="blank">
              <button className="allProjectButton">Live Link</button>
            </a>
          </div>
          <div className="imageCont">
            <img src={Image.leospaBeauty} alt="" />
            <a href="" className=" codeLink" target="blank">
              <button className="allProjectButton">Code Link</button>
            </a>
            <a href="" className="liveLink" target="blank">
              <button className="allProjectButton">Live Link</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
