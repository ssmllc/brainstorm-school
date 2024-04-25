"use client";

import Link from "next/link"
import styled from "styled-components";
import { BrainstormContext } from "@/app/context/context-provider";
import { useContext } from "react";
import { Course } from "@/app/types/types";

const NavigationBar = styled.nav`
  background: #000;
  display: flex;
  list-style: none;
  padding: 25px 25px;
  gap: 10px;

  a {
    color: #fff;
  }
`;

const Navigation = () => {
  const {courses}:any = useContext(BrainstormContext);
  
  return (
    <NavigationBar>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li style={{position: 'relative'}}>
        <Link href="/courses">Courses</Link>
        <ul style={{background: '#000', padding: '15px 25px', minWidth: '200px', position: 'absolute', left: 0, top: '40px'}}>
          {courses.length > 0 && courses.map((course: Course) => (
            <li key={course.slug}>
              <Link href="/courses">{course.title}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/courses/concept-art">Concept Art</Link>
      </li>
    </NavigationBar>
  )
}

export default Navigation;