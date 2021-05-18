import React from "react";
import styled from "styled-components";

import { Box, Text } from "../../components/Core";

const AvailableCircle = styled(Box)`
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;

const Hero = ({ className = "justify-content-center", ...rest }) => {
  return (
    <>      <Box className={`d-flex align-items-center ${className}`} {...rest}>
      <AvailableCircle className="bg-success" mr="13px" />
        <Text variant="tag" className="text-uppercase" color="heading">
          Adobe Creative Suite
        </Text> 
      </Box><br/>
    <Box className={`d-flex align-items-center ${className}`} {...rest}>
      <AvailableCircle className="bg-success" mr="13px" />
        <Text variant="tag" className="text-uppercase" color="heading">
          Git, Teams, Node
        </Text> 
      </Box><br/>
      <Box className={`d-flex align-items-center ${className}`} {...rest}>
      <AvailableCircle className="bg-warning" mr="13px" />
        <Text variant="tag" className="text-uppercase" color="heading">
          REACT, Gatsby, React-native
        </Text> 
      </Box><br/>
      <Box className={`d-flex align-items-center ${className}`} {...rest}>
      <AvailableCircle className="bg-success" mr="13px" />
        <Text variant="tag" className="text-uppercase" color="heading">
          PHP, Mysql, Firebase
        </Text> 
      </Box><br/><br/>
      <Box className={`d-flex align-items-center ${className}`} {...rest}>
      <AvailableCircle className="bg-success" mr="13px" /><AvailableCircle className="bg-success" mr="13px" /><AvailableCircle className="bg-success" mr="13px" /></Box><br/>
    </>
  );
};

export default Hero;
