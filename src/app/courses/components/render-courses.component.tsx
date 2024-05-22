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
                  <Container key={index} margin="50px auto" width="80%">
                    <Heading header={section} />
                    <Container
                      display="flex"
                      gap="20px 10px"
                      flexwrap="wrap"
                      width="100%"
                      margin="0 auto"
                    >
                      {courses?.map((course: any) => {
                        console.log("course", course);
                        return (
                          <CardImageDetail
                            key={course.code}
                            preview={course.preview.asset.url}
                            slug={slug.current}
                            path={course.slug.current}
                            courseTrack={category}
                            courseName={course.name && course.name}
                            courseCode={course.code && course.code}
                            courseTime={
                              course?.schedule && course?.schedule[0]?.time
                            }
                            courseDuration={
                              course?.schedule && course?.schedule[0]?.duration
                            }
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
