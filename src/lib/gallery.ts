export type GalleryItem = {
  slug: string;
  photoDir: string;
  title: string;
  date: string;
  category: string;
  description: string;
  intro?: string;
  presenters?: { name: string; topic: string }[];
  images: string[];
};

export const galleryItems: GalleryItem[] = [
  {
    slug: "2026-korea-military-science-and-technology-conference_260613",
    photoDir: "military-science-tech-conference",
    title: "2026 Korea Military Science and Technology Conference",
    date: "June 13, 2026",
    category: "Conference",
    description:
      "Lab members presented research on the mechanical properties of terrain for off-road virtual environments at the Korea Institute of Military Science and Technology (KIMST) conference held at ICC Jeju.",
    intro:
      "We went to the Korea Institute of Military Science and Technology (KIMST) held at ICC Jeju!",
    presenters: [
      {
        name: "Joon-Seo Kim, Moo-Young Oh, Ji-Hwan Park",
        topic: "야지 가상환경 구현을 위한 지반의 역학적 특성 방법론 사례 연구",
      },
    ],
    images: ["military-science-tech-conference_1.avif"],
  },
  {
    slug: "ksam-2026-spring-conference_260515",
    photoDir: "agricultural-machinery-conference-spring-2026",
    title: "KSAM 2026 Spring Conference",
    date: "May 15, 2026",
    category: "Conference",
    description:
      "Presentations on cone index prediction, lunar rover wheel design, and 3D particle shape modeling at the Korean Society for Agricultural Machinery (KSAM) conference held at Sono Belle Jeju.",
    intro:
      "We went to the Korean Society for Agricultural Machinery (KSAM) conference held at Sono Belle Jeju!",
    presenters: [
      {
        name: "Joon-Seo Kim",
        topic: "물리 유도 신경망을 이용한 원추지수 예측모델 개발",
      },
      {
        name: "Moo-Young Oh",
        topic: "달 탐사 로버 차륜의 설계 변수가 주행성에 미치는 영향 분석",
      },
      {
        name: "Ji-Hwan Park",
        topic: "인공지능-통계적 추정을 통한 3차원 입자 형상 정의 및 이산요소모델 개발",
      },
    ],
    images: Array.from(
      { length: 6 },
      (_, i) => `agricultural-machinery-conference-spring-2026_${i + 1}.avif`,
    ),
  },
  {
    slug: "ksam-2025-fall-conference_251029",
    photoDir: "agricultural-machinery-conference-fall-2025",
    title: "KSAM 2025 Fall Conference",
    date: "October 29, 2025",
    category: "Conference",
    description:
      "Presentations on hybrid cone index prediction and multi-objective gear design, plus participation in the agricultural robot competition, at the KSAM conference held at Jeonnam Agricultural Research & Extension Service.",
    intro:
      "We went to the Korean Society for Agricultural Machinery (KSAM) conference held at Jeonnam Agricultural Research & Extension Service!",
    presenters: [
      {
        name: "Hae-Jun Kim, Joon-Seo Kim",
        topic: "경험식과 신경망을 이용한 하이브리드 원추지수 예측 모델 개발",
      },
      {
        name: "Joon-Seo Kim, Moo-Young Oh",
        topic: "사전 지식 주입 신경망을 이용한 다목적 기어 설계",
      },
      {
        name: "Ji-Hwan Park",
        topic: "6th Agricultural Robot Competition",
      },
    ],
    images: [
      "agricultural-machinery-conference-fall-2025_1.avif",
      "agricultural-machinery-conference-fall-2025_2.webp",
      "agricultural-machinery-conference-fall-2025_3.webp",
      "agricultural-machinery-conference-fall-2025_4.avif",
      "agricultural-machinery-conference-fall-2025_5.webp",
    ],
  },
  {
    slug: "kriso-seminar_250826",
    photoDir: "kriso-seminar",
    title: "KRISO Seminar",
    date: "August 26, 2025",
    category: "Seminar",
    description:
      "Lab visit to the Korea Research Institute of Ships & Ocean Engineering (KRISO) in Geoje for a seminar.",
    intro:
      "We went to KRISO (Korea Research Institute of Ships & Ocean Engineering) in Geoje for a seminar!",
    images: ["kriso-seminar_1.avif", "kriso-seminar_2.avif"],
  },
  {
    slug: "snu-jnu-joint-mt_250820",
    photoDir: "joint-mt-activity",
    title: "SNU-JNU Joint MT",
    date: "August 20, 2025",
    category: "MT",
    description:
      "Joint team-building retreat with Professor Young-Jun Park (MP Lab) of Seoul National University, Professor Joo-Seon Oh (ORMS Lab) of Chonnam National University, and Professor Ji-Tae Kim of TCPS Lab.",
    intro:
      "We went on a Joint MT with Professor Young-Jun Park (MP Lab) of Seoul National University, Professor Joo-Seon Oh (ORMS Lab) of Chonnam National University, and Professor Ji-Tae Kim of TCPS Lab of Chonnam National University!",
    images: ["joint-mt-activity_1.avif"],
  },
  {
    slug: "2025-gear-train-conference_250811",
    photoDir: "gear-train-conference",
    title: "2025 Gear Train Conference",
    date: "August 11, 2025",
    category: "Conference",
    description:
      "Conference participation at the Gear Train conference held at Seoul National University.",
    intro: "We went to the Geartrain conference held at Seoul National University!",
    images: ["gear-train-conference_1.avif"],
  },
  {
    slug: "add-seminar-and-field-trip_250716",
    photoDir: "add-seminar-field-trip",
    title: "ADD Seminar and Field Trip",
    date: "July 16, 2025",
    category: "Seminar",
    description:
      "Seminar and field trip to the Agency for Defense Development (ADD) in Changwon.",
    intro:
      "We went on a seminar and field trip to the ADD (Agency for Defense Development) in Changwon!",
    images: [
      "add-seminar-field-trip_1.avif",
      "add-seminar-field-trip_2.webp",
      "add-seminar-field-trip_3.webp",
    ],
  },
  {
    slug: "2025-spring-graduation-presentation_250620",
    photoDir: "graduation-presentation",
    title: "2025 Spring Graduation Presentation",
    date: "June 20, 2025",
    category: "Presentation",
    description:
      "Joon-Seo Kim & Moo-Young Oh won the grand prize at the graduation presentation research conference.",
    intro:
      "We attended the graduation presentation research conference and Joon-Seo Kim & Moo-Young Oh won the grand prize!",
    presenters: [
      {
        name: "Joon-Seo Kim, Moo-Young Oh",
        topic: "인공지능을 활용한 기어 매개변수 추정",
      },
      {
        name: "Hae-Jun Kim, Jae-Young Park",
        topic: "설계 변수 영향에 따른 달 탐사 로버 주행 성능 분석",
      },
    ],
    images: [
      "graduation-presentation_1.avif",
      "graduation-presentation_2.avif",
    ],
  },
  {
    slug: "2024-winter-lab-mt_250224",
    photoDir: "winter-mt",
    title: "2024 Winter Lab MT",
    date: "February 24, 2025",
    category: "MT",
    description:
      "Professor and undergraduate researchers went on a winter team retreat in Yeosu.",
    intro: "Professor and undergraduate researchers went on a winter MT in Yeosu!",
    images: Array.from({ length: 5 }, (_, i) => `winter-mt_${i + 1}.avif`),
  },
];
