import React from "react";

function ListItem({company, title, date, content}) {
  return (
    <li>
      <h3 className="text-2xl font-bold pt-8">{company}</h3>
      <p>{title}</p>
      <p>{date}</p>
      <ul>
        {content.map((e, index) => {
            return <li key={index}>{e}</li>
        })}
      </ul>
    </li>
  );
}

export default ListItem;
