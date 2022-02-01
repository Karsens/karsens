const fs = require("fs");

const experiences = [
  {
    image: "cfa.png",
    title: "Code From Anywhere",
    timeframe: "April 2021 - present",
    position: "Co-Founder & Full-Stack Developer",
    stack: "React, Next.js, React Native, Expo (Full stack TypeScript)",
    description:
      "Code From Anywhere is the agency under which I provide my services together with a handful of other experienced freelancers.",
    blurp: {
      image: "sander.jpeg",
      author: "Sander van Rijsoort",
      tagline: "Freelance Front-End Developer",
      email: "s.rijsoort@gmail.com",
      phone: "+31643499341",
      text: 'I have been working with Wijnand together on a MVP for a startup in React-Native. He has a genuine interest in programming and is always looking for ways to improve his code, make workflows more efficient and has very in-depth JavaScript knowledge. Also he is very goal-oriented and is very focussed on reaching his goals and embodies a "get it done" mentality. Highly recommended for your next MVP or React application!',
    },
  },

  {
    image: "emesa.jpeg",
    title: "Emesa",
    timeframe: "November 2021 - present",
    position: "Full-Stack Developer",
    stack: "React, Next.js, React Native, Expo (Full stack TypeScript)",
    description:
      "Together with a small team we rebuilt ActieVanDeDag.nl and replaced the previous version.",

    blurp: {
      image: "joost.jpeg",
      author: "Joost van Driel",
      tagline: "Freelance Full Stack Developer",
      email: "joost.vandriel@emesa.nl",
      text: "Wijnand joined our team to help out with building a new front-end application. From the very first day, he was delivering a lot of value and pushing the product forward. He brought a lot of technical knowledge about modern front-end development and shared it with our team. He was a good colleague that delivered quality work.",
    },
  },

  {
    image: "stoic.jpeg",
    title: "Stoic Strategies",
    timeframe: "November 2021 - present",
    position: "Front-End Developer",
    stack: "React, Next.js, React Native, Expo (TypeScript)",
    description:
      "Stoic needed a front-end to gain better insights into their trading strategies.",
  },

  {
    image: "coworksurf.png",
    title: "CoworkSurf",
    timeframe: "September 2021 - present",
    position: "Chief Technology Officer (CTO) & Co-Founder",
    stack: "React, Next.js, Node.js (Full Stack TypeScript)",
    description:
      "Probably the project I’m most proud of. Together with the 3 other founders, within one month I have successfully launched the MVP website: a booking platform for shared housing for remote workers at surf locations. The hardest part of this app was the complex logic of booking accommodation, the Stripe integration, and the optimal image delivery. Have a look at www.coworksurf.com",

    blurp: {
      image: "michele.jpeg",
      author: "Michele Picozzi",
      email: "michele.g.picozzi@gmail.com",
      tagline: "Full Stack Web Developer",
      text: "Wijnard is a great team member, we worked closely together to build a full website for remote workers in less than 2 months. It would have not been possible without him and he's been a key contributor since day 1. Wonderful CTO, any company would be more than lucky to have!\n\nAlso, working with him is fun, regardless of how difficult and complex the project is!",
    },
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
    image: "roadeo.webp",
    title: "Roadeo.io",
    timeframe: "April 2019 - June 2019",
    position: "React Native Developer",
    stack: "React Native",
    description:
      "This freelance project required me to build a react native app that used sensors to gather data about road quality. Together with a data scientist I designed the app to send frequent updates to the backend.",
  },

  {
    image: "mypo.jpeg",
    title: "MYPO",
    timeframe: "February 2019 - April 2019",
    position: "Full Stack Developer",
    stack: "React Native, Expo, Node.js (Full-Stack JavaScript)",
    description:
      "This React Native App was for a last-mile delivery system. I refactored the whole existing app and took ownership of the codebase. With a team of 6 we quickly brought the startup closer to Product Market Fit.",
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
    image: "targetholding.png",
    title: "Target Holding (Slimmer AI) - Bencompare",
    timeframe: "July 2018 - February 2019",
    position: "Mobile App Developer",
    stack: "React Native",
    description:
      "Bencompare was a Personal Expenses Dashboard. I worked together with a big team to bring this app to production and build lots of features for it.",
  },
  {
    image: "ovfiets.png",
    title: "OVFiets",
    timeframe: "June 2018 - November 2019",
    position: "Co-Founder & Front-End Developer",
    stack: "Android & iOS app with React Native",
    description:
      "OVFiets had the goal of making public transport more environment friendly by giving people the possibility to show cycling routes to the bus-stations and getting the shortest route time-wise with bike to public transport to bike.",
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

<!--details-->
<div style="display:grid; grid-template-columns: auto auto;">
<div style="width:120px;">Timeframe</div>
<div>${experience.timeframe}</div>
<div>Position</div>
<div>${experience.position}</div>
<div>Stack</div>
<div>${experience.stack}</div>
</div>
<!--details end-->

</div>
</div>
${experience.description}
${
  experience.blurp
    ? `<div style="margin-top:20px;"><b>Recommendation:</b>
<div style="display:flex; padding:10px; border: 1px solid black;">

<div><img src="${
        experience.blurp.image
      }" width="80" height="80" style="border-radius:40px;" /></div>
<div style="padding:10px; padding-top:0px;">
<b>${experience.blurp.author}</b> (${experience.blurp.tagline})

<!--details-->
<div style="display:grid; grid-template-columns: auto auto;">
${
  experience.blurp.phone || experience.blurp.email
    ? `<div>Contact</div>
<div>${experience.blurp.phone || ""} ${experience.blurp.email || ""}</div>`
    : ""
}
<div style="width:120px;">Recommendation</div>
<div style="width:400px;">${experience.blurp.text}</div>
</div>
<!--details end-->

</div>
</div>
</div>`
    : ""
}
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

[![wakatime](https://wakatime.com/badge/user/7d623a0a-b2f1-438d-b049-479ca16f4035.svg)](https://wakatime.com/@7d623a0a-b2f1-438d-b049-479ca16f4035)

<!--<figure><embed src="https://wakatime.com/share/@Wijnand/b7187b8a-58eb-4e8e-bc4d-db6bfc0f32da.svg"></embed></figure>-->

![](https://wakatime.com/share/@Wijnand/d1babe6d-0a46-4ca8-bf9c-e309101838ad.svg)

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
- Express
- MySQL
- Sequelize

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

${experiences.map((xp) => experienceHtml(xp)).join("")}

</div>`;

fs.writeFileSync("./README.md", file);
