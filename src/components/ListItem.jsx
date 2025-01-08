import React from "react";

function ListItem({company, title, date, content}) {
  return (
    <li>
      <h3 className="text-2xl font-bold">{company}</h3>
      <span>{title}</span>
      <span>{date}</span>
      <ul>
        {content.map((e, index) => {
            return <li key={index}>{e}</li>
        })}
      </ul>
    </li>
  );
}

export default ListItem;
