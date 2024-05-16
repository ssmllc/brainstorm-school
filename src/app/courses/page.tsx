import type { Metadata } from "next";
import RenderCourses from "./components/render-courses.component";
import MediaBanner from "../components/banner/media-banner.component";

export const metadata: Metadata = {
  title: "Brainstorm Courses - Brainstorm School",
  description: "Courses for brainstorm school",
};

export default async function Courses() {
  return (
    <div>
      <MediaBanner
        hero={false}
        background="/backgrounds/sci-fi-city.jpg"
        image="/backgrounds/sci-fi-city.jpg"
        media="/video/brainstorm-design-solve-learn.mp4"
      />
      <div style={{ height: "100vh" }}>
        <h1>Courses</h1>
        <RenderCourses />
      </div>
    </div>
  );
}
