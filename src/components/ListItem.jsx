import React from "react";

function ListItem({ company, title, date, content }) {
  return (
    <>
      <li className="w-full sm:w-[90%] lg:w-3/4 text-sm lg:text-base lg:h-56 flex flex-col justify-start border-2 border-secondary rounded-md p-5 transform shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] backdrop-blur-[2px]">
        <h3 className="text-2xl font-bold text-secondary">{company}</h3>
        <p className="underline">{title}</p>
        <p>{date}</p>
        <ul>
          {content.map((e, index) => {
            return <li key={index}>{e}</li>;
          })}
        </ul>
      </li>
    </>
  );
}

export default ListItem;
