import React, { useEffect } from "react";
import Title from "./Title";
import ListItem from "./ListItem";
import Container from "./Container";
import AOS from "aos";
import "aos/dist/aos.css";

const experience = [
  {
    id: 1,
    company: "Mia Tech Academy",
    title: "Front End Tutor",
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
    date: "October 2022 - February 2023",
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
  const titleContent = (
    <span>
      <span className="underline decoration-secondary">Work</span> Experience
    </span>
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="experience" data-aos="fade-up">
      <Container>
        <div className="scroll-my-14 border-b-2">
          <div className="py-6 text-center lg:text-left">
            <Title text={titleContent} />
          </div>
          <div className="p-10">
            <ul className="whitespace-pre-line flex justify-center items-center gap-5 flex-col">
              {experience.map((item) => {
                return (
                  <ListItem
                    key={item.id}
                    company={item.company}
                    title={item.title}
                    date={item.date}
                    content={item.content}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
