"use client";

import { useContext, useState } from "react";
import { BrainstormContext } from "@/app/context/context-provider";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import Container from "@/app/components/layout/container.component";
import { Course, Sections } from "@/app/types/types";
import SelectLevel from "@/app/components/select-level/select-level.component";
import FlexBox from "@/app/components/layout/flexbox.component";

interface Props {
  selectedCourses?: Sections[];
  results?: Sections[];
  noheading?: boolean;
  width?: string;
}

const RenderAllCourses = ({ selectedCourses, width }: Props) => {
  const { courses, error }: any = useContext(BrainstormContext);
  const [levelOfExpertise, setLevelOfExpertise] = useState<string>("");

  const courseList =
    selectedCourses && selectedCourses.length > 0 ? selectedCourses : courses;

  console.log("courseList", courseList);

  const base = selectedCourses && selectedCourses.length > 0 ? "" : "courses";

  return (
    <FlexBox flexdirection="column" margin="0 auto" alignitems="center">
      <SelectLevel setLevelOfExpertise={setLevelOfExpertise} />
      <FlexBox
        gap="20px 10px"
        flexwrap="wrap"
        xl_width="100%"
        xl_margin="50px auto"
      >
        {error ? (
          <p>{error} : Error Loading Courses</p>
        ) : (
          courseList.map(
            ({
              _id,
              imageUrl,
              name,
              code,
              category,
              difficulty,
              price,
              slug,
              schedule,
            }: {
              _id: string;
              imageUrl: string;
              name: string;
              code: string;
              difficulty: string;
              category: string;
              price: string;
              slug: string;
              schedule: any;
            }) => {
              return (
                <CardImageDetail
                  key={_id}
                  base="/courses"
                  preview={imageUrl}
                  slug={category
                    .toLocaleLowerCase()
                    .replaceAll(" ", "-")
                    .replaceAll("&", "and")}
                  path={slug}
                  courseTrack={category}
                  courseName={name}
                  courseCode={code}
                  courseTime={schedule[0]?.time}
                  courseDuration={schedule[0]?.duration}
                  coursePrice={price}
                  courseDifficulty={difficulty}
                  width={width}
                />
              );
            }
          )
        )}
      </FlexBox>
    </FlexBox>
  );
};

export default RenderAllCourses;
