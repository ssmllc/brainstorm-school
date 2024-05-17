"use client";

import { createContext, useEffect, useState } from "react";
import { Course } from "../types/types";

export const BrainstormContext = createContext({});

export const BrainstormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = encodeURI(
          'https://y8rjsgga.api.sanity.io/v2024-04-09/data/query/production?query=*[_type=="courses"] {track, category, title, slug, code, time, term, start, instructor, bio, preview {asset -> {url}}, tags[] -> {title, description}, details[0] { children[0] {text}}}'
        );
        const response = await fetch(query, { cache: "no-store" });

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const { result } = await response.json();
        remapCourses(result);
      } catch (error: any) {
        setError(error);
      }
    };

    fetchData();

    const remapCourses = (result: Course[]) => {
      if (result) {
        let sanitizedData: Course[] = [];
        result.map((course: Course) => {
          sanitizedData = [
            ...sanitizedData,
            {
              track: course.track,
              category: course.category,
              title: course.title,
              slug: course.slug?.current,
              code: course.code,
              time: course.time,
              term: course.term,
              start: course.start,
              instructor: course.instructor,
              bio: course.bio,
              preview: course?.preview?.asset,
              tags: course.tags,
              details: course.details?.children?.text,
            },
          ];
        });
        setCourses(sanitizedData);
      }
    };
  }, []);

  return (
    <BrainstormContext.Provider
      value={{
        courses,
        error,
      }}
    >
      {children}
    </BrainstormContext.Provider>
  );
};
