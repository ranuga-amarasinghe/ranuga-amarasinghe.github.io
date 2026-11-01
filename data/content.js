/* ==========================================================================
   PORTFOLIO CONTENT — edit this file to add photos, text, videos and links.
   No other file needs to change. See HOW-TO-ADD-CONTENT.md for a walkthrough.

   PROJECT fields (all optional except id, title, category, summary):
     id           short lowercase name, used in the page address (no spaces)
     title        project name
     subtitle     one-line descriptor
     category     label shown above the title, e.g. "Underwater robotics"
     icon         fallback icon when there is no cover photo:
                  auv, quad, hex, maze, rov, app, plant, plane, robot, gear, chip, code
     featured     true = shown in "Featured work" on the home and projects pages
     summary      short text shown on cards
     description  list of paragraphs for the project's own page
     role / context / outcome   small fact lines
     tech         list of technology tags
     cover        main photo, e.g. "assets/projects/hex-dive/cover.jpg"
     gallery      more photos: [{ src: "assets/projects/hex-dive/1.jpg", caption: "Hull under test" }]
     videos       list of YouTube links, or .mp4 files in assets
                  e.g. ["https://www.youtube.com/watch?v=XXXXXXXXXXX"]
                  or   [{ url: "https://youtu.be/XXXXXXXXXXX", title: "Pool test" }]
   documents    list of PDFs shown in a built-in reader: { title: "Report", src: "assets/projects/<id>/report.pdf" }
     links        buttons: [{ label: "Source code", url: "https://github.com/..." }]

   AWARD fields: id, date, badge, title, detail, org, links, and highlight (true = shown as a
   top achievement). Awards do not have their own pages.

   Tip: keep each line inside quotes, separate items with commas, and keep the
   square brackets [ ] and curly braces { } balanced.
   ========================================================================== */

