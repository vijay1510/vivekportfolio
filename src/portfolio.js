const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "http://localhost:3000/vivekportfolio",
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
      "During my 7 years in the field, i have worked over 200+ Residential Projects like Apartments,Villas,Individual Villas,Guest House,Mansions.",
    //stack: ["SASS", "TypeScript", "React"],
    //sourceCode: "https://github.com",
    livePreview: "https://flic.kr/s/aHBqjzvDoK",
  },
  {
    name: "Commercial",
    description:
      "I have also worked with Commerical Projects like Offices,Hotels,Jewelery,Bakery",
    //stack: ["SASS", "TypeScript", "React"],
    //sourceCode: "https://github.com",
    livePreview: "https://flic.kr/s/aHBqjzvKXZ",
  },
  {
    name: "Elevation",
    description: "some of my Elevation works...",

    //stack: ["SASS", "TypeScript", "React"],
    //sourceCode: "https://github.com",
    livePreview: "https://flic.kr/s/aHBqjzvDAt",
  },
  {
    name: "Artwork",
    description:
      "Interested in Hand Sketching like Building Elevations, Interiors(Modul Kitch,Partitions etc...),",

    //stack: ["SASS", "TypeScript", "React"],
    //sourceCode: "https://github.com",
    livePreview: "https://flic.kr/s/aHBqjzvDJf",
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
