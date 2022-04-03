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

const skillsData = {
  frontend: [
    {
      name: "HTML",
      icon: htmlIcon,
    },
    {
      name: "CSS",
      icon: cssIcon,
    },
    {
      name: "JavaScript",
      icon: javascriptIcon,
    },
    {
      name: "ReactJS",
      icon: reactIcon,
    },
  ],
  backend: [
    {
      name: "NodeJS(Express)",
      icon: nodejsIcon,
    },
    {
      name: "Firebase",
      icon: firebaseIcon,
    },
  ],
  other: [
    {
      name: "Figma",
      icon: figmaIcon,
    },
    {
      name: "Git(Github)",
      icon: githubIcon,
    },
    {
      name: "Unit testing",
      icon: jasmineIcon,
    },
  ],
};

export default skillsData;
