// tslint:disable: max-line-length
export const content = {
  menu: [
    {
      name: "INTRO",
      link: "intro",
    },
    {
      name: "ABOUT ME",
      link: "about",
    },
    {
      name: "EXPERT IN",
      link: "expertin",
    },
    {
      name: "PROJECTS",
      link: "projects",
    },
    {
      name: "ACCOMPLISHMENTS",
      link: "accomplishments",
    },
    {
      name: "EXPERIENCE",
      link: "experience",
    },
    {
      name: "EDUCATION",
      link: "education",
    },
    {
      name: "CONFERENCES ATTENDED",
      link: "conferences",
    },
    {
      name: "CONTACT ME",
      link: "contact",
    },
  ],
  video: {
    title: "Hello, my name is Takudzwa Kain Mawarire",
    subtitle: "Full Stack .Net Developer",
    subtitles: ["Full Stack Developer", "Angular Developer", ".NET Developer", "GIS Developer", "Frontend Developer (Angular)", "Backend Developer (.Net)", "Xamarin Developer"],
  },
  about: {
    // "I combine my advanced knowledge, experience and skills with technology in order to develop professional and innovative applications.",
    title: "ABOUT ME",
    content: [
      "An avid, innovative and resourceful Full Stack Developer & GIS Expert who keeps an endless watch on what’s next in emerging technologies",
      "By following the best practices, I produce “clean code” which is comprehensive, easy to read, debug and maintain.",
      "An innovator of next-generation solutions, systems and applications giving companies a competitive edge and producing outstanding results for customers.",
      "I have a keen eye for great user interfaces and have a unique approach to problem-solving. I never stop learning.",
      'Check out the <a href="https://github.com/Tashaa78/chartofylak-ou-mou" target="_blank">code</a> for this portfolio on github. I using Azure Pipelines for continous deployment.',
    ],
    button: "Download Resume / CV",
  },
  expertin: {
    title: "EXPERT IN",
    content: "",
    masteries: [
      {
        title: "Angular",
        img: "bg-angular",
      },
      {
        title: "ASP.NET Core",
        img: "bg-aspnet",
      },
      {
        title: "ASP.NET Core",
        img: "bg-azure",
      },
      {
        title: "CSS3",
        img: "bg-css",
      },
      {
        title: ".NET Core",
        img: "bg-dotnet-core",
      },
      {
        title: ".Net",
        img: "bg-dotnet",
      },
      {
        title: "Git",
        img: "bg-git",
      },
      {
        title: "Javascript",
        img: "bg-javascript",
      },
      {
        title: "Node",
        img: "bg-nodejs",
      },
      {
        title: "SASS",
        img: "bg-sass",
      },
      {
        title: "SQL Server",
        img: "bg-sql-server",
      },
      {
        title: "Typescript",
        img: "bg-typescript",
      },
      {
        title: "Visual Studio",
        img: "bg-vs",
      },
      {
        title: "Xamarin",
        img: "bg-xamarin",
      },
      {
        title: "C#",
        img: "bg-csharp",
      },
      {
        title: "VS Code",
        img: "bg-vscode",
      },
      {
        title: "Postgres",
        img: "bg-postgres",
      },
      {
        title: "SQL",
        img: "bg-sqlserver",
      },
    ],
  },
  projects: {
    title: "MY FAVORITE PROJECTS",
    content: [
      {
        title: "Bulk Payments Solution",
        subtitle: "Banking / Finance",
        year: "05/2020",
        intro: [
          "After a bruising battle with the banks, Paynet withdrew its services which included payroll and bulk payments processing. This created an opportunity for a home-grown solution which I was privileged to develop for one of the major banks in Zimbabwe. The system automates excel schedules that were now being sent to the bank for manual processing via email. With no limits to the number of transactions a batch can carry, the system drastically reduced the amount of time taken to process bulk payments. The system not only processes bulk payments but it also does automated reconciliations for any transactions that failed during processing. This has made the solution even handy for account managers for big cooperates.",
        ],
        used: [
          "ASP.NET Core",
          "C#",
          "Angular",
          "Typescript",
          "SQL Server",
          "Microserices",
          "Microfrontend",
          "Redis",
          "Sybrin Enterprise Suite",
        ],
      },
      {
        title: "Document Management Solution",
        subtitle: "Logistics / Freight Forwarding",
        year: "02/2020",
        intro: [
          "I designed and implemented document management system for a clearing & forwarding company and it’s used to receive, track, manage and store documents and reduce paper. It’s capable of keeping a record of the various versions created and modified by different users. This has helped the organization as they now have a single source of truth for all their work. The system is highly customized and modular allowing them to define document types and capture related metadata in a click of a button. For convenience, the system also integrates with their network scanners allowing documents to be feed into the system directly from the scanner.",
        ],
        used: [
          "ASP.NET Core",
          "C#",
          "Angular",
          "Typescript",
          "SQL Server",
          "Microserices",
          "Microfrontend",
          "Redis",
          "Sybrin Enterprise Suite",
        ],
      },
      {
        title: "Garnishee Order System",
        subtitle: "Banking / Finance",
        year: "07/2019",
        intro: [
          "Developed a cost-effective and problem-free management solution for the administration of Garnishee Orders. The major goal of the project was to automate marking and dropping of liens on garnished accounts. This was in order to transfare funds to relevent authorities once the accounts were funded. The solution integrates with a core banking solution to automate actions on garnished accounts. This has helped the organization keep track of all orders received and it also allows them to know the current state of any order that’s is still being processed. Capturing an order is as simple as uploading a document and capturing the related metadata. Once authorized, the system automatically keeps track of the funds deducted until the full amount is paid.",
        ],
        used: [
          "Windows Services",
          "Sybrin 7",
          "C#",
          "SQL Server",
          "Finacle Services",
          "SOAP",
        ],
      },
      {
        title: "Credit Registry Solution",
        subtitle: "Banking / Finance",
        year: "04/2019",
        intro: [
          "The solution is a unique integration with the central bank (RBZ) that allows banks to submit their customer credit records. Information is built in batches from a data warehousing solution used by the bank and is uploaded to the central bank at set intervals as required. The whole process is hustle free and fully automated.",
        ],
        used: ["Windows Services", "Sybrin 7", "C#", "SQL Server", "SOAP"],
      },
      {
        title: "USSD Statements Module",
        subtitle: "Banking / Finance",
        year: "02/2019",
        intro: [
          "This was an enhancement to an already existing solution that allowes users to request thir account statements via USSD. The module automated customer lookup using the request phone number. A succeesful lookup would triger ESB to prepare the account statement for a specified period sending it to the user via email.",
        ],
        used: ["Windows Services", "Sybrin 7", "C#", "SQL Server", "SOAP"],
      },
      {
        title: "SMS Notification & Response (SNR)",
        subtitle: "Government Of Zimbabwe",
        year: "06/2017 – 2018/10",
        intro: [
          "RWIMS SNR (SMS Notification and Response Service) is an SMS and web-based system that allows the government and other stakeholders to monitor and respond to Water Sanitation & Hygiene (WASH) related issues in the country. This system is an upgrade to RWIMS, and allows key informants at village level (registered per facility / institution/ village) to raise WASH related issues (e.g. communal water wells breaking down or drying up, poor sanitation coverage etc.) via SMS. The SMS data will be linked to the mapped village information and available to real-time monitoring. Response requests will also be raised by the system via SMS and email to respective agents (e.g. villagepump-minders, health practitioners, donors etc.).",
        ],
        used: [
          "Angular JS",
          "Javascript",
          "Xamarin Android",
          "ASP.NET WebAPI",
          "SQL Server",
          "Kendo UI",
          "RapidPro",
        ],
      },
      {
        title: "Goat Farming Information Management",
        subtitle: "The Netherlands Developement Comapny (SNV)",
        year: "11/2017 - 02/2018",
        intro: [
          "Having successfully rolled out a goat farming project, SNV was faced with a common problem, 'Information Management'. They wanted a solution to be able to track which farmer was doing what and also track their growth. We were contracted to develop a solution to help the organization build a farmer database and ease the process of information management for the project. I personally dveloped the mobile application that they used to capture farmer information in remote areas where there was no data / connectivity. This helped the organization build their farmer database in an unexpectedly small time as the app provided convinience.",
        ],
        used: [
          "ASP.NET MVC",
          "Kendo UI",
          "Xamarin",
          "SQL Server",
          "Javascript",
        ],
      },
      {
        title: "FEDS TOMI",
        subtitle: "06/2017 - 07/2017",
        year: "11/2017 - 02/2018",
        intro: [
          "Developed an e-commerce app with a fully fledged inventory system that allowed FEDS to sale and distribute their products without any hustle. Initially i built the system on NodeJS Express but later redesigned in using Angular and ASP.NET Core.",
        ],
        used: [
          "NodeJS",
          "Angular",
          "ASP.NET Core",
          "SQLite",
          "Azure",
          "Bootstrap",
        ],
      },
      {
        title: "RWIMS",
        subtitle: "The Government Of Zimbabwe",
        year: "06/2015 – 08/2016",
        intro: [
          "RWIMS is an integrated web based geographic information systems that was developed specifically for the National Action Committee on WASH (Zimbabwe Government) to act as a national inventory of all Water, Sanitation and Hygiene enabling facilities at all villages, schools, health centers and other institutions throughout rural Zimbabwe. The system is comprised of a mobile application for field data collection and mapping, a national web accessible geodatabase that stores all the country’s WASH data and a web-based application for retrieving, querying, and analyzing, reporting and map visualization of the country’s WASH data. I am one of the two systems developers who worked on this project. The system user base constitutes of 1,620 ward-based field data collectors and 1000+ web-based users who have an interest in the WASH sector of the country.",
        ],
        used: [
          "ASP.NET MVC",
          "Kendo UI",
          "Xamarin",
          "SQL Server",
          "Javascript",
        ],
      },
      {
        title: "Municipal GIS",
        subtitle: "Gweru City Council",
        year: "06/2016 – 08/2016",
        intro: [
          "I had the opportunity to implement the system I developed for my final year dissertation. Ofcause I had to develop more modules to allow for property management, bedt tracking and other related GIS reporting features.",
        ],
        used: [
          "ASP.NET MVC",
          "Kendo UI",
          "Xamarin",
          "SQL Server",
          "Javascript",
          "Leaflet",
        ],
      },
      {
        title: "Thesis",
        subtitle: "2016",
        year: "2016",
        intro: [
          "I developed a service fault reporting system that allowed users to report service faults i.e. sewer / water burst to the municipality via a mobile application / web portal. This information was used to dispatch field service team which would update the issue when they get to the scene. Management and users could track progress on each report improvimg service delivery and customer satisfaction.",
        ],
        used: [
          "ASP.NET MVC",
          "Kendo UI",
          "Xamarin",
          "SQL Server",
          "Javascript",
        ],
      },
    ],
  },
  accomplishments: {
    title: "RECENT ACCOMPLISHMENTS",
    content: [
      {
        title: "Bulk Payments Solution -2020",
        paragraph:
          "Had an opportunity to develop a highly configurable and customised bulk payments solution for a local bank. The soution can transact using ordinary and office accounts making it a valuable tool for account managers.",
      },
      {
        title: "MCSD (App Builder) - 2019",
        paragraph:
          "Earned as part of continuous self development [personal goals]. This has improved my approach to building solutions as I now have understanding of advanced architectures and infrastructure building for morden web applicatons.<br/><a href='https://www.youracclaim.com/badges/e0c1b76f-b655-4bcd-a815-73ed34ccad62/public_url' target='_blank'>Vew Credential</a>",
      },
      {
        title: "MCSA (Web Applications) - 2019",
        paragraph:
          "I love learning and proving myself. Taking this exam allowed me to learn advanced web develoment concepts. This has allowed me to build intelligent.<br/><a href='https://www.youracclaim.com/badges/139ee1f7-69fb-4d44-8ffd-8cd53b0023e7/public_url' target='_blank'>Vew Credential</a>",
      },
      {
        title: "Garnishee Order Solution - 2019",
        paragraph:
          "Developed a Garnishee Order Management System for Standard Bank Zimbabwe. The project included intergrating with their core banking system to automate the transfare of funds from the garnished accounts without human intervention.",
      },
      {
        title: "Credit Registry Solution - 2019",
        paragraph:
          "Developed a Credit Registry Submition System for First Capital Bank Zimbabwe. The system automates credit information submitions to the Reserve Bank.",
      },
      {
        title: "Rural WASH System - 2016 - 2018",
        paragraph:
          "Developed RWIMS FieldForce V3, a mobile application for a UNICEF funded project (RWIMS) used for field data collection, mapping and management. Designed and developed analytics dashboards giving an overview of the reports and various metrics on WASH data. <a href='https://www.unicef.org/innovation/stories/accelerating-delivery-water-and-sanitation-services-through-real-time-monitoring-zimbabwe' target='_blank'>Here</a> is more from UNICEF.",
      },
      {
        title: "2016",
        paragraph:
          "Solely Developed a web application (GIS) used as a Audit tool by Zimbabwe Innovative Technologies Pvt Ltd (Gweru City Council - Water Audit).",
      },
      {
        title: "2016",
        paragraph:
          "Presented my thesis on a City Engineering Services Reporting System at Survey Institute of Zimbabwe's 2016 Congerence & AGM in Victoria Falls (ZW). The presentation was based on a prototype I developed to demonstrate how Web GIS can be liveraged to improve service delivery in local authorities.",
      },
    ],
  },
  experience: {
    title: "EXPERIENCE",
    content: [
      {
        title: "Implementation & Support Developer",
        subtitle: "Imaging Solutions - Sybrin (ZW)",
        year: "Oct 2018 - PRESENT",
        intro: [
          "Implementation & Support Developer at one of Africa's leading Banking & Financial Services provider, 'Sybrin Systems (Pty) Ltd'. I have had the opportunity to develop solutions for the financial sector using modern technologies like Angular, ASP.NET , Redis & Docker",
        ],
        elements: [
          {
            type: "list",
            header: "Responsibilities:",
            list: [
              "Upgrade existing systems to a web based Sybrin Enterprise Studio",
              "Design and collaborate with the team on change requests and new projects.",
              "Implement Change Requests and New Projects.",
              "Build in-house systems to improve day to day work-flows",
              "Troubleshoot errors at existing customers",
              "Improve efficiency of current systems.",
              "Testing & Documenting projects.",
            ],
          },
          {
            type: "list",
            header: "Experience Gained:",
            list: [
              "Worked effectively within an agile team ( with daily stand ups, sprints, ceremonies, bets etc. )",
              "JIRA ( completed tickets and sprints by using JIRA )",
              "Followed best practices and improved coding habits thanks to other Senior Developers' suggestions",
              "Built an in-house Leave Application System",
              "Improved communication skills and the ability to relate technical ideas and best practices to other developers/stakeholders",
              "Gained more knowledge on DevOps tools and processes",
            ],
          },
        ],
        used: [
          "Sybrin API",
          "Sybrin 7",
          "Sybrin Enterprise Suite",
          "Angular",
          "Typescript",
          "Node",
          "Javascript",
          "SCSS",
          "CSS3",
          "Bootstrap",
          "C#",
          "SQL Server",
          ".Net Core",
          "EJ2",
        ],
      },
      {
        title: "Solutions Developer & GIS Expert",
        subtitle: "Integral Edge Systems Design",
        year: "August 2014 - October 2018",
        intro: [
          "I served as a Solutions Developer & GIS Expert at the company. I started out as an intern software developer & GIS consultant, while I was also studying. To date, I have been part in the development of solutions for various clients that include UNICEF, SNV (The Netherlands Development Organization) & the Government of Zimbabwe.",
        ],
        elements: [
          {
            type: "list",
            header: "Key Responsibilities included but were not limited to:",
            list: [
              "Led solutions engineering that involved process automation and functionality enhancement.",
              "Replaced time-consuming, error-prone manual processes with elegant, automated solutions.",
              "Developed and enhanced programs using JavaScript, C#, contributing to solutions that streamlined processes, increased accuracy and lowered costs.",
              "Presenting ideas for system improvements",
              "Writing the program code (client side and back-end)",
              "Implementing complex GIS modeling algorithms in code.",
              "Testing the product in controlled, real situations before going live",
              "Preparation of training manuals for users",
              "Maintaining the systems once they are up and running",
            ],
          },
          {
            type: "list",
            header: "Co-Developed the following Web & Mobile Applications:",
            list: [
              "RWIMS: RWIMS is an integrated web based geographic information systems (GIS) that was developed specifically for the National Action Committee on WASH (Zimbabwe Government) to act as a national inventory of all Water, Sanitation and Hygiene enabling facilities at all villages, schools, health centers and other institutions throughout rural Zimbabwe. The system is comprised of a mobile application for field data collection and mapping, a national web-accessible geodatabase that stores all the country’s WASH data and a web-based application for retrieving, querying, analyzing, reporting and map visualization of the country’s WASH data. I am one of the systems developer who worked on this project. The system user-base constitutes of 1,620 ward-based field data collectors and 1000+ web-based users who have an interest in the WASH sector of the country.",
              "RWIMS SNR: This is an SMS and web-based system that will allow the government and other stakeholders to monitor and respond to the effects of drought in the selected food insecure districts of the country. This system will build on top of the RWIMS system, and will allow key informants at village level to raise drought related issues (e.g. communal water wells breaking down or drying up) via SMS. The SMS data will be linked to the mapped village information and available to real-time monitoring. Response requests will also be raised by the system via SMS and email to respective agents (e.g. village pump-minders and donors).",
              "ZIMGOATS App:I developed a mobile app that was used in field data collection, management & monitering for the DFID funded Zim-Goats project which was looking at the development of the goat value chain in Binga and Hwange districts of Zimbabwe",
              "Urban Works: Urban Works is custom Geographic Information System that I co-developed for use by local municipalities to centralise their data and core-processes in a streamlined manner. The key objective of the system is to serve as a solution to better manage municipal customer demands, infrastructure  and service delivery. Key functions of the system include: <br/>• Maintain geographic records of the town’s property boundaries <br/>• Maintain geographic records of their waste water, water supply and drainage network assets <br/>• Map and Keep track of events around the town (e.g. infrastructural damages, theft, etc) <br/>• Use Mobile data collection for water meter readings and routes tracking.",
            ],
          },
        ],
        used: [
          "AngularJS",
          "Angular 2",
          "ASP.NET WebAPI",
          "Xamarin Android",
          "Kendo UI",
          "JQuery",
          "HTML5",
          "CSS3",
          "C#",
          "Java",
          "Bootstrap",
          "Rapid PRO",
          "Entity Framework",
          "Mapbox SDK",
          "ArcGIS ArcObjects",
          "ArcGIS",
          "QGIS",
          "SharpMap",
        ],
      },
      {
        title: "Full-Stack Web Developer & Designer",
        subtitle: "Freelance",
        year: "June 2017 - Aug 2017",
        intro: [
          "I designed & developed an inhouse system for F.E.D.S to facilatate Service Distrubution. The system is an integration with the TelOne Online Integrated Merchant(TOMI). It also includes a full-fledged inventory and point of sale modules.",
        ],
        used: [
          "Node JS",
          "SQLite",
          "Jade",
          "CSS3",
          "Javascript",
          "jQuery",
          "Bootstrap",
          "Express",
          "Azure",
        ],
      },
      {
        title: "Web Developer - Full Stack",
        subtitle: "GISKonsult Plc",
        year: "July 2016 - October 2016",
        intro: [
          "GISKonsult Plc is a Division of Greatop Investments Pvt. Ltd which is based in Gweru, Zimbabwe. I was contracted to develop a Custom Web Based Municipal GIS for the city of Gweru based on a prototype I had developed for my thesis. This system was mainly used for a water audit conducted by ZIMIT in 2016",
        ],
        elements: [
          {
            type: "list",
            header: "Key Responsibilities included but were not limited to:",
            list: [
              "Gather and refine specifications and requirements based on technical needs",
              "Write well designed, testable, efficient code by using best software development practices",
              "Create user interfaces and back-end using standard ASP.NET MVC 5 practices",
              "Design and develop a robust geo – database on SQL Server 2014",
              "Create and maintain software documentation",
            ],
          },
        ],
        used: [
          "ASPNET MVC 5",
          "JQuery",
          "Javascript",
          "SQL Server 2014",
          "Mapbox SDK",
          "HTML5",
          "CSS3",
          "Bootstrap",
          "C#",
          "Entity Framework",
        ],
      },
    ],
  },
  education: {
    title: "EDUCATION",
    content: [
      {
        title:
          "Bachelor Degree in Surveying & Geomatics - Midlands State University (ZW)",
        subtitle: [
          "Studying surveying & geomatics was not by choice, but toward the end, I found a passion (Geographic Information System (GIS) Programming & Software Development). I have to face life with a newly found passion. Passion is the energy that keeps me going, that keeps me filled with meaning, and happiness, and excitement, and anticipation. Graded Upper Second (2.1)",
        ],
        year: "2011 - 2016",
      },
      // {
      //   'title': 'Microsoft Certified Solutions Associate - Web Applications',
      //   'subtitle': [
      //     'Earners of the MCSA: Web Applications certification have demonstrated the skills required to implement modern web apps. They are qualified for a position as a web developer or web administrator.<br/><a href=\'https://www.youracclaim.com/badges/139ee1f7-69fb-4d44-8ffd-8cd53b0023e7/public_url\' target=\'_blank\'>Vew Credential</a>'
      // ],
      //   'year': '2019'
      // },
      // {
      //   'title': 'Microsoft Certified Solutions Developer - AppBuilder (Web Applications)',
      //   'subtitle': [
      //     'Earners of the MCSD: App Builder certification have demonstrated the skills required to build modern mobile and/or web applications and services. Earning this certification qualifies an individual for a position as an application developer.<br/><a href=\'https://www.youracclaim.com/badges/e0c1b76f-b655-4bcd-a815-73ed34ccad62/public_url\' target=\'_blank\'>Vew Credential</a>'
      // ],
      //   'year': '2019'
      // }
    ],
  },
  conferences: {
    title: "CONFERENCES",
    content: [
      {
        title: "Survey Institute of Zimbabwe (SIZ) Conference & AGM",
        list: [
          "Presented on Web Based Service Fault Reporting GIS designed to increase operational efficiency, share information with the public and improve both the quality of government services and citizen welfare. This was in line with their theme: Smart Cities. The overarching mission of a smart city is to optimize city functions and drive economic growth while improving quality of life for its citizens using smart technology and data analysis.",
        ],
        year: "2016",
      },
      {
        title:
          "Water Engineering and Development International Conference (Loughborough University, UK)",
        list: [
          "Presentation on RWIMS under the theme Water, Sanitation and Hygiene (WASH) which is focused on low and middle-income countries. RWIMS was designed & developed with the goal of strengthening the WASH sector monitoring through the use of ICTs. The paper can be found <a href='https://wedc-knowledge.lboro.ac.uk/details.html?id=22650' target=\"_blank\">here</a>. More info on the <a href='https://40thwedcinternationalconference.wordpress.com/2017/07/28/zimbabwes-rural-wash-information-management-system-rwims-makes-an-international-mark-at-the-40th-wedc-conference-kudos-to-the-wada-scholarship/' target=\"_blank\">40th WEDC Conference</a> proceedings",
        ],
        year: "2017",
      },
    ],
  },
  contact: {
    intro:
      "Feel free to contact me for project cooperation or an employment opportunity. I will reply as soon as possible...",
    input: ["NAME", "EMAIL", "MESSAGE"],
    button: "Send message",
  },
  footer: {
    content: "All rights reserved",
  },
};
