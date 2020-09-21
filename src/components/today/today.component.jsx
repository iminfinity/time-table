import React, { useEffect, useState } from "react";
import "./today.styles.scss";

// react-table didn't solve my problem for this component so i used generic <table> instead
const time_table = {
  monday: {
    "10am-12am": "Parallel and Distributed Systems",
    "11am-1pm": "Design and Analysis of Algorithm",
    "2pm-4pm": "Machine Learning",
    "4pm-6pm": "Principle of Compiler Design",
  },
  tuesday: {
    "11am-1pm": "Internet and Web Technology",
  },
  wednesday: {
    "3pm-5pm": "Internet and Web Technology",
  },
  thursday: {
    "11am-1pm": "Machine Learning",
    "3pm-5pm": "Parallel and Distributed System",
  },
  friday: {
    "10am-12pm": "Principle of Compiler Design",
    "11am-1pm": "Design and Analysis of Algorithm",
  },
  saturday: {
    "11am-1pm": "Data Mining And Knowledge Discovery",
  },
};
const Today = () => {
  const [today, setToday] = useState("");

  const whatDay = (dayNum) => {
    switch (dayNum) {
      case 0:
        return "sunday";
      case 1:
        return "monday";
      case 2:
        return "tuesday";
      case 3:
        return "wednesday";
      case 4:
        return "thursday";
      case 5:
        return "friday";
      case 6:
        return "saturday";
      default:
        return;
    }
  };
  useEffect(() => {
    let day = new Date();
    setToday(whatDay(day.getDay()));
  }, [today]);

  const todaySClass = () => {
    if (today) {
      const data = time_table[today];
      const time = Object.keys(data);
      const subject = Object.values(data);

      return time.map((currentTime, index) => {
        return (
          <tr className="" key={index}>
            <td>{currentTime}</td>
            <td>{subject[index]}</td>
          </tr>
        );
      });
    }
  };
  return (
    <div className="today">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>{todaySClass()}</tbody>
      </table>
    </div>
  );
};

export default Today;
