import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitCalendar = () => {
  return (
    <div>
      <Heading
        color={"#F86515"}
        fontSize="xx-large"
        fontWeight={"semibold"}
        textAlign={"center"}
        textTransform={"capitalize"}
        ml={10}
      >
        days i've code
      </Heading>
      <Center mt={10} mb={10}>
        <GitHubCalendar
          style={{
            backgroundColor: "#0D1E50",
            color: "#F86515",
            fontWeight: "bold",
            fontSize: "larger",
          }}
          username="Bl1997"
          class="react-activity-calendar"
        />
      </Center>
      <p align="center">
        <img
          width="50%"
          height="150px"
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Bl1997&theme=codeSTACKr&layout=compact"
          alt="Bihari"
          id="github-top-langs"/>
      </p><br />
      <p align="center">
        <img  width="50%"
          height="150px"
          style={{ color: "#F86515", backgroundColor: "#F86515" }}
          src="https://github-readme-stats.vercel.app/api?username=Bl1997&theme=codeSTACKr&show_icons=true&locale=en"
          alt="Bl1997"
          id="github-stats-card"
        />
      </p>

      <p style={{ marginTop: "25px", color: "red" }} align="center">
        <img  width="50%"
          height="150px"
          style={{ backgroundColor: "red" }}
          src="https://github-readme-streak-stats.herokuapp.com/?user=Bl1997&theme=darcula&"
          alt="Bl1997"
          id="github-streak-stats"
        />
      </p>
    </div>
  );
};

export default GitCalendar;
