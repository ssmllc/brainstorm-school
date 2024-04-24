import type { Metadata } from "next";
import RenderCourses from "./components/render-courses.component";

export const metadata: Metadata = {
  title: "Brainstorm Courses - Brainstorm School",
  description: "Courses for brainstorm school",
};

const Courses = async () => {
  let data: any = [];

  try {
    const query = encodeURI('https://y8rjsgga.api.sanity.io/v2024-04-09/data/query/production?query=*[_type=="courses"] {title, start, instructor, mainImage {asset -> {url}}, courses[] -> {title, description}, body[0] { children[0] {text}}}');
    const response = await fetch(query, { cache: 'no-store' });
    
    if (!response.ok) {
      throw new Error(`HTTP error: Status ${response.status}`);
    }

    data = await response.json();
  } catch (err: any) {
    console.log("error", err);
  } finally {
    // setLoading(false);
  }

  return(
    <div>
      <h1>Courses</h1>
      <RenderCourses data={data} />
    </div>
  )
}

export default Courses;
