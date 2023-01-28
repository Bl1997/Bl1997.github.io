import { Center,  Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitCalendar = () => {
  return (
    <div>
      <Heading color={"#F86515"}
        fontSize="xx-large"
        fontWeight={"semibold"}
        textAlign={"center"}
        textTransform={"capitalize"}
        ml={10}
      >
        days i've code
      </Heading>
      <Center mt={10} mb={10}>
        <GitHubCalendar style={{backgroundColor:"#0D1E50" ,color:"#F86515" ,fontWeight:"bold",fontSize:"larger"}} username="Bl1997" />

      </Center>
      <p  align="center"><img style={{color:"#F86515",backgroundColor:"#F86515"}} src="https://github-readme-stats.vercel.app/api?username=Bl1997&show_icons=true&locale=en" alt="Bl1997" /></p>
     

<p style={{"marginTop" : "25px",color:"red"}} align="center"><img style={{backgroundColor:"red"}} src="https://github-readme-streak-stats.herokuapp.com/?user=Bl1997&" alt="Bl1997" /></p>
    </div>
  );
};

export default GitCalendar;

