const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "http://localhost:3000/cleanfolio",
  title: "GV.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Vivek Ganesan",
  role: "Interior Designer",
  description: `Organized Interior Designer adept at multi-tasking and developing creative
       solutions. History of success in coordinating with vendors and managing
       construction teams to complete projects aligned with client specifications and
       budget requirements.`,
  // resume: '',
  social: {
    linkedin: "https://linkedin.com",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Residential",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://flic.kr/ps/3Y1Lwj",
  },
  {
    name: "Project 2",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 3",
    description: `Organized Interior Designer adept at multi-tasking and developing creative
       solutions. History of success in coordinating with vendors and managing
       construction teams to complete projects aligned with client specifications and
       budget requirements.`,

    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 3",
    description: `Organized Interior Designer adept at multi-tasking and developing creative
       solutions. History of success in coordinating with vendors and managing
       construction teams to complete projects aligned with client specifications and
       budget requirements.`,

    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "3D Studio Max",
  "V-ray",
  "Autocad",
  "Adobe Photoshop",
  "Design Rendering",
  "Project Analysis",
  "Material Cost Estimates",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "johnsmith@mail.com",
};

export { header, about, projects, skills, contact };
