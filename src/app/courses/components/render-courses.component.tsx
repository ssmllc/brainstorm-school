"use client";

import { useContext } from "react";
import { BrainstormContext } from "@/app/context/context-provider";

const RenderCourses = () => {
  const { courses, error }: any = useContext(BrainstormContext);
  console.log("course", courses);
  return (
    <div style={{ color: "white" }}>
      <h1>Current Courses</h1>
      {error ? (
        <p>{error} : Error Loading Courses</p>
      ) : (
        courses.length > 0 &&
        courses.map((course: any, index: number) => (
          <p key={index}>{course.title}</p>
        ))
      )}
    </div>
  );
};

export default RenderCourses;
