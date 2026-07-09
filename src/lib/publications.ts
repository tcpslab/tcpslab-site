export type PublicationCategory =
  | "International Journal"
  | "International Conference"
  | "Domestic Journal"
  | "Domestic Conference"
  | "Patents";

export type Publication = {
  category: PublicationCategory;
  year: number;
  date: string;
  title: string;
  authors: string;
  venue: string;
  link?: string;
  extra?: string;
};

export const publicationCategories: PublicationCategory[] = [
  "International Journal",
  "International Conference",
  "Domestic Journal",
  "Domestic Conference",
  "Patents",
];

export const publications: Publication[] = [
  // International Journal
  {
    category: "International Journal",
    year: 2026,
    date: "March 2026",
    title:
      "Determination of design requirements and characteristic analysis of powertrain configurations for electric tractors based on actual agricultural workload",
    authors:
      "Da-Vin Ahn, Ji-Tae Kim, Kyeongdae Kim, Gyu-Ha Han, Seung-Je Cho, Wongun Kim and Young-Jun Park",
    venue: "Scientific Reports",
    link: "https://www.nature.com/articles/s41598-026-44453-0",
  },
  {
    category: "International Journal",
    year: 2025,
    date: "December 2025",
    title:
      "Development and performance evaluation of a PTO-based power assist system to improve traction force for electric tractors",
    authors:
      "Da-Vin Ahn, Kyeongdae Kim, Seung-Je Cho, Kyu-Jeong Choi, Ji-Tae Kim and Wongun Kim",
    venue: "Scientific Reports",
    link: "https://nature.com/articles/s41598-025-31465-5",
  },
  {
    category: "International Journal",
    year: 2025,
    date: "June 2025",
    title:
      "Evaluation of fatigue life using virtual iteration method for electric agricultural tractor frames",
    authors:
      "Ji-Tae Kim, Huisu Hwang, Ho-Seop Lee, Jung-Ho Park, Hyun-Woo Han, Seung-Je Cho and Young-Jun Park",
    venue: "IMechE, Part K: Journal of Multi-body Dynamics",
    link: "https://doi.org/10.1177/14644193251343967",
  },
  {
    category: "International Journal",
    year: 2025,
    date: "June 2025",
    title:
      "Development of a numerical model for KLS-1 and mobility analyses based on the effects of design variables",
    authors: "Ji-Tae Kim, Tae-Kyeong Yeu and Young-Jun Park",
    venue: "Advances in Space Research",
    link: "https://doi.org/10.1016/j.asr.2025.03.024",
  },
  {
    category: "International Journal",
    year: 2024,
    date: "December 2024",
    title:
      "Development of a DEM-ANN based hybrid terramechanics model considering dynamic sinkage",
    authors: "Ji-Tae Kim, Ho-Seop Lee and Young-Jun Park",
    venue: "Journal of Terramechanics",
    link: "https://doi.org/10.1016/j.jterra.2024.100989",
  },
  {
    category: "International Journal",
    year: 2023,
    date: "December 2023",
    title:
      "Optimization of grouser shape ratio for coastal terrain driving device using discrete element method",
    authors: "Ji-Tae Kim, Hyuek-Jin Choi, Jae-Won Oh and Young-Jun Park",
    venue: "Journal of Terramechanics",
    link: "https://doi.org/10.1016/j.jterra.2023.07.004",
  },
  {
    category: "International Journal",
    year: 2023,
    date: "March 2023",
    title:
      "Multi-body dynamics modeling and driving performance evaluation of oil recovery vehicle",
    authors:
      "Ji-Tae Kim, Dong-U Im, Hyuek-Jin Choi, Jae-Won Oh, Jaho Seo and Young-Jun Park",
    venue: "IMechE, Part K: Journal of Multi-body Dynamics",
    link: "https://doi.org/10.1177/14644193221134161",
  },
  {
    category: "International Journal",
    year: 2022,
    date: "June 2022",
    title: "Maize harvester gearbox design modification for improved fatigue life",
    authors:
      "Ji-Tae Kim, Ho-Seop Lee, Jung-Ho Park, Jae-Keun Woo, Il-Su Choi, Young-Keun Kim, Seung-Je Cho, Chang-Sub Ha and Young-Jun Park",
    venue: "Scientific Reports",
    link: "https://doi.org/10.21203/rs.3.rs-1768567/v1",
  },
  {
    category: "International Journal",
    year: 2022,
    date: "April 2022",
    title:
      "Experimental analysis of mechanical properties of coastal terrain via bevameter tests",
    authors:
      "Ji-Tae Kim, Dong-U Im, Jung-Ho Park, Hyuek-Jin Choi, Jae-Won Oh, Seung-Je Cho and Young-Jun Park",
    venue: "Journal of Terramechanics",
    link: "https://doi.org/10.1016/j.jterra.2021.12.001",
  },
  {
    category: "International Journal",
    year: 2021,
    date: "February 2021",
    title:
      "Development and performance evaluation of a bevameter for measuring soil strength",
    authors: "Ji-Tae Kim, Dong-U Im, Hyuek-Jin Choi, Jae-Won Oh and Young-Jun Park",
    venue: "Sensors",
    link: "https://doi.org/10.3390/s21041541",
  },
  {
    category: "International Journal",
    year: 2021,
    date: "February 2021",
    title:
      "Measurement of stiffness and damping coefficient of rubber tractor tires using dynamic cleat test based on point contact model",
    authors:
      "Hogil Yoo, Joo-Seon Oh, Woo-Jin Chung, Hyun-Woo Han, Ji-Tae Kim, Young-Jun Park and Yoonna Park",
    venue: "International Journal of Agricultural and Biological Engineering",
    link: "https://doi.org/10.25165/j.ijabe.20211401.5799",
  },
  {
    category: "International Journal",
    year: 2021,
    date: "January 2021",
    title:
      "Prediction of synchronization time for tractor power-shift transmission using multi-body dynamic simulation",
    authors:
      "Hyun-Woo Han, Jung-Su Han, Woo-Jin Chung, Ji-Tae Kim and Young-Jun Park",
    venue: "Transactions of the ASABE",
    link: "https://doi.org/10.13031/trans.14233",
  },
  {
    category: "International Journal",
    year: 2021,
    date: "January 2021",
    title:
      "Reduction of torsional vibration in resonance phenomena for tractor power take-off drivelines using torsional damper",
    authors:
      "Da-Vin Ahn, In-Kyung Shin, Joo-Seon Oh, Woo-Jin Chung, Hyun-Woo Han, Ji-Tae Kim and Young-Jun Park",
    venue: "Transactions of the ASABE",
    link: "https://doi.org/10.13031/trans.13971",
  },
  {
    category: "International Journal",
    year: 2020,
    date: "July 2020",
    title:
      "Analytical study of floating effects on load sharing characteristics of planetary gearbox for off-road vehicle",
    authors:
      "Woo-Jin Chung, Joo-Seon Oh, Hyun-Woo Han, Ji-Tae Kim and Young-Jun Park",
    venue: "Advances in Mechanical Engineering",
    link: "https://doi.org/10.1177/1687814020940468",
  },
  {
    category: "International Journal",
    year: 2020,
    date: "January 2020",
    title: "Evaluation of tractor ride vibrations by cab suspension system",
    authors:
      "Joo-Seon Oh, Woo-Jin Chung, Hyun-Woo Han, Ji-Tae Kim, Gwan-Hee Son and Young-Jun Park",
    venue: "Transactions of the ASABE",
    link: "https://doi.org/10.13031/trans.13795",
  },
  {
    category: "International Journal",
    year: 2019,
    date: "September 2019",
    title:
      "Engine speed control system for improving the fuel efficiency of agricultural tractors for plowing operations",
    authors:
      "Jin Woong Lee, Su Chul Kim, Joo-Seon Oh, Woo-Jin Chung, Hyun-Woo Han, Ji-Tae Kim and Young-Jun Park",
    venue: "Applied Sciences",
    link: "https://doi.org/10.3390/app9183898",
  },

  // International Conference
  {
    category: "International Conference",
    year: 2023,
    date: "November 21, 2023",
    title:
      "Development of Bevameter for Measuring Mechanical Properties of Soil",
    authors: "Ji-Tae Kim, Dong-U Im, Hyuek-Jin Choi, Jae-Won Oh, Young-Jun Park",
    venue:
      "International Symposium on Precision Engineering and Sustainable Manufacturing (PRESM2020), Korea",
    extra: "Poster",
  },
  {
    category: "International Conference",
    year: 2022,
    date: "December 8, 2022",
    title:
      "Optimization of Grouser Shape Ratio in Coastal Terrain using Discrete Element Method",
    authors:
      "Ji-Tae Kim, Huisu Hwang, Hyuek-Jin Choi, Jae-Won Oh, Seung-Je Cho, Young-Jun Park",
    venue: "The XX CIGR World Congress 2022, Japan",
    extra: "Oral",
  },
  {
    category: "International Conference",
    year: 2022,
    date: "December 8, 2022",
    title: "Development of Edible Maize Model using Discrete Element Method",
    authors: "Ho-Seop Lee, Ji-Tae Kim, Jae-Keun Woo, Chang-Sub Ha, Young-Jun Park",
    venue: "The XX CIGR World Congress 2022, Japan",
    extra: "Poster",
  },
  {
    category: "International Conference",
    year: 2019,
    date: "July 8, 2019",
    title:
      "Improvement of Dynamic Stiffness for Vibration Reduction of Electric Off-Road Vehicle Gearbox Housing",
    authors: "Gwan-Hee Son, Seung-Je Cho, Hyun-Woo Han, Ji-Tae Kim, Young-Jun Park",
    venue: "2019 ASABE Annual International Meeting, USA",
    extra: "Poster",
  },

  // Domestic Journal
  {
    category: "Domestic Journal",
    year: 2025,
    date: "December 2025",
    title:
      "Analysis of the Missing-Plant Rate of Garlic Sowing System Using Discrete Element Method",
    authors: "Ho-Seop Lee, Young-Jun Park and Ji-Tae Kim",
    venue: "Journal of Agriculture & Life Science",
    link: "https://doi.org/10.14397/jals.2025.59.6.269",
  },
  {
    category: "Domestic Journal",
    year: 2024,
    date: "February 2024",
    title:
      "Development of Soil Discrete Element Model Using Parameter Sensitivity Analysis",
    authors:
      "Ji-Tae Kim, Ho-Seop Lee, Huisu Hwang, Seung-Je Cho, Jeong-Gil Kim, Young-joo Kim and Young-Jun Park",
    venue: "Journal of Agriculture & Life Science",
    link: "https://doi.org/10.14397/jals.2024.58.1.97",
  },
  {
    category: "Domestic Journal",
    year: 2023,
    date: "September 2023",
    title:
      "Performance Analysis of a Maize Harvester Detach-System Using Discrete Element Method (DEM)",
    authors:
      "Ho-Seop Lee, Ji-Tae Kim, Young-Jun Park, Jae-Keun Woo, Chang-Sub Ha, Dongkeun Lee and Sung-bo Shim",
    venue: "Journal of Agricultural, Life Environmental Sciences",
    link: "https://doi.org/10.22698/jales.20230019",
  },
  {
    category: "Domestic Journal",
    year: 2023,
    date: "February 2023",
    title: "Development of Stalk Model of Edible Maize Using Discrete Element Method (DEM)",
    authors: "Ho-Seop Lee, Ji-Tae Kim, Jae-Keun Woo, Chang-Sub Ha and Young-Jun Park",
    venue: "Journal of Agriculture & Life Science",
    link: "https://doi.org/10.14397/jals.2023.57.2.121",
  },
  {
    category: "Domestic Journal",
    year: 2022,
    date: "November 2022",
    title:
      "A Study on the Prediction of Driving Performance of Agricultural Tractors Driving on Dry Sand",
    authors: "Ji-Tae Kim, Dong-U Im, Seung-Je Cho and Young-Jun Park",
    venue: "Journal of Biosystems Engineering",
    link: "https://doi.org/10.1007/s42853-022-00164-8",
  },
  {
    category: "Domestic Journal",
    year: 2021,
    date: "November 2021",
    title: "Determination of design loads of maize harvester using actual working load",
    authors:
      "Ji-Tae Kim, Ho-Seop Lee, Seung-Je Cho, Jae-Keun Woo, Chang-Sub Ha and Young-Jun Park",
    venue: "Journal of Agriculture & Life Science",
    link: "https://doi.org/10.14397/jals.2022.56.1.77",
  },
  {
    category: "Domestic Journal",
    year: 2021,
    date: "November 2021",
    title:
      "Drawbar Pull Estimation in Agricultural Tractor Tires on Asphalt Road Surface using Magic Formula",
    authors:
      "Kyeongdae Kim, Ji-Tae Kim, Da-Vin Ahn, Jung-Ho Park, Seung-Je Cho and Young-Jun Park",
    venue: "Journal of the Korean Society of Manufacturing Process Engineers",
    link: "https://doi.org/10.14775/ksmpe.2021.20.11.092",
  },
  {
    category: "Domestic Journal",
    year: 2020,
    date: "January 2020",
    title:
      "Structural design of garlic plants footplate considering physical characteristics of elderly women",
    authors:
      "Ji-Tae Kim, Hyun-Woo Han, Joo-Seon Oh, Woo-Jin Chung, Seung-Je Cho and Young-Jun Park",
    venue: "Journal of Biosystems Engineering",
    link: "https://doi.org/10.1007/s42853-019-00039-5",
  },
  {
    category: "Domestic Journal",
    year: 2019,
    date: "July 2019",
    title: "Vibration Analysis of Gearbox for Agricultural UTV using a Reduced-Order Model",
    authors:
      "Beom-Soo Kim, Seung-Je Cho, In-Kyung Shin, Woo-Jin Chung, Hyun-Woo Han, Ji-Tae Kim and Young-Jun Park",
    venue: "Journal of the Korean Society of Manufacturing Process Engineers",
    link: "https://doi.org/10.14775/ksmpe.2019.18.8.008",
  },

  // Domestic Conference
  {
    category: "Domestic Conference",
    year: 2026,
    date: "June 10, 2026",
    title: "야지 가상환경 구현을 위한 지반의 역학적 특성 방법론 사례 연구",
    authors: "Joon-Seo Kim, Moo-Young Oh, Ji-Hwan Park and Ji-Tae Kim",
    venue: "Korea Institute of Military Science and Technology",
    extra: "Oral",
  },
  {
    category: "Domestic Conference",
    year: 2026,
    date: "May 15, 2026",
    title: "달 탐사 로버 차륜의 설계 변수가 주행성에 미치는 영향 분석",
    authors: "Moo-Young Oh, Ju-Hyun Ahn, Dan-A Kim, Seung-Je Cho and Ji-Tae Kim",
    venue: "Korean Society for Agricultural Machinery",
    extra: "Oral",
  },
  {
    category: "Domestic Conference",
    year: 2026,
    date: "May 15, 2026",
    title: "물리 유도 신경망을 이용한 원추지수 예측모델 개발",
    authors: "Joon-Seo Kim, Sang-Wook Park, Seung-Yeon Lee and Ji-Tae Kim",
    venue: "Korean Society for Agricultural Machinery",
    extra: "Oral",
  },
  {
    category: "Domestic Conference",
    year: 2026,
    date: "May 15, 2026",
    title: "인공지능-통계적 추정을 통한 3차원 입자 형상 정의 및 이산요소모델 개발",
    authors: "Ji-Hwan Park, Se-Hee Park, Seung-Je Cho and Ji-Tae Kim",
    venue: "Korean Society for Agricultural Machinery",
    extra: "Oral",
  },
  {
    category: "Domestic Conference",
    year: 2025,
    date: "October 29, 2025",
    title: "사전 지식 주입 신경망을 이용한 다목적 기어 설계",
    authors: "Joon-Seo Kim, Moo-Young Oh, Sang-Wook Park, Seung-Je Cho and Ji-Tae Kim",
    venue: "Korean Society for Agricultural Machinery",
    extra: "Poster",
  },
  {
    category: "Domestic Conference",
    year: 2025,
    date: "October 29, 2025",
    title: "경험식과 신경망을 이용한 하이브리드 원추지수 예측 모델 개발",
    authors: "Hae-Jun Kim, Joon-Seo Kim, Sang-Wook Park and Ji-Tae Kim",
    venue: "Korean Society for Agricultural Machinery",
    extra: "Poster",
  },

  // Patents
  {
    category: "Patents",
    year: 2023,
    date: "November 13, 2023",
    title: "그라우저의 토양 추진력 측정장치",
    authors: "김지태, 임동우, 박영준",
    venue: "특허 제 10-2603321 호",
    link: "https://patents.google.com/patent/KR20230059316A",
  },
  {
    category: "Patents",
    year: 2022,
    date: "February 21, 2022",
    title: "토양 특성 측정장치",
    authors: "김지태, 임동우, 박영준",
    venue: "특허 제 10-2367344 호",
    link: "https://patents.google.com/patent/KR102367344B1",
  },
];
