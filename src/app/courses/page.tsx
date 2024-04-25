import type { Metadata } from "next";
import RenderCourses from "./components/render-courses.component";

export const metadata: Metadata = {
  title: "Brainstorm Courses - Brainstorm School",
  description: "Courses for brainstorm school",
};

const Courses = async () => {
  return(
    <div>
      <h1>Courses</h1>
      <RenderCourses />
    </div>
  )
}

export default Courses;
