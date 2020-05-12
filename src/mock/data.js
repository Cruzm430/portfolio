import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Mark Cruz | Developer',
  lang: 'en',
  description: 'Welcome to my portfolio showcasing Javascript projects using React, Node, Redux Postgres',
};

// HERO DATA
export const heroData = {
  title: `Hi there, I'm`,
  name: 'Mark Cruz!',
  subtitle: `JavaScript Developer, Musician and Overall Cool Guy`,
  cta: 'Get to know me!',
};

// ABOUT DATA
export const aboutData = {
  img: 'Mark.jpg',
  paragraphOne:'Hello! My name is Mark Cruz, I am a Full Stack Javascript Developer in the New York/New Jersey area who graduated from CUNY Baruch and Fullstack Academy.',
  paragraphTwo:`Whether through being an advocate to the community through the NYC Mayor's Office, being a music teacher for the youth, or making sure patients are safe as a Risk Management Specialist for a pharmaceutical company, my one goal was always to help people. This is what drove me to software development. Instead of me being the middleman, I wanted to learn the tools to empower people to help themselves through applications that can be built.`,
  paragraphThree: 'I became fluent in Javascript by using the React, Redux framweorks as well as Postgres and Node for backend development. Below are just a few of the things I work on in my free time. I would love to take these skills and bring them to a company to help do some real good in the world and help a lot of people.',
  resume: 'https://drive.google.com/open?id=1UoP3ecnD3dI1MZDc3H8RplwIH_PkpA0G', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'FlightClubShot.png',
    title: 'Grace Shopper - PMGZ',
    info: 'As a group project for Fullstack Academy NYC, we were tasked with creating a Fullstack application',
    info2: 'This Ecommerce clone uses Node, React, Redux and Postgres',
    url: 'https://cruzapp-1.herokuapp.com/#/',
    repo: 'https://github.com/Cruzm430/PGMZ-Flight-Club', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Facer.png',
    title: 'Facer',
    info: 'Using React, Node, Postgres and the Clarifai API, you can upload pictures to this app to see if it can find a face!',
    info2: '',
    url: 'https://facer-frontend.herokuapp.com/',
    repo: 'https://github.com/Cruzm430/facer', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'CocktailDBShot.png',
    title: 'CocktailDB',
    info: `Looking for a drink while in quarantine? Check out CocktailDB! Using React and the CocktailDB API, look up cocktails and how to make them at home!`,
    info2: '',
    url: 'https://polar-caverns-05763.herokuapp.com/',
    repo: 'https://github.com/Cruzm430/cocktailsDB', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: ``,
  btn: 'Reach Out',
  email: 'cruzm430@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mark-estepa-cruz/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Cruzm430',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
