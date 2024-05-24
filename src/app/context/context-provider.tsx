"use client";

import { createContext, useEffect, useState } from "react";
import { Sections } from "../types/types";

export const BrainstormContext = createContext({});

export const BrainstormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [courses, setCourses] = useState<Sections[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query =
          "https://y8rjsgga.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27courses%27%5D+%7B%0A++category%2C%0A++slug+%7B%0A++++current%0A++%7D%2C%0A++details%5B0%5D+%7B%0A++++children%5B0%5D+%7B%0A++++++text%0A++++%7D%0A++%7D%2C%0A++sections%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++section%2C%0A++++category%2C%0A++++slug%2C%0A++++courses%5B%5D+-%3E+%7B%0A++++++_id%2C%0A++++++name%2C%0A++++++section%2C%0A++++++category%2C%0A++++++slug%2C%0A++++++code%2C%0A++++++description%5B0%5D+%7B%0A++++++++children%5B0%5D+%7B%0A++++++++++text%0A++++++++%7D%0A++++++%7D%2C%0A++++++time%2C%0A++++++duration%2C%0A++++++preview+%7B%0A++++++++asset+-%3E+%7B%0A++++++++++url%0A++++++++%7D%2C%0A++++++%7D%2C%0A++++++schedule%5B%5D+-%3E+%7B%0A++++++++title%2C%0A++++++++profession%2C%0A++++++++bio%2C%0A++++++++registration%2C%0A++++++++term%2C%0A++++++++time%2C%0A++++++++start%2C%0A++++++++duration%2C%0A++++++%7D%2C%0A++++%7D%2C%0A++%7D%2C%0A%7D";
        const response = await fetch(query, { cache: "no-store" });

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const { result } = await response.json();
        console.log("result", result);
        remapCourses(result);
      } catch (error: any) {
        setError(error);
      }
    };

    fetchData();

    const remapCourses = (result: Sections[]) => {
      if (result) {
        let sanitizedData: Sections[] = [];
        result.map((section: Sections) => {
          sanitizedData = [
            ...sanitizedData,
            {
              category: section.category,
              slug: section.slug,
              sections: section.sections,
              details: section.details.children.text,
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
