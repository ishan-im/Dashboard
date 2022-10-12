import React, { useState } from "react";
import classes from "./Card.module.css";

import { Radio } from "@mui/material";

import Toggle from "react-toggle";

import "react-toggle/style.css" 

import CustomizedDialogs from "../Modal/Modal";

function Card({ user }) {
  const [check, setCheck] = useState(false);

  const handleChange = (event) => {

    setCheck(event.target.checked);
    
  };

  return (
    <div className={`${classes.Board__Card} row`}>
      <div className={`${classes.user__name} col-md-8`}>
        <CustomizedDialogs user={user}>
         <Radio color="default" />
         <p className={`${check ? classes.completed : ""}`}>{user.name}</p>
        </CustomizedDialogs>
      </div>

      <div className={`${classes.toogle__Button} col-md-4 p-5`}>
        
          <Toggle
            checked={check}
            icons={false}
            onChange={handleChange}
          />
        
      </div>
    </div>
  );
}

export default Card;
