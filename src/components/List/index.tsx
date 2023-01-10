import React from "react";
import { Item } from "./Item";
import style from './List.module.scss';

export const List = () => {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "JavaScript",
      time: "01:00:00",
    },
    {
      task: "TypeScript",
      time: "03:00:00",
    },
  ];

  return (
    <aside className={style.taskList}>
      <h2>Day studies</h2>
      <ul>
        {tasks.map((task, index) => (
          <Item 
            key={index}
            {...task}
          />
        ))}
      </ul>
    </aside>
  );
};
