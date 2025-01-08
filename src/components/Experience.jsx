import React from "react";
import Title from "./Title";
import ListItem from "./ListItem";

const experience = [
  {
    id: 1,
    company: "Mia Tech Academy",
    title: "Frond End Tutor",
    date: "July 2024 - Present day",
    content: [
      "Provide personalized assistance to students in developing skills in HTML, CSS, JavaScript, and modern front-end frameworks.",
      "Conduct one-on-one sessions, tailoring the curriculum to students' needs.",
      "Support students in identifying and resolving bugs in their code, fostering critical thinking and debugging methodologies.",
    ],
  },
  {
    id: 2,
    company: "Develhope",
    title: "Full Stack Tutor",
    date: "February 2023 - June 2024",
    content: [
      "Guide and supporte students during the development course focused on HTML, CSS, JavaScript, React, and Node.js.",
      "Provide personalized assistance to help students understand complex concepts and solve difficulties encountered during the course.",
      "Support students in identifying and resolving bugs in their code, fostering critical thinking and debugging methodologies.",
      "Collaborate with other tutors and instructors to develop effective and updated teaching materials.",
    ],
  },
  {
    id: 3,
    company: "Lipary Technology",
    title: "Front End Developer",
    date: "October 2023 - February 2024",
    content: [
      "Developed reusable components and implemented the website’s styling using modern frameworks, ensuring visual consistency and adherence to the design system.",
      "Collaborated with the backend team to integrate APIs and synchronize data.",
      "Fixed bugs and improved the stability and performance of the application.",
    ],
  },
  {
    id: 4,
    company: "Hrm Srl",
    title: "Front End Developer",
    date: "May 2021 - August 2022",
    content: [
      "Developed reusable components using modern frameworks to enhance front-end development efficiency.",
      "Work back to back with the backend team to integrate APIs and synchronize data.",
      "Fixed bugs and improved the stability and performance of the application.",
      "Implemented the website’s styling, ensuring visual consistency and adherence to the design system.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="h-sectionHeight">
      <div className="flex justify-center py-6">
        <Title text={"Work Experience"} />
      </div>
      <div className="flex p-10 items-center h-3/4">
        <div className="h-full flex items-center justify-center">
          <ul className="whitespace-pre-line">
            {experience.map(item => {
                return <ListItem key={item.id} company={item.company} title={item.title} date={item.date} content={item.content}/>
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
