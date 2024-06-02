"use client";

import { useContext } from "react";
import { BrainstormContext } from "@/app/context/context-provider";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import Container from "@/app/components/layout/container.component";
import Heading from "@/app/components/heading/heading.component";
import { Course, Sections } from "@/app/types/types";

interface Props {
  selectedCourses?: Sections[];
  noheading?: boolean;
  width?: string;
}

const RenderCourses = ({ selectedCourses, noheading, width }: Props) => {
  const { courses, error }: any = useContext(BrainstormContext);
  const courseList =
    selectedCourses && selectedCourses.length > 0 ? selectedCourses : courses;

  const base = selectedCourses && selectedCourses.length > 0 ? "" : "courses";

  return (
    <>
      {error ? (
        <p>{error} : Error Loading Courses</p>
      ) : (
        courseList.map(({ sections, slug }: any, index: number) => {
          return (
            <div key={index}>
              {sections?.map(
                ({
                  category,
                  section,
                  courses,
                  _id,
                }: {
                  category: string;
                  section: string;
                  _id: any;
                  courses: Course[];
                }) => (
                  <Container key={_id} margin="0 auto" width="100%">
                    {noheading ? (
                      <div style={{ margin: "50px 0" }}></div>
                    ) : (
                      <Heading key={index} header={section} />
                    )}
                    <Container
                      key={_id}
                      display="flex"
                      gap="20px 10px"
                      flexwrap="wrap"
                      width="100%"
                      margin="0 auto"
                    >
                      {courses?.map((course: Course) => {
                        // console.log("course", course.schedule);
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
    </>
  );
};

export default RenderCourses;
