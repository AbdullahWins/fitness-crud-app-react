import React from "react";
import "./User.css";
import userImage from "../../images/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Calculate from "../Calculate/Calculate";

const User = ({count}) => {
  return (
    <div className="user">
      <div className="user-profile">
        <img src={userImage} alt="" />
        <div className="user-info">
          <p>Abdullah Al MahMud</p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Oslo, Norway
          </p>
        </div>
      </div>
      <div className="user-details">
        <div>
          <p>
            <span>55</span>kg
          </p>
          <p>Weight</p>
        </div>
        <div>
          <p>
            <span>5.11</span>feet
          </p>
          <p>Height</p>
        </div>
        <div>
          <p>
            <span>25</span>years
          </p>
          <p>Age</p>
        </div>
      </div>
      <Calculate count={count}></Calculate>
    </div>
  );
};

export default User;
