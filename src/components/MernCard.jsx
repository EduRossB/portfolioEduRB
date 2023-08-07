import React from "react";
import "./MernCard.css";

export default function MernCard(props) {
  const { stackInfo } = props;
  return (
    <div className="card-container w-100 my-5" >
      <div className="card">
        <div className="front-content" style={{ backgroundImage: `url(${stackInfo.image})`, backgroundRepeat: 'no-repeat'}} >
          <p>{stackInfo.name}</p>
        </div>
        <div
          className="content"
          style={{ backgroundColor: stackInfo.color, color: 'white' }}
        >
          <p className="heading">{stackInfo.name}</p>
          <p
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              height: "75%",
              display: "flex",
              alignItems: "center",
              padding: "5px",
              borderRadius: "10%",
            }}
          >
            {stackInfo.description}
          </p>
        </div>
      </div>
    </div>
  );
}
