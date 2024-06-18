"use client";

import { useContext, useState } from "react";
import { BrainstormContext } from "@/app/context/context-provider";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import { Course, Sections } from "@/app/types/types";
import FlexBox from "@/app/components/layout/flexbox.component";

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
    <FlexBox flexdirection="column" margin="0 auto" alignitems="center">
      {error ? (
        <p>{error} : Error Loading Courses</p>
      ) : (
        courseList.map(({ sections, slug }: any, index: number) => {
          return (
            <FlexBox
              key={index}
              gap="25px 10px"
              justifycontent="center"
              flexwrap="wrap"
              width="100%"
              xl_width="100%"
              xl_margin="50px auto"
            >
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
                  <>
                    {courses?.map((course: Course) => {
                      console.log("courses", courses);
                      return (
                        <CardImageDetail
                          key={course._id}
                          base={base}
                          preview={course.preview?.asset.url}
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
                  </>
                )
              )}
            </FlexBox>
          );
        })
      )}
    </FlexBox>
  );
};

export default RenderCourses;