window.PORTFOLIO = {

  projects: [
    {
      id: "hex-dive",
      title: "HEX-DIVE",
      subtitle: "Autonomous Underwater Vehicle · SAUVC 2024",
      category: "Underwater Robotics",
      icon: "auv",
      featured: true,
      summary: "Autonomous underwater vehicle for SAUVC 2024, built around a Raspberry Pi and Arduino. It was developed for navigation, sensor integration, and underwater task execution.",
      description: [
        "HEX-DIVE is an autonomous underwater vehicle (AUV) developed by our team for the SAUVC 2024, an international underwater robotics competition. Built around a Raspberry Pi and an Arduino, the vehicle combines onboard computing and embedded control to support autonomous underwater operation.",
        "The project involved developing an integrated robotic platform capable of underwater navigation, sensor integration, and task execution. Bringing together mechanical design, electronics, software, and control systems, the development process required solving the challenges of building a reliable robot for an underwater environment."
      ],
      role: "Team leader",
      context: "SAUVC 2024, international underwater robotics competition",
      outcome: "Grand Prize, Instructables “Water” contest (Aug 2024)",
      tech: ["Raspberry Pi", "Arduino", "Sensors", "Autonomy"],
      cover: "assets/projects/hex-dive/cover.jpg",
      gallery: [
{ src: "assets/projects/hex-dive/1.jpg"},
{ src: "assets/projects/hex-dive/2.png"},
{ src: "assets/projects/hex-dive/3.png"},
{ src: "assets/projects/hex-dive/4.jpg"},
{ src: "assets/projects/hex-dive/5.jpg"},
{ src: "assets/projects/hex-dive/6.jpeg"},
{ src: "assets/projects/hex-dive/7.jpg"},
{ src: "assets/projects/hex-dive/8.jpeg"},
{ src: "assets/projects/hex-dive/9.jpg"},
{ src: "assets/projects/hex-dive/10.jpg"},
{ src: "assets/projects/hex-dive/11.jpg"},
{ src: "assets/projects/hex-dive/12.jpg"}
],
      videos: [
{ url: "https://youtu.be/UuvdwMVDttc?si=wW98uRSERZxGdHs1", title: "HEX-DIVE" },
{ url: "https://youtu.be/oe0xBPGk0t4?si=eH17bwu2WBa51k8D", title: "ROV Testing - 2" },
{ url: "https://youtube.com/shorts/91FgG7aG0N0?si=O7ivPLqDb4kQHhQI", title: "Testing Waterproofed MS5540 Pressure Sensor Underwater" },
{ url: "https://youtube.com/shorts/Isc05A2GirQ?si=ebj72JL_k_YrJFg2", title: "ESC Failure : HEX-DIVE" }
],

documents: [
  { title: "Singapore AUV Challenge 2024", src: "assets/projects/hex-dive/Singapore AUV Challenge 2024.pdf" }
],
      links: [
{ label: "Instructables", url: "https://www.instructables.com/Build-Your-Own-Underwater-Robot-V2" },
{ label: "SAUVC-2024", url: "https://sauvc.org/2024" }
]
    },
    {
      id: "sky-sow",
      title: "SKY-SOW",
      subtitle: "Multitasking Agricultural Drone",
      category: "Aerial Robotics",
      icon: "quad",
      featured: true,
      summary: "An agricultural drone that explores how aerial robotics, embedded hardware, and practical farming applications can work together. It runs on a Raspberry Pi and Arduino.",
      description: [
        "MTIAR-Multi-Tasking Intelligent Aerial Robot(SKYSOW) is a multifunctional aerial robotics concept designed to support smart agriculture, reforestation, and environmental monitoring. The system combines drone technology with IoT connectivity to help address challenges such as food production and deforestation.",
        "The proposed platform features a 1080p live-feed camera, GPS positioning, environmental sensors, and a seed capsule deployment mechanism. It uses a Raspberry Pi 3 B+ and Arduino-based electronics, with 4G connectivity for remote monitoring and data communication.",
        "A key feature is its custom-designed, 3D-printed seed capsules made from biodegradable PLA, intended for aerial seed dispersal. The system also incorporates obstacle and landing-distance detection, battery monitoring, and remote inspection capabilities."
      ],
      role: "Developer",
      context: "All Island Robotics and Innovation Competition",
      outcome: "3rd place, Ministry of Education, Sri Lanka (Dec 2023)",
      tech: ["Drone systems", "Arduino", "Raspberry Pi"],
      cover: "assets/projects/sky-sow/cover.jpg", gallery: [
{ src: "assets/projects/sky-sow/1.jpg"},
{ src: "assets/projects/sky-sow/2.JPG"},
{ src: "assets/projects/sky-sow/3.jpg"},
{ src: "assets/projects/sky-sow/4.jpg"},
{ src: "assets/projects/sky-sow/5.jpeg"},
{ src: "assets/projects/sky-sow/6.jpg"},
{ src: "assets/projects/sky-sow/7.jpg"},
{ src: "assets/projects/sky-sow/8.jpg"},
], videos: [], links: []
    },
    {
      id: "micromouse",
      title: "Micromouse Maze-Solving Robot",
      subtitle: "Autonomous Navigation · HEX-BOTZ",
      category: "Autonomous Robotics",
      icon: "maze",
      featured: true,
      summary: "An autonomous robot that navigates and solves a maze, bringing together sensing, decision-making, and movement.",
      description: [
        "Developed for the WARRIOR BOTS robotics competition organised by CINEC Campus, this autonomous robot was designed to explore and solve a 6 × 6 maze. The challenge involved navigating through different maze configurations, identifying the destination using colour detection, and determining an efficient route from the starting point.",
        "My work on this project involved leading the development process and contributing to the design and development of the robot's autonomous navigation capabilities. The project provided practical experience in robotics, embedded systems, maze-solving algorithms, and autonomous decision-making."
      ],
      role: "Team leader, HEX-BOTZ",
      context: "WARRIOR BOTS, CINEC Campus",
      outcome: "2nd place (Jul 2023)",
      tech: ["Embedded systems", "Navigation"],
      cover: "assets/projects/micromouse/cover.jpg", gallery: [
{ src: "assets/projects/micromouse/1.jpg"},
{ src: "assets/projects/micromouse/2.png"},
{ src: "assets/projects/micromouse/3.png"},
{ src: "assets/projects/micromouse/4.png"},
{ src: "assets/projects/micromouse/5.jpg"},
{ src: "assets/projects/micromouse/6.jpg"},
{ src: "assets/projects/micromouse/7.jpg"},
{ src: "assets/projects/micromouse/8.jpeg"}
],
documents: [
{ title: "THE WARRIORBOTS", src: "assets/projects/micromouse/THE WARRIORBOTS.pdf" },
{ title: "Chassis", src: "assets/projects/micromouse/Chassis.pdf" }
],
 videos: [], links: []
    },
    {
      id: "slrc-2023",
      title: "HEX-BOTZ – SLRC 2022/23",
      subtitle: "Autonomous Navigation · Task automation",
      category: "Autonomous Robotics",
      icon: "robot",
      summary: "An autonomous robot built by the HEX-BOTZ team for the Sri Lankan Robotics Challenge (SLRC), combining mechanical design, electronics, and embedded programming.",
      description: [
        "Designed and built an autonomous robot for the Sri Lankan Robotics Challenge (SLRC), organised by the University of Moratuwa.",
        "The project involved designing and 3D-printing the robot's main body and custom grabbing mechanism, developing PID-based line-following functionality, and implementing autonomous behaviours for wall following and box sorting. Powered by an Arduino Mega, the robot integrated mechanical design, electronics, and embedded programming to complete a series of competition challenges."
      ],
      role: "Team Leader, HEX-BOTZ",
      context: "Sri Lankan Robotics Challenge (SLRC 2022/23), University of Moratuwa",
      outcome: "Competed in SLRC 2022/23",
      tech: ["Embedded systems", "Robotics and automation", "Sensor integration", "Autonomous navigation"],
      cover: "assets/projects/slrc-2023/cover.png", gallery: [
{ src: "assets/projects/slrc-2023/1.jpeg"},
{ src: "assets/projects/slrc-2023/2.jpeg"},
{ src: "assets/projects/slrc-2023/3.jpeg"},
{ src: "assets/projects/slrc-2023/4.jpeg"},
{ src: "assets/projects/slrc-2023/5.png"},
{ src: "assets/projects/slrc-2023/6.jpg"},
{ src: "assets/projects/slrc-2023/7.png"},
{ src: "assets/projects/slrc-2023/8.png"},
{ src: "assets/projects/slrc-2023/9.jpg"}
],
documents: [
{ title: "SLRC-2022", src: "assets/projects/slrc-2023/SLRC-2022.pdf" }
],
 videos: [], links: []
    },
    {
      id: "rov-v1",
      title: "ROV V1",
      subtitle: "Tethered Underwater Robot",
      category: "Underwater Robotics",
      icon: "rov",
      featured: true,
      summary: "An Arduino-controlled underwater robot with three thrusters and a tether, built to explore remotely operated vehicle design and underwater movement.",
      description: [
        "An exploration into underwater robotics through the design and development of a custom-built Remotely Operated Vehicle (ROV). Built with a PVC frame, Arduino-based control system, multiple thrusters, and an onboard FPV camera, the ROV enables remotely controlled underwater movement and live video exploration.",
        "Developed over a year, this project involved mechanical design, electronics, embedded programming, fabrication, and practical testing. It also provided valuable experience in solving real-world engineering challenges, from buoyancy and stability to communication and system integration."
      ],
      role: "Builder",
      context: "Instructables “Make It Move” Contest",
      outcome: "Second prize (Sep 2021)",
      tech: ["Arduino", "Thrusters", "Tethered ROV"],
      cover: "assets/projects/rov-v1/cover.jpg", gallery: [
{ src: "assets/projects/rov-v1/1.jpg"},
{ src: "assets/projects/rov-v1/2.jpg"},
{ src: "assets/projects/rov-v1/3.png"},
{ src: "assets/projects/rov-v1/4.jpg"},
{ src: "assets/projects/rov-v1/5.jpg"},
{ src: "assets/projects/rov-v1/6.png"},
{ src: "assets/projects/rov-v1/7.jpg"},
{ src: "assets/projects/rov-v1/8.png"}

], videos: [
{ url: "https://youtu.be/h0NNWgSgrT8?si=tv6gaUmGk0DTxZBT", title: "ROV V1" }
], links: [
{ label: "Instructables", url: "https://www.instructables.com/Make-Your-Own-Underwater-ROV" },
]
    },

    {
      id: "quadcopter",
      title: "Arduino Powered Quadcopter",
      subtitle: "Arduino Based Flight Controller Prototype",
      category: "Aerial Robotics",
      icon: "quad",
      summary: "A quadcopter prototype built around an Arduino-based flight-control system, exploring how control electronics, motors, and airframe design interact.",
      description: [
        "Designed and developed an Arduino-powered quadcopter, exploring the fundamentals of multirotor aircraft, embedded systems, and flight control. The project involved integrating electronic components and developing the control system to create a custom aerial robotics platform.",
        "A key part of the project was designing and producing a custom PCB to organize and connect the quadcopter's electronics. The quadcopter was also used to display the school flag at an event, demonstrating its practical application beyond development and testing. This project provided hands-on experience in PCB design, circuit integration, hardware development, and embedded programming."
      ],
      tech: ["Arduino", "Flight control", "Prototyping"],
      cover: "assets/projects/quadcopter/cover.jpeg", gallery: [
{ src: "assets/projects/quadcopter/1.jpeg"},
{ src: "assets/projects/quadcopter/2.jpeg"},
{ src: "assets/projects/quadcopter/3.png"},
{ src: "assets/projects/quadcopter/4.PNG"},
{ src: "assets/projects/quadcopter/5.jpeg"},
{ src: "assets/projects/quadcopter/6.jpeg"},
{ src: "assets/projects/quadcopter/7.jpeg"}

], videos: [], links: []
    },
    {
      id: "hexacopter",
      title: "Multitasking Hexacopter",
      subtitle: "Aerial Platform",
      category: "Aerial Robotics",
      icon: "hex",
      summary: "A hexacopter built for complex manoeuvres and autonomous-mission experiments, including school-flag demonstrations at events.",
      description: [
        "Designed and built a multi-tasking hexacopter capable of performing complex flight manoeuvres and autonomous missions. The project explores the integration of multirotor flight systems, embedded control, and autonomous functionality to support a range of aerial tasks.",
        "One of its applications was performing school-flag demonstrations at events. The project provided practical experience in aerial robotics, flight control, autonomous systems, and integrating a multirotor platform for specialized real-world applications."
      ],
      tech: ["UAV", "Mechanical design", "Flight testing"],
      cover: "assets/projects/hexacopter/cover.png", gallery: [
{ src: "assets/projects/hexacopter/1.jpg"},
{ src: "assets/projects/hexacopter/2.jpg"}
], videos: [
{ url: "https://youtu.be/gM8rtiuY_vU?si=MXYNnfGTmqVG_wLd", title: "Hexacopter Flag Display" }
], links: []
    },
    {
      id: "model-plane",
      title: "Functional Model Plane",
      subtitle: "Trainer Aircraft",
      category: "Aircraft",
      icon: "plane",
      summary: "A functional trainer aircraft built to explore aerodynamics and flight systems.",
      description: [
        "Designed and built a fixed-wing remote-controlled aircraft at the age of 12, exploring the fundamentals of aerodynamics, aircraft structure, and flight. The project involved bringing together mechanical construction and practical problem-solving to create a functional model aircraft.",
        "This early project sparked my interest in aviation, aerospace engineering, and building real-world engineering systems."
      ],
      tech: ["Aerodynamics", "Flight systems"],
      cover: "assets/projects/model-plane/cover.jpg", gallery: [
{ src: "assets/projects/model-plane/1.jpg"}
], videos: [], links: []
    },
    {
      id: "james-develin-gym",
      title: "James Develin’s Gym",
      subtitle: "Conceptual Design · Instructables Contest",
      category: "Architectural Design",
      icon: "gym",
      summary: "A conceptual gym inspired by James Develin, focused on a functional and well-organised fitness space, submitted to an Instructables contest.",
      description: [
        "Created a conceptual gym design for the Instructables Design a Gym Contest, inspired by former NFL fullback James Develin. The project focused on planning and designing a functional training space, with an organised layout that makes effective use of the available area.",
        "Using Autodesk Fusion 360, I developed the 3D gym model and explored the arrangement of workout areas and the overall interior layout. This project combined 3D modelling, spatial planning, and creative design."
      ],
      role: "Independent designer",
      context: "Instructables – Design a Gym Contest",
      outcome: "Runner-Up(June 2021)",
      tech: ["Space planning", "Conceptual design", "3D design and visualisation"],
      cover: "assets/projects/james-develin-gym/cover.png", gallery: [
{ src: "assets/projects/james-develin-gym/1.png"},
{ src: "assets/projects/james-develin-gym/2.png"},
{ src: "assets/projects/james-develin-gym/3.png"},
{ src: "assets/projects/james-develin-gym/4.png"},
{ src: "assets/projects/james-develin-gym/5.png"},
{ src: "assets/projects/james-develin-gym/6.png"},
{ src: "assets/projects/james-develin-gym/7.png"},
{ src: "assets/projects/james-develin-gym/8.png"},
{ src: "assets/projects/james-develin-gym/9.png"},
{ src: "assets/projects/james-develin-gym/10.png"},
{ src: "assets/projects/james-develin-gym/11.png"},
{ src: "assets/projects/james-develin-gym/12.png"},
], videos: [
{ url: "https://youtu.be/k0hPXkXCyn0?si=LPIc_yuL3Rq3l_9W", title: "James Develin’s Gym" }
], links: [
{ label: "Instructables", url: "https://www.instructables.com/James-Develins-Gym-16" },
]
    },
    {
      id: "first-global-2023",
      title: "Robot Design – FIRST Global Challenge 2023",
      subtitle: "Mechanical Design · 3D CAD Modelling",
      category: "Robotics",
      icon: "cad",
      summary: "A robot concept for the FIRST Global Challenge 2023, designed in Autodesk Fusion 360 with a focus on mechanical layout, component arrangement, and task strategy.",
      description: [
        "Designed a robot concept inspired by the FIRST Global Challenge 2023 using Autodesk Fusion 360. The project focused on developing a mechanical design suited to the competition's objectives, with attention to the robot's structure, component arrangement, and overall functionality.",
        "The design process involved 3D CAD modelling, mechanical planning, and exploring how different components could be integrated into a functional robotics platform."
      ],
      role: "Robot Designer",
      context: "FIRST Global Challenge 2023",
      tools: "Autodesk Fusion 360",
      tech: ["3D CAD modelling", "Mechanical design", "Robotics system planning", "Engineering problem-solving"],
      cover: "assets/projects/first-global-2023/cover.png", gallery: [
{ src: "assets/projects/first-global-2023/1.png"},
{ src: "assets/projects/first-global-2023/2.png"},
{ src: "assets/projects/first-global-2023/3.png"},
{ src: "assets/projects/first-global-2023/4.png"},
{ src: "assets/projects/first-global-2023/5.png"},
{ src: "assets/projects/first-global-2023/6.png"},
{ src: "assets/projects/first-global-2023/7.png"},
{ src: "assets/projects/first-global-2023/8.png"},
{ src: "assets/projects/first-global-2023/9.png"},
{ src: "assets/projects/first-global-2023/10.png"},
{ src: "assets/projects/first-global-2023/11.png"},
], videos: [], links: []
    }
  ],

  awards: [
    {
      id: "slpho-2025", date: "Mar 2026", badge: "Merit", highlight: true,
      title: "Sri Lankan Physics Olympiad 2025",
      detail: "19th SLPhO · scored 77% in the national competition",
      org: "Institute of Physics, Sri Lanka",
      description: [], cover: "", gallery: [], videos: [], links: []
    },
    {
      id: "instructables-water-2024", date: "Aug 2024", badge: "Grand Prize",
      title: "Instructables “Water” contest",
      detail: "HEX-DIVE underwater robot",
      org: "Instructables",
      description: [], cover: "", gallery: [], videos: [], links: [{ label: "View the HEX-DIVE project", url: "project.html?id=hex-dive" }]
    },
    {
      id: "slrc-2024", date: "Mar 2024", badge: "2nd place",
      title: "Sri Lankan Robotics Challenge 2024",
      detail: "Team leader, HEX-BOTZ · robotics design and implementation",
      org: "University of Moratuwa",
      description: [], cover: "", gallery: [], videos: [], links: []
    },
    {
      id: "all-island-2023", date: "Dec 2023", badge: "3rd place",
      title: "All Island Robotics and Innovation Competition",
      detail: "SKY-SOW agricultural drone",
      org: "Ministry of Education, Sri Lanka",
      description: [], cover: "", gallery: [], videos: [],
      links: [{ label: "View the SKY-SOW project", url: "project.html?id=sky-sow" }]
    },
    {
      id: "warrior-bots-2023", date: "Jul 2023", badge: "2nd place",
      title: "WARRIOR BOTS micromouse competition",
      detail: "Team leader · maze-solving robot",
      org: "CINEC Campus",
      description: [], cover: "", gallery: [], videos: [], links: [{ label: "View the Micromouse project", url: "project.html?id=micromouse" }]
    },
    {
      id: "instructables-make-it-move-2021", date: "Sep 2021", badge: "Second prize",
      title: "Instructables “Make It Move” contest",
      detail: "ROV V1 tethered underwater robot",
      org: "Instructables",
      description: [], cover: "", gallery: [], videos: [], links: [{ label: "View the ROV V1 project", url: "project.html?id=rov-v1" }]
    },
    {
      id: "make-it-real-2021", date: "Jun 2021", badge: "Runner-up",
      title: "Make It Real Student Design Challenge #3",
      detail: "3D CAD model of a fitness center",
      org: "Instructables",
      description: [], cover: "", gallery: [], videos: [], links: [{ label: "View the James Develin’s Gym project", url: "project.html?id=james-develin-gym" }]
    }
  ],

  /* Leadership roles (no individual pages). Fields: date, role, title, detail, org */
  leadership: [
    { date: "Jan 2025 – Jan 2026", role: "Chief Organizer", title: "Senior Science Society", detail: "Organized science events, coordinated teams, and promoted STEM engagement.", org: "Dharmapala College, Pannipitiya" },
    { date: "2024", role: "Team leader", title: "HEX-BOTZ, Sri Lankan Robotics Challenge 2024", detail: "2nd place", org: "University of Moratuwa" },
    { date: "2024", role: "Team leader", title: "HEX-DIVE, SAUVC 2024", detail: "International underwater robotics competition", org: "SAUVC" },
    { date: "Jan 2023 – Dec 2024", role: "President", title: "Young Inventors’ Club", detail: "Led STEM activities, mentored students, and coordinated innovation projects.", org: "Dharmapala College, Pannipitiya" },
    { date: "2023", role: "Team leader", title: "HEX-BOTZ, WARRIOR BOTS 2023", detail: "2nd place · micromouse competition", org: "CINEC Campus" },
    { date: "2023", role: "Team leader", title: "HEX-BOTZ, MechatronX 2023", detail: "", org: "University of Moratuwa" },
    { date: "2022/23", role: "Team leader", title: "HEX-BOTZ, Sri Lankan Robotics Challenge 2022/23", detail: "", org: "University of Moratuwa" }
  ]
};
