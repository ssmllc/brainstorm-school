export type Sections = {
  category: string,
  faqs: [
    question: string,
    answer: string,
  ],
  slug: {
    current: string, 
    _type: 'slug'
  },
  sections: [
    section: string,
    category: string,
    courses: Course,
  ],
  details: {
    children: {
      text: string,
    }
    _type: 'block'
  }
}

export type Course = {
  _id: string;
  name: string;
  code: string;
  category: string;
  description: any;
  instructor: any;
  slug: {
    current: string, 
    _type: 'slug'
  },
  preview: any;
  schedule: Schedule[],
  section: string;
  time: string;
  duration: string;
};

export type Schedule = {
  title: string;
  profession: string;
  bio: string;
  registration: string;
  term: string;
  time: string;
  duration: string;
  start: string;
};