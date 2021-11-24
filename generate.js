const fs = require("fs");

const experiences = [
  {
    image: "coworksurf.png",
    title: "CoworkSurf",
    timeframe: "September 2021 - present",
    position: "Chief Technology Officer (CTO) & Co-Founder",
    stack: "React, Next.js, Node.js (Full Stack TypeScript)",
    description:
      "Probably the project I’m most proud of. Together with the 3 other founders, within one month I have successfully launched the MVP website: a booking platform for shared housing for remote workers at surf locations. The hardest part of this app was the complex logic of booking accommodation, the Stripe integration, and the optimal image delivery. Have a look at www.coworksurf.com",
  },

  {
    image: "wiseconn.png",
    title: "Wiseconn",
    timeframe: "October 2021 - present",
    position: "Senior React Native Developer",
    stack: "React Native",
    description:
      "For Wiseconn (a small company from Groningen) I have to maintain and continue the development of a small eCommerce app written in bare React Native. I work together with a backend engineer that uses Laravel for the API.",
  },

  {
    image: "instaclean.png",
    title: "InstaClean",
    timeframe: "May 2021 - present",
    position: "Chief Technology Officer (CTO)",
    stack: "React Native, Node.js (Full Stack TypeScript)",
    description:
      "InstaClean is a startup that allows citizens of Nigeria to get rid of their waste FAST by creating a system of waste pickup by motorcycles. Together with a front-end developer I have chosen the technology, created the whole app, and now we’re awaiting approval by an accelerator program.",
  },

  {
    image: "zimamind.png",
    title: "ZIMAmind",
    timeframe: "August 2021 - present",
    position: "Chief Technology Officer (CTO)",
    stack: "React Native, Node.js (Full Stack TypeScript)",
    description:
      "Zimamind is a platform for coaches that has the aim of preventing burn-out within healthcare. I created the main MVP website https://zimamind.nl (written in React Native Web + Node.js) and am now awaiting investments before continuing and outsourcing further development.",
  },

  {
    image: "ccr.png",
    title: "Classic Car Ratings",
    timeframe: "August 2021 - September 2021",
    position: "Senior Frontend Developer",
    stack: "React Native",
    description:
      "Classic Car Ratings is a company that appraises classic cars. Together with a backend developer I created their first app. I also delved into white-label solutions because they will need that in the future.",
  },

  {
    image: "cfa.png",
    title: "Code From Anywhere",
    timeframe: "April 2021 - present",
    position: "Co-Founder & Full-Stack Developer",
    stack: "React, Next.js, React Native, Expo (Full stack TypeScript)",
    description:
      "Code From Anywhere is the agency under which I provide my services together with a handful of other experienced freelancers. Besides this, we are also building a platform to support ourselves. Conceptualization, prototyping, and creating an MVP now. It’s a work in progress, but can be seen at https://hirefreelance.dev",
  },

  {
    image: "zendoc.png",
    title: "Zendoc",
    timeframe: "December 2020 - February 2021",
    position: "React Developer",
    stack: "React",
    description:
      "For this company I worked as a React Developer. Together with another senior react developer I built a text editor in React.",
  },

  {
    image: "mijnkantoor.png",
    title: "MijnKantoor",
    timeframe: "March 2020 - February 2021",
    position: "Senior React Native Developer",
    stack: "React Native",
    description:
      "I was the main developer to bring a large app to production. Team of five. The hardest part of this job was keeping oversight over a large feature set of the main project (website) and building an app based on that, with a similar feature set. Communication with PM was minimal as required.",
  },

  {
    image: "friendtime.png",
    title: "FriendTime",
    timeframe: "September 2019 - July 2021",
    position: "Founder & Full-Stack Developer",
    stack: "React, React Native, Node.js (Full Stack TypeScript)",
    description:
      "For this app I did basically everything since it was my own startup idea: from idea to product in both app stores. Skills involved: Conceptualization of new startup, Product management (app features management), Marketing, Iteration over user feedback, React Native + Node.js + MySQL development. For this app, a detachment from expo.io was needed to include a payment system for iOS and Android.",
  },

  {
    image: "lets.jpg",
    title: "Let's Calendar",
    timeframe: "August 2020 - January 2021",
    position: "Co-Founder & Lead Full Stack Developer",
    stack: "React, React Native, Node.js (Full-Stack TypeScript)",
    description:
      "For Let’s I worked together with one other developer on the React Native Frontend and the Node.js Express Backend (Full Stack JavaScript). For this project, the greatest challenge was to keep the codebase simple and structured and finishing the project. Since the PM and designer wanted more and more features every iteration, this has been a great challenge.",
  },

  {
    image: "dyme.jpg",
    title: "Dyme",
    timeframe: "February 2019 - August 2019",
    position: "Senior React Native Developer",
    stack: "React Native",
    description:
      "This app has tens of thousands of users now. I am proud to have worked as a React Native Developer in a team of six. I worked tightly together with the CTO and a designer to build large parts of their app. I am proud to have worked with detached react native. Among other things, I integrated firebase and built many UX’s from scratch.",
  },

  {
    image: "communify.png",
    title: "Communify",
    timeframe: "February 2018 - January 2019",
    position: "Founder & Full-Stack Developer",
    stack:
      "Android & iOS app with React Native, Node JS, Express, MySQL, GraphQL",
    description:
      "This app had the primary goal to create stronger and more meaningful networks in co-working spaces. It has been my most ambitious project. I did everything from the idea stage until it was done. Especially working with GraphQL was a great challenge, yet very fun and rewarding!",
  },

  {
    image: "mastercrimez.png",
    title: "MasterCrimeZ",
    timeframe: "June 2006 - present",
    position: "Founder & Full-Stack Developer",
    stack:
      "<b>2006 - 2017:</b> PHP, HTML, CSS, MySQL<br /><b>2018 - present:</b> Android & iOS & web app with React Native (web) + Expo.io, Node JS, Express, MySQL, REST",
    description:
      "I started with this when I was 12 years old. I learned to use PHP, HTML, CSS and MySQL and build a game for others to play. Around 2008 it was the most popular with thousands of monthly recurring revenue and over 500 daily active players. In 2018 I tought myself app development and rebuilt the game in React Native for all platforms. The game is still online now, but isn't actively worked on anymore. But who knows what the future will hold!",
  },
];

