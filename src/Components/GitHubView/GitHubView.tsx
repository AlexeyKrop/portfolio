import React from 'react';
import GitHubCalendar from "react-github-calendar";


export const GitHubView = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
  };
  return (
    <div>
      <GitHubCalendar blockSize={15}
                      blockMargin={5}
                      // theme={colourTheme}
                      fontSize={16} color={`rgba(200, 137, 230, 0.637)`} username="alexeykrop" year={new Date().getFullYear()}/>
    </div>
  );
};
