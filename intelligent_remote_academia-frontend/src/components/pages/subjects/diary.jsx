import React from "react";

const Diary = ({ diary }) => {
  return (
    <React.Fragment>
      <h1>Diary</h1>
      <ul>
        {diary.map((item) => {
          return (
            <li key={item.id}>
              {item.diary_content} ({item.diary_date})
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Diary;
