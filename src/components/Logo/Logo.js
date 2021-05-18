import React from "react";
import { Link } from "gatsby";
import { Title } from "../Core";
// import phone from "../../assets/image/png/phone.png";

import { AiFillPhone } from "react-icons/ai";


const Logo = ({ color = "front", height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      <Title color={color} variant="cardLg" className="mb-0">
       <AiFillPhone style={{marginTop: "-6px"}}/> 0499 388 227
      </Title>
    </Link>
  );
};

export default Logo;
