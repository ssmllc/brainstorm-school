"use client";

import { useContext } from "react";
import { BrainstormContext } from "@/app/context/context-provider";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import Container from "@/app/components/layout/container.component";
import { Course, Sections } from "@/app/types/types";
import Header from "@/app/components/text-block/header.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import { IconLocation } from "@/app/components/icons/icon-location.component";

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
                      <FlexBox
                        alignitems="center"
                        sm_width="100%"
                        width="100%"
                        flexdirection="row"
                        sm_margin="50px 0"
                        margin="50px 0"
                        xl_margin="50px 0"
                      >
                        <IconLocation width="28px" height="28px" />{" "}
                        <Header level="2" key={index} text={section} />
                      </FlexBox>
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
