import React from "react";
import Title from "./Title";
import ListItem from "./ListItem";
import Container from "./Container";

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
    <section id="experience" className="bg-">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs"
        width="100%"
        height="1200"
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
        className="absolute -z-10"
      >
        <g mask='url("#SvgjsMask1237")' fill="none">
          <path
            d="M -265.33415930441294,291 C -169.33,266.8 22.67,155 214.66584069558706,170 C 406.67,185 502.67,370 694.6658406955871,366 C 886.67,362 982.67,146.4 1174.6658406955871,150 C 1366.67,153.6 1601.6,390 1654.6658406955871,384 C 1707.73,378 1482.93,172.8 1440,120"
            stroke="rgba(0, 176, 176, 0.51)"
            stroke-width="2"
          ></path>
          <path
            d="M -769.1169201961482,191 C -673.12,213.6 -481.12,291 -289.11692019614816,304 C -97.12,317 -1.12,253.8 190.88307980385184,256 C 382.88,258.2 478.88,340.2 670.8830798038518,315 C 862.88,289.8 997.06,122.6 1150.8830798038518,130 C 1304.71,137.4 1382.18,307.6 1440,352"
            stroke="rgba(0, 117, 117, 0.54)"
            stroke-width="2"
          ></path>
          <path
            d="M -409.9170089245982,203 C -313.92,250.8 -121.92,441 70.08299107540182,442 C 262.08,443 358.08,215.4 550.0829910754019,208 C 742.08,200.6 838.08,406 1030.0829910754019,405 C 1222.08,404 1428.1,223 1510.0829910754019,203 C 1592.07,183 1454.02,284.6 1440,305"
            stroke="rgba(0, 176, 176, 0.51)"
            stroke-width="2"
          ></path>
          <path
            d="M -922.2316014019829,217 C -826.23,259 -634.23,430 -442.23160140198286,427 C -250.23,424 -154.23,221.8 37.76839859801714,202 C 229.77,182.2 325.77,327 517.7683985980171,328 C 709.77,329 813.32,195.2 997.7683985980171,207 C 1182.21,218.8 1351.55,351 1440,387"
            stroke="rgba(0, 176, 176, 0.51)"
            stroke-width="2"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1237">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
      <Container>
        <div className="flex justify-center py-6">
          <Title text={"Work Experience"} />
        </div>
        <div className="flex p-10 items-center">
          <div className="h-full flex items-center justify-center">
            <ul className="whitespace-pre-line">
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
