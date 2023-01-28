import {
  htmlIcon,
  cssIcon,
  javascriptIcon,
  reactIcon,
  nodejsIcon,
  firebaseIcon,
  figmaIcon,
  githubIcon,
  jasmineIcon,
} from "./svgs";

type Skill = {
  name: string,
  icon: any,
  startYear: number
}

type Skills = Skill[]

type SkillTypes = {
  [skill: string]: Skills
}

const skillsData: SkillTypes = {
  frontend: [
    {
      name: "HTML",
      icon: htmlIcon,
      startYear: 2018,
    },
    {
      name: "CSS",
      icon: cssIcon,
      startYear: 2018,
    },
    {
      name: "JavaScript",
      icon: javascriptIcon,
      startYear: 2020,
    },
    {
      name: "ReactJS",
      icon: reactIcon,
      startYear: 2021,
    },
  ],
  backend: [
    {
      name: "NodeJS(Express)",
      icon: nodejsIcon,
      startYear: 2021,
    },
    {
      name: "Firebase",
      icon: firebaseIcon,
      startYear: 2022,
    },
  ],
  other: [
    {
      name: "Figma",
      icon: figmaIcon,
      startYear: 2020,
    },
    {
      name: "Git(Github)",
      icon: githubIcon,
      startYear: 2020,
    },
    {
      name: "Unit testing",
      icon: jasmineIcon,
      startYear: 2020,
    },
  ],
};

export default skillsData;
