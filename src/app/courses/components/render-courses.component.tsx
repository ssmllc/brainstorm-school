"use client";

import { useContext } from "react";
import { BrainstormContext } from "@/app/context/context-provider";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import Container from "@/app/components/layout/container.component";
import Heading from "@/app/components/heading/heading.component";
import { Course, Sections } from "@/app/types/types";

interface Props {
  selectedCourses?: Sections[];
}

const RenderCourses = ({ selectedCourses }: Props) => {
  const { courses, error }: any = useContext(BrainstormContext);
  const courseList =
    selectedCourses && selectedCourses.length > 0 ? selectedCourses : courses;

  return (
    <>
      {error ? (
        <p>{error} : Error Loading Courses</p>
      ) : (
        courseList.map(({ sections, slug }: any, index: number) => {
          return (
            <>
              {sections?.map(
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
                        return (
                          <CardImageDetail
                            key={course.code}
                            preview={course.preview.asset.url}
                            slug={slug}
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
