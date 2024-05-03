"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { BrainstormContext } from "@/app/context/context-provider";
import { useContext } from "react";
import { Course } from "@/app/types/types";

const BrainstormLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px 20px;
`;

const NavigationBar = styled.div`
  background: #000;
  display: flex;
  justify-content: space-between;
  padding: 0 0px;
  width: 100vw;
`;

const NavigationMenu = styled.nav`
  align-items: center;
  display: flex;
  font-size: 12px;
  list-style: none;
  letter-spacing: 2px;
  padding: 25px 25px;
  column-gap: 25px;

  a {
    color: #fff;
    padding: 10px 10px;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const Dropdown = styled.li`
  display: flex;
  padding-right: 10px;
  position: relative;

  &::after {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid #fff;
    content: "";
    display: block;
    height: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
  }

  &:hover {
    ul {
      display: block;
    }
  }
`;

const DropdownMenu = styled.ul`
  background: #000;
  display: none;
  left: 0;
  min-width: 250px;
  padding: 15px 25px;
  position: absolute;
  top: 35px;
`;

const DropdownMenuItem = styled.li`
  padding: 15px 0;
`;

const Navigation = () => {
  const { courses }: any = useContext(BrainstormContext);

  return (
    <NavigationBar>
      <BrainstormLogo>
        <Image
          src="/logo/brainstorm-logo.png"
          width={42}
          height={42}
          alt="Brainstorm School Logo"
        />
      </BrainstormLogo>
      <NavigationMenu>
        <li>
          <Link href="/">Home</Link>
        </li>
        <Dropdown>
          <Link href="/courses">Courses</Link>
          <DropdownMenu>
            {courses.length > 0 &&
              courses.map((course: Course) => (
                <DropdownMenuItem key={course.slug}>
                  <Link href="/courses">{course.title}</Link>
                </DropdownMenuItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <Link href="/courses/concept-art">Workshops</Link>
          <DropdownMenu>
            {courses.length > 0 &&
              courses.map((course: Course) => (
                <DropdownMenuItem key={course.slug}>
                  <Link href="/courses">{course.title}</Link>
                </DropdownMenuItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <Link href="/courses/concept-art">Programs</Link>
          <DropdownMenu>
            {courses.length > 0 &&
              courses.map((course: Course) => (
                <DropdownMenuItem key={course.slug}>
                  <Link href="/courses">{course.title}</Link>
                </DropdownMenuItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <Link href="/courses/concept-art">About</Link>
          <DropdownMenu>
            {courses.length > 0 &&
              courses.map((course: Course) => (
                <DropdownMenuItem key={course.slug}>
                  <Link href="/courses">{course.title}</Link>
                </DropdownMenuItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <li>
          <Link href="/courses/concept-art">News</Link>
        </li>
        <li>
          <Link href="/courses/concept-art">Register</Link>
        </li>
      </NavigationMenu>
    </NavigationBar>
  );
};

export default Navigation;
