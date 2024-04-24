'use client';

import { useContext } from "react";
import { BrainstormContext } from "@/app/context/context-provider";

const RenderCourses = ({ data = [] }: any) => {
  const ctx = useContext(BrainstormContext);
  console.log('BrainstormContext', ctx);

  return (
    <div>
      <h1>Current Courses</h1>
      {data && data.result.map((course:any, index:number) => (
        <p key={index}>{ course.title }</p>
      ))}
    </div>
  )
}

export default RenderCourses;
