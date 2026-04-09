type SocialLinks = {
  email: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
};

type Experience = {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
};

type Education = {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
};

type Project = {
  name: string;
  description: string;
  link: string;
  skills: string[];
};

type Certification = {
  title: string;
  provider: string;
  date: string;
};

type Language = {
  language: string;
  level: string;
};

export const siteConfig = {
  name: "Mohammad Khalid Azizi",
  title: "Senior Family Medicine Specialist",
  description:
    "Professional medical profile of Dr. Mohammad Khalid Azizi with extensive clinical and hospital experience",
  accentColor: "#073ded",

  social: {
    email: "Khalidzz991@gmail.com",
  } as SocialLinks,

  aboutMe:
    "Experienced medical doctor and family medicine specialist with over 10 years of clinical experience in hospital and primary healthcare environments. Skilled in diagnosis, treatment planning, surgical assistance, and patient management across OPD and IPD settings. Strong ability to work under pressure, collaborate with medical teams, and deliver high-quality patient care.",

  coreCompetencies: [
    "Clinical Diagnosis & Treatment",
    "Primary Healthcare",
    "Emergency & Trauma Care",
    "Surgical Assistance",
    "Patient Monitoring",
    "Infection Control",
  ],

  skills: [
    "Patient Diagnosis",
    "Treatment Planning",
    "Emergency Care",
    "Surgery Assistance",
    "Medical Documentation",
    "MS Word",
    "MS Excel",
  ],

  languages: [
    { language: "Pashto", level: "Fluent" },
    { language: "Dari", level: "Fluent" },
    { language: "English", level: "Intermediate" },
  ] as Language[],

  certifications: [
    {
      title: "Orthopedic Surgery & Traumatology Training",
      provider: "Inje University & Seoul Paik Hospital, South Korea",
      date: "2011",
    },
    {
      title: "Infection Prevention Training",
      provider: "SCA",
      date: "2007",
    },
    {
      title: "Mental Health Training",
      provider: "SCA",
      date: "2008",
    },
  ] as Certification[],

  projects: [
    {
      name: "Hospital Patient Care & Surgical Support",
      description:
        "Managed patient diagnosis, treatment, and surgical assistance across multiple departments.",
      link: "",
      skills: ["Clinical Care", "Surgery", "Patient Monitoring"],
    },
  ] as Project[],

  experience: [
    {
      company: "Cure International Hospital, Kabul",
      title: "Family Medicine Resident",
      dateRange: "2017 - 2020",
      bullets: [
        "Completed specialization in family medicine",
        "Managed diagnosis and treatment of patients",
        "Participated in case conferences and hospital programs",
      ],
    },
    {
      company: "Bagram Korean Hospital",
      title: "MD Doctor",
      dateRange: "2010 - 2015",
      bullets: [
        "Handled OPD and IPD patient care",
        "Assisted in surgeries including orthopedic and C-section",
        "Provided pre and post operative care",
      ],
    },
    {
      company: "SCA Health Center",
      title: "MD Doctor + Health Coordinator",
      dateRange: "2007 - 2009",
      bullets: [
        "Provided primary healthcare services",
        "Diagnosed and treated patients",
        "Prescribed medication and preventive care",
      ],
    },
  ] as Experience[],

  education: [
    {
      school: "Cure International Hospital, Kabul",
      degree: "Family Medicine Specialist",
      dateRange: "2017 - 2020",
      achievements: ["Specialist Certificate"],
    },
    {
      school: "Kabul Medical University",
      degree: "Doctor of Medicine (MD)",
      dateRange: "1998 - 2006",
      achievements: ["MD Certificate"],
    },
    {
      school: "Omar-e-Farooq High School",
      degree: "Baccalaureate",
      dateRange: "1984 - 1996",
      achievements: ["Certificate"],
    },
  ] as Education[],
};