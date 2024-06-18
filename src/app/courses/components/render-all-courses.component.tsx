"use client";

import { useEffect, useState } from "react";
import CardImageDetail from "@/app/components/card/card-image-detail.component";
import FlexBox from "@/app/components/layout/flexbox.component";
import CoursesFilter from "@/app/components/select-level/courses-filter.component";

interface Props {
  selectedCourses: any[];
  width?: string;
}

const RenderAllCourses = ({ selectedCourses, width }: Props) => {
  const [courseList, setCourseList] = useState<any>(selectedCourses);
  const [levelOfExpertise, setLevelOfExpertise] = useState<string>("All");
  const [dayOfTheWeek, setDayOfTheWeek] = useState<string>("All");
  const [priceOrder, setPriceOrder] = useState<string>("All");

  useEffect(() => {
    if (levelOfExpertise !== "All") {
      const filteredResults = selectedCourses.filter((course) => {
        return course.difficulty === levelOfExpertise;
      });

      setCourseList(filteredResults);
    } else {
      setCourseList(selectedCourses);
    }

    // console.log("levelOfExpertise", levelOfExpertise);
  }, [levelOfExpertise]);

  useEffect(() => {
    if (dayOfTheWeek !== "All") {
      const filteredResults = selectedCourses.filter((course) => {
        const selectedDay = course.schedule[0].time.toLowerCase() || "All";

        return selectedDay.includes(dayOfTheWeek.toLowerCase());
      });

      setCourseList(filteredResults);
    } else {
      setCourseList(selectedCourses);
    }

    // console.log("selectedCourses", selectedCourses);
  }, [dayOfTheWeek]);

  useEffect(() => {
    if (priceOrder !== "All") {
      const filteredResults = selectedCourses.filter((course) => {
        if (course?.price === null) course.price = "$0.00";
        return course;
      });

      if (priceOrder === "asc") {
        setCourseList(
          filteredResults.sort(
            (a: any, b: any) =>
              a.price.replace("$", "") - b.price.replace("$", "")
          )
        );
      } else {
        setCourseList(
          filteredResults.sort(
            (a: any, b: any) =>
              b.price.replace("$", "") - a.price.replace("$", "")
          )
        );
      }
    } else {
      setCourseList(selectedCourses);
    }
  }, [priceOrder]);

  return (
    <FlexBox
      flexdirection="column"
      margin="0 auto"
      alignitems="center"
      sm_width="80%"
    >
      <CoursesFilter
        setLevelOfExpertise={setLevelOfExpertise}
        setDayOfTheWeek={setDayOfTheWeek}
        setPrice={setPriceOrder}
      />
      <FlexBox
        gap="25px 10px"
        justifycontent="center"
        flexwrap="wrap"
        sm_width="100%"
        width="100%"
        xl_width="90%"
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
                  courseTime={schedule && schedule[0]?.time}
                  courseDuration={schedule && schedule[0]?.duration}
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
