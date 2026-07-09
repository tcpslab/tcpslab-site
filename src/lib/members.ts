export type Member = {
  name: string;
  slug: string;
  photoExt?: string;
  role: string;
  email: string;
  researchInterests?: string[];
};

export type AlumniMember = {
  name: string;
  slug: string;
  role: string;
  period: string;
};

export type EducationEntry = {
  period: string;
  degree: string;
  thesis?: string;
  advisor?: string;
};

export type ExperienceEntry = {
  period: string;
  title: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type AwardEntry = {
  date: string;
  title: string;
};

export const professor = {
  name: "Ji-Tae Kim",
  slug: "ji-tae-kim",
  role: "Assistant Professor",
  email: "jtkim@jnu.ac.kr",
  office: "CALS Building 1, Room 217",
  education: [
    {
      period: "2019.03 – 2024.02",
      degree: "Ph.D., Department of Biosystems Engineering, Seoul National University",
      thesis:
        "Development of off-road mobility prediction model for wheel using machine learning and numerical method",
      advisor: "Prof. Young-Jun Park",
    },
    {
      period: "2015.03 – 2019.02",
      degree:
        "B.S., Department of Bio-Industrial Machinery Engineering, Kongju National University",
    },
  ] satisfies EducationEntry[],
  experience: [
    {
      period: "2024.09 – Present",
      title:
        "Assistant Professor, Department of Convergence Biosystems Engineering, Chonnam National University",
    },
    {
      period: "2024.04 – 2024.07",
      title:
        "Post-Doctoral Researcher, Korea Research Institute of Ships & Ocean Engineering (KRISO)",
    },
    {
      period: "2024.03 – 2024.03",
      title:
        "Senior Researcher, Research Institute of Agriculture and Life Science, Seoul National University",
    },
  ] satisfies ExperienceEntry[],
  researchInterests: [
    "Modeling & Simulation of Terramechanics System",
    "Off-Road Vehicle Mobility",
    "Soil-Machine Interaction Analysis",
    "Design & Evaluation of Agricultural Machinery based on Actual Load",
  ],
  skills: [
    {
      category: "Programming",
      items: ["MATLAB & Simulink", "Python"],
    },
    {
      category: "Computer-Aided Testing, CAE",
      items: [
        "Gear System: MASTA [SMT], KISSSoft [KISSSoft AG]",
        "MBD: MotionSolve [Altair]",
        "DEM: EDEM [Altair]",
      ],
    },
  ] satisfies SkillCategory[],
  awards: [
    {
      date: "2023.11.03",
      title:
        "Outstanding Paper Presentation Award, Korean Society for Agricultural Machinery",
    },
    {
      date: "2023.05.03",
      title:
        "Future Ocean Science and Technology Award, President of the Korean Association of Ocean Science and Technology Societies",
    },
    {
      date: "2023.04.28",
      title:
        "Outstanding Paper Presentation Award, Korean Society for Agricultural Machinery",
    },
    {
      date: "2022.07.15",
      title:
        "Outstanding Paper Presentation Award, the Korean Society of Industry Convergence",
    },
    {
      date: "2022.06.27",
      title:
        "BK21 Four Coloquium Outstanding Graduate Student, Seoul National University BK21 4th Graduate Innovation Project Group",
    },
    {
      date: "2022.06.23",
      title:
        "Outstanding Presentation Award, the Korean Society of Marine Environment & Safety",
    },
    {
      date: "2021.04.30",
      title:
        "Outstanding Paper Presentation Award, Korean Society for Agricultural Machinery",
    },
    {
      date: "2020.11.06",
      title:
        "Outstanding Paper Presentation Award, the Korean Society of Manufacturing Process Engineers",
    },
  ] satisfies AwardEntry[],
};

export const researchers: Member[] = [
  {
    name: "Ji-Hwan Park",
    slug: "ji-hwan-park",
    photoExt: "png",
    role: "Master Course",
    email: "jihwanpark@jnu.ac.kr",
    researchInterests: [
      "Modeling & Simulation of Terramechanics System",
      "Soil-Machine Interaction Analysis",
    ],
  },
  {
    name: "Joon-Seo Kim",
    slug: "jun-seo-kim",
    role: "Master Course",
    email: "jskim_00@jnu.ac.kr",
    researchInterests: [
      "Modeling & Simulation of Terramechanics System",
      "Discrete Element Method (DEM)",
    ],
  },
  {
    name: "Moo-Young Oh",
    slug: "moo-young-oh",
    role: "Master Course",
    email: "mooyoungoh@jnu.ac.kr",
    researchInterests: [
      "Modeling & Simulation of Terramechanics System",
      "Off-road Vehicle Mobility",
    ],
  },
  {
    name: "Sang-Uk Park",
    slug: "sang-uk-park",
    role: "Undergraduate Student",
    email: "pes2937@naver.com",
  },
  {
    name: "Ju-Hyun Ahn",
    slug: "ju-hyun-ahn",
    role: "Undergraduate Student",
    email: "peachcraffe@gmail.com",
  },
  {
    name: "Seung-Yeon Lee",
    slug: "seung-yeon-lee",
    role: "Undergraduate Student",
    email: "vus0924@jnu.ac.kr",
  },
  {
    name: "Dan-A Kim",
    slug: "dan-a-kim",
    role: "Undergraduate Student",
    email: "da1800@jnu.ac.kr",
  },
  {
    name: "Se-Hee Park",
    slug: "se-hee-park",
    role: "Undergraduate Student",
    email: "bsehui57@jnu.ac.kr",
  },
];

export const alumni: AlumniMember[] = [
  {
    name: "Jae-Young Park",
    slug: "jae-young-park",
    role: "Undergraduate Student",
    period: "November 2024 – June 2025",
  },
  {
    name: "Hae-Jun Kim",
    slug: "hae-jun-kim",
    role: "Undergraduate Student",
    period: "November 2024 – December 2025",
  },
];
