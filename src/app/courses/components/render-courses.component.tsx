"use client";

import { useContext, useState } from "react";
import { BrainstormContext } from "@/app/context/context-provider";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import Container from "@/app/components/layout/container.component";
import { Course, Sections } from "@/app/types/types";
import SelectLevel from "@/app/components/select-level/select-level.component";

interface Props {
  selectedCourses?: Sections[];
  noheading?: boolean;
  width?: string;
}

const RenderCourses = ({ selectedCourses, width }: Props) => {
  const { courses, error }: any = useContext(BrainstormContext);

  const courseList =
    selectedCourses && selectedCourses.length > 0 ? selectedCourses : courses;

  const base = selectedCourses && selectedCourses.length > 0 ? "" : "courses";

  return (
    <div>
      {error ? (
        <p>{error} : Error Loading Courses</p>
      ) : (
        courseList.map(({ sections, slug }: any, index: number) => {
          return (
            <div key={index}>
              {sections?.map(
                ({
                  category,
                  courses,
                  _id,
                }: {
                  category: string;
                  _id: any;
                  courses: Course[];
                }) => (
                  <Container key={_id} margin="0 auto" width="100%">
                    <Container
                      key={_id}
                      display="flex"
                      gap="20px 10px"
                      flexwrap="wrap"
                      width="100%"
                      margin="50px auto"
                    >
                      {courses?.map((course: Course) => {
                        console.log("courses", courses);
                        return (
                          <CardImageDetail
                            key={course._id}
                            base={base}
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
                            width={width}
                          />
                        );
                      })}
                    </Container>
                  </Container>
                )
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default RenderCourses;
