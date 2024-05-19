"use client";

import { useContext } from "react";
import { BrainstormContext } from "@/app/context/context-provider";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import Container from "@/app/components/layout/container.component";
import Heading from "@/app/components/heading/heading.component";
import { Course } from "@/app/types/types";

const RenderCourses = () => {
  const { courses, error }: any = useContext(BrainstormContext);
  console.log("of course", courses);
  return (
    <>
      {error ? (
        <p>{error} : Error Loading Courses</p>
      ) : (
        courses.length > 0 &&
        courses.map((course: any, index: number) => {
          return (
            <>
              {course?.sections?.map(
                ({
                  category,
                  section,
                  courses,
                }: {
                  category: string;
                  section: string;
                  courses: Course[];
                }) => (
                  <Container
                    key={index}
                    gap="10px"
                    margin="50px auto"
                    width="75%"
                  >
                    <Heading header={section} />
                    <Container
                      display="flex"
                      gap="10px"
                      width="100%"
                      margin="0 auto"
                    >
                      {courses?.map((course: any) => {
                        console.log("course", course);
                        return (
                          <CardImageDetail
                            key={course.code}
                            preview={course.preview.asset.url}
                            courseTrack={category}
                            courseName={course.name}
                            courseCode={course.code}
                            courseTime={course.time}
                            courseDuration={course.duration}
                          />
                        );
                      })}
                    </Container>
                  </Container>
                )
              )}
            </>
          );
        })
      )}
    </>
  );
};

export default RenderCourses;
