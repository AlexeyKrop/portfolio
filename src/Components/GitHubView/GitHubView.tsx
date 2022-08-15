import React from 'react';
import GitHubCalendar from "react-github-calendar";
import s from './GitHubView.module.css'
// const selectLastHalfYear = (contributions: any) => {
//   const currentYear = new Date().getFullYear();
//   const currentMonth = new Date().getMonth();
//   const shownMonths = 6;
//
//   return contributions.filter((day: any) => {
//     const date = new Date(day.date);
//     const monthOfDay = date.getMonth();
//
//     return (
//       date.getFullYear() === currentYear &&
//       monthOfDay > currentMonth - shownMonths &&
//       monthOfDay <= currentMonth
//     );
//   });
// };
export const GitHubView = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
  };
  return (
    <div className={s.gitHubView}>
      <GitHubCalendar
        style={colourTheme}
        blockSize={15}
        blockMargin={5}
        fontSize={16} color={`rgba(200, 137, 230, 0.8)`}
        username="alexeykrop"/>
    </div>
  );
};