const experienceHtml = (experience) => {
  return `<div style="margin-bottom:50px;">
<div style="display:flex">
<div><img src="${experience.image}" width="120" height="120" /></div>
<div style="padding:10px; padding-top:0px;">
<b>${experience.title}</b>

<div style="display:grid; grid-template-columns: auto auto;">
    <div style="width:120px;">Timeframe</div>
    <div>${experience.timeframe}</div>
    <div>Position</div>
    <div>${experience.position}</div>
    <div>Stack</div>
    <div>${experience.stack}</div>
</div>
</div>
</div>
${experience.description}
</div>`;
};

const file = `<div style="display: flex; flex-direction: row;">
<aside style="margin-right: 20px; width: 300px;">

<img src="pasfoto.png" style="width:200px; border-radius:100px;"/>

# Wijnand Karsens

Full Stack TypeScript Developer & Founder

Address: Kleine Beer 40, 9742 RJ, Groningen

Phone: (+31) 68190 4650

Email: wijnand@karsens.com

Website: www.codefromanywhere.com

## Skills

### Web Development

- JavaScript / TypeScript
- React
- Next.js
- HTML
- (S)CSS

### App Development

- JavaScript / TypeScript
- React Native
- Expo.io

### Full Stack MVP Development

- All of the above
- Node.js
- MySQL

### Other

- Team Work
- Marketing
- Entrepreneurship
- Product Ownership
- Test Driven Development

## Interests

- (Kite)surfing
- Tabletop games
- Travel
- Going out
- Writing
- Hiking

</aside>

<div style="flex:1;">

# Profile

I am am motivated individual that prides himself in having a lot of experience in (full-stack) web- and app-development, working extremely fast and creating high-quality end-products.

The coming years my plan is to use my coding and leadership skills to develop humane mobile- and web-apps. I plan to get Senior Developer, Lead Developer, and CTO roles while growing my Software Development Agency.

# Education

- **2017: Diploma** - University Of Groningen (RUG), Bachelor, Artificial Intelligence
- **2012: Diploma** - VWO, Zernike College Westerse Drift, Haren, The Netherlands

# Experience

${experiences.map((xp) => experienceHtml(xp))}

</div>`;

fs.writeFileSync("./README.md", file);
