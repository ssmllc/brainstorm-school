"use client";

import { useEffect, useState } from "react";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import SelectLevel from "@/app/components/select-level/select-level.component";
import FlexBox from "@/app/components/layout/flexbox.component";

interface Props {
  selectedCourses: any[];
  width?: string;
}

const RenderAllCourses = ({ selectedCourses, width }: Props) => {
  const [courseList, setCourseList] = useState<any>(selectedCourses);

  const [levelOfExpertise, setLevelOfExpertise] = useState<string>("All");

  useEffect(() => {
    if (levelOfExpertise !== "All") {
      const filteredResults = selectedCourses.filter((level) => {
        return level.difficulty === levelOfExpertise;
      });

      setCourseList(filteredResults);
    } else {
      setCourseList(selectedCourses);
    }

    console.log("levelOfExpertise", levelOfExpertise);
  }, [levelOfExpertise]);

  return (
    <FlexBox flexdirection="column" margin="0 auto" alignitems="center">
      <SelectLevel setLevelOfExpertise={setLevelOfExpertise} />
      <FlexBox
        gap="25px 10px"
        flexwrap="wrap"
        xl_width="100%"
        xl_margin="50px auto"
      >
        {courseList &&
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
          )}
      </FlexBox>
    </FlexBox>
  );
};

export default RenderAllCourses;
