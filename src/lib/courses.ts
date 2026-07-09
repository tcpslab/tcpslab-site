export type CourseLevel = "Undergraduate" | "Graduate";

export type Course = {
  number: number;
  semester: string;
  title: string;
  level: CourseLevel;
  code: string;
  location: string;
  schedule: string;
  description: string;
};

export const courses: Course[] = [
  {
    number: 12,
    semester: "2026 Spring",
    title: "Agricultural Machinery and Practice",
    level: "Undergraduate",
    code: "AGE4038-1",
    location: "No. 213, CALS Bldg 2",
    schedule: "Monday 7-8, Wednesday 7-8",
    description:
      "Learn the structure, operating principle, performance, and characteristics of agricultural work machines required for agricultural production and harvesting processes to cultivate basic knowledge and operational capabilities for agricultural work machines.",
  },
  {
    number: 11,
    semester: "2026 Spring",
    title: "Biosystems Mechanical Design",
    level: "Undergraduate",
    code: "BSE0011-1",
    location: "No. 213, CALS Bldg 2",
    schedule: "Monday 2-3, Wednesday 2",
    description:
      "The basic knowledge required for biological industrial machine design is transmitted through theory, and the design ability is cultivated by mastering specialized knowledge and acquiring design principles and design processes for various biological industrial machine elements.",
  },
  {
    number: 10,
    semester: "2026 Spring",
    title: "Fundamentals of Advanced Agricultural Mechanical Engineering",
    level: "Undergraduate",
    code: "BSE0015-1",
    location: "No. 501, CALS Bldg 2",
    schedule: "Tuesday 6-7",
    description:
      "Introduce traditional agricultural machinery and agricultural work. In addition, it introduces the major knowledge applied to the design and development of agricultural machinery, focusing on classical mechanics.",
  },
  {
    number: 9,
    semester: "2025 Fall",
    title: "Biosystems Capstone Design 1",
    level: "Undergraduate",
    code: "AGE4038-1",
    location: "No. 411, CALS Bldg 2",
    schedule: "Tuesday 6, Thursday 6-7",
    description:
      "In order to create and spread new knowledge and technologies, practical talents with both creativity and field adaptability are required. In this subject, the entire process of creative design, production, and performance evaluation of biosystems engineering knowledge learned in the major.",
  },
  {
    number: 8,
    semester: "2025 Fall",
    title: "Mechanics of Materials for Biological Applications",
    level: "Undergraduate",
    code: "AGE4061-1",
    location: "No. 411, CALS Bldg 2",
    schedule: "Tuesday 2, Thursday 2",
    description:
      "This course provides a basic knowledge on mechanics of materials for biosystems engineering. This course deals with structural and physical characteristics as well as basic mechanics of materials concepts such as stress, strain, tension, compression, torsion of biomaterials.",
  },
  {
    number: 7,
    semester: "2025 Fall",
    title: "Biosystems Reliability Engineering",
    level: "Graduate",
    code: "GR25577-1",
    location: "No. 214, CALS Bldg 2",
    schedule: "Wednesday 7-9",
    description:
      "Learn theories and test methods to evaluate the reliability of off-road machinery (agricultural machinery, construction machinery, etc.), agricultural machinery (dryers, separators, etc.), and its components. It also introduces basic theories of probability and statistics, accelerated life test methods, failure data analysis, and reliability test plans to understand the life distribution of systems or parts.",
  },
  {
    number: 6,
    semester: "2025 Summer",
    title: "Fundamentals of Advanced Agricultural Mechanical Engineering",
    level: "Undergraduate",
    code: "BSE0015-1",
    location: "No. 411, CALS Bldg 2",
    schedule: "Intensive (Monday–Friday, hours 1-4)",
    description:
      "Introduce traditional agricultural machinery and agricultural work. In addition, it introduces the major knowledge applied to the design and development of agricultural machinery, focusing on classical mechanics.",
  },
  {
    number: 5,
    semester: "2025 Spring",
    title: "Biosystems Mechanical Design",
    level: "Undergraduate",
    code: "BSE0011-1",
    location: "No. 213, CALS Bldg 2",
    schedule: "Monday 5-6, Wednesday 5",
    description:
      "The basic knowledge required for biological industrial machine design is transmitted through theory, and the design ability is cultivated by mastering specialized knowledge and acquiring design principles and design processes for various biological industrial machine elements.",
  },
  {
    number: 4,
    semester: "2025 Spring",
    title: "Fundamentals of Advanced Agricultural Mechanical Engineering",
    level: "Undergraduate",
    code: "BSE0015-1",
    location: "No. 102, CALS Bldg 1",
    schedule: "Monday 10-12",
    description:
      "Introduce traditional agricultural machinery and agricultural work. In addition, it introduces the major knowledge applied to the design and development of agricultural machinery, focusing on classical mechanics.",
  },
  {
    number: 3,
    semester: "2025 Spring",
    title: "Soil-Machine System",
    level: "Graduate",
    code: "GR25577-1",
    location: "No. 212, CALS Bldg 2",
    schedule: "Wednesday 7-9",
    description:
      "The purpose of the class is to understand the basic concepts and principles of the physical and mechanical characteristics and destruction of the soil, and to learn about the interaction principles of soil mechanical systems such as serology and soil cutting based on them. In addition, by applying this, it is intended to cultivate knowledge that can predict the towing performance of off-road vehicles and design soil cutting devices.",
  },
  {
    number: 2,
    semester: "2024 Fall",
    title: "Biosystems Capstone Design 1",
    level: "Undergraduate",
    code: "AGE4038-1",
    location: "No. 405, CALS Bldg 2",
    schedule: "Monday 1-2, Wednesday 1-2",
    description:
      "In order to create and spread new knowledge and technologies, practical talents with both creativity and field adaptability are required. In this subject, the entire process of creative design, production, and performance evaluation of biosystems engineering knowledge learned in the major.",
  },
  {
    number: 1,
    semester: "2024 Fall",
    title: "Mechanics of Materials for Biological Applications",
    level: "Undergraduate",
    code: "AGE4061-1",
    location: "No. 213, CALS Bldg 2",
    schedule: "Monday 5-6, Wednesday 5",
    description:
      "This course provides a basic knowledge on mechanics of materials for biosystems engineering. This course deals with structural and physical characteristics as well as basic mechanics of materials concepts such as stress, strain, tension, compression, torsion of biomaterials.",
  },
];
