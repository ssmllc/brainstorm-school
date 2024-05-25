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
      text: any,
    }
    _type: 'block'
  }
}

export type Course = {
  name: string;
  code: string;
  time: string;
  duration: string;
  preview: any;
  schedule: Schedule,
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