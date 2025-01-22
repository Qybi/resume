export interface CV {
  basics: Basics;
  work: Array<Work>;
  volunteer: Array<Volunteer>;
  education: Array<Education>;
  awards: Array<Awards>;
  certificates: Array<Certificates>;
  publications: Array<Publications>;
  skills: Array<Skills>;
  languages: Array<Languages>;
  interests: Array<Interests>;
  projects: Array<Projects>;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  theme: string;
  dob: DateStr;
  location: Location;
  profiles: Array<Profiles>;
  hobbies: Array<Hobbies>
}

interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

interface Profiles {
  icon: string,
  network: string;
  username: string;
  url: string;
}

interface Work {
  name: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr | null;
  summary: string;
  highlights: Highlight;
  skills: any;
}

type DateStr = `${string}-${string}-${string}`;

interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr;
  summary: string;
  highlights: Highlight;
}

interface Awards {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

interface Certificates {
  name: string;
  date: DateStr;
  issuer: string;
  url: string;
}

interface Publications {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: string;
  summary: string;
}

interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate: DateStr;
  score: string;
  courses: Array<string>;
}

interface Languages {
  language: Language;
  flag: string;
  fluency: string;
}

type Language =
  | "Spanish"
  | "English"
  | "German"
  | "French"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Russian"
  | string;

interface Projects {
  name: string;
  isActive: boolean;
  description: string;
  highlights: Highlight;
  url: string;
  github?: string;
}

interface Interests {
  name: string;
  keywords: Array<string>;
}

interface Hobbies {
  name: string;
  icon: string;
}

interface Skills {
  soft: any 
  power: any
}

type Highlight = Array<String>;
