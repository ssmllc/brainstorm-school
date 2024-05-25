"use client";

import Link from "next/link";
// import Image from "next/image";
import styled from "styled-components";
import { BrainstormContext } from "@/app/context/context-provider";
import { useContext } from "react";
import { Sections } from "@/app/types/types";
import BrainstormLogo from "../Logo/logo.component";

const NavigationBar = styled.div`
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: space-between;
  padding: 0 0px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99;
`;

const NavigationMenu = styled.nav`
  background: var(--black);
  row-gap: 25px;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  height: 0;
  overflow: hidden;
  list-style: none;
  letter-spacing: 2px;
  left: 0;
  padding: 0;
  position: absolute;
  top: 80px;
  width: 100vw;

  &[data-active="true"] {
    padding: 25px 25px;
    height: 100vh;
  }

  @media (min-width: 800px) {
    background: transparent;
    column-gap: 25px;
    flex-direction: row;
    left: unset;
    overflow: unset;
    padding: 25px 25px;
    position: relative;
    top: unset;
    height: auto;
    width: auto;
  }
`;

const Dropdown = styled.li`
  display: flex;
  padding-right: 10px;
  position: relative;

  &::after {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid var(--white);
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

const DropdownButton = styled.div`
  align-self: center;
  background: var(--black);
  // border: thin solid red;
  display: flex;
  height: 25px;
  margin: 20px;
  position: relative;
  width: 30px;

  @media (min-width: 800px) {
    display: none;
  }
`;

const DropdownButtonBar = styled.div`
  background: var(--white);
  height: 3px;
  position: absolute;
  width: 100%;

  &:nth-child(1) {
    top: 0;
  }

  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  &:nth-child(3) {
    bottom: 0;
  }
`;

const DropdownMenu = styled.ul`
  background: var(--black);
  display: none;
  left: 0;
  min-width: 400px;
  padding: 15px 25px;
  position: absolute;
  top: 35px;
`;

const DropdownMenuItem = styled.li`
  padding: 15px 0;
`;

const MenuItem = styled(Link)`
  color: var(--white);
  padding: 10px 10px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #afafaf;
  }
`;

const CallToAction = styled(Link)`
  background: transparent;
  border: 3px solid var(--white);
  border-radius: 20px;
  color: var(--white);
  font-weight: bold;
  padding: 10px 25px;
  text-decoration: none;
  text-transform: uppercase;
`;

const Navigation = () => {
  const { courses }: any = useContext(BrainstormContext);
  return (
    <NavigationBar>
      <BrainstormLogo justify="center" />
      <DropdownButton>
        <DropdownButtonBar />
        <DropdownButtonBar />
        <DropdownButtonBar />
      </DropdownButton>
      <NavigationMenu>
        <li>
          <MenuItem href="/">Home</MenuItem>
        </li>
        <Dropdown>
          <MenuItem href="/courses">Courses</MenuItem>
          <DropdownMenu>
            {courses.length > 0 &&
              courses.map((course: Sections) => (
                <DropdownMenuItem key={course.slug.current}>
                  <MenuItem href={`/courses/${course.slug.current}`}>
                    {course.category}
                  </MenuItem>
                </DropdownMenuItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <MenuItem href="/workshops">Workshops</MenuItem>
          <DropdownMenu>
            {courses.length > 0 &&
              courses.map((course: Sections) => (
                <DropdownMenuItem key={course.slug.current}>
                  <MenuItem href="/courses">{course.category}</MenuItem>
                </DropdownMenuItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <MenuItem href="/programs">Programs</MenuItem>
          <DropdownMenu>
            {courses.length > 0 &&
              courses.map((course: Sections) => (
                <DropdownMenuItem key={course.slug.current}>
                  <MenuItem href="/courses">{course.category}</MenuItem>
                </DropdownMenuItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <MenuItem href="/about">About</MenuItem>
          <DropdownMenu>
            {courses.length > 0 &&
              courses.map((course: Sections) => (
                <DropdownMenuItem key={course.slug.current}>
                  <MenuItem href="/courses">{course.category}</MenuItem>
                </DropdownMenuItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <MenuItem href="/gallery">Gallery</MenuItem>
          <DropdownMenu>
            <DropdownMenuItem>
              <MenuItem href="/students">students</MenuItem>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <MenuItem href="/instructors">instructors</MenuItem>
            </DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>
        <li>
          <MenuItem href="/courses/concept-art">Instructors</MenuItem>
        </li>
        <li>
          <MenuItem href="/courses/concept-art">Blog</MenuItem>
        </li>
        <li>
          <CallToAction href="/courses/concept-art">Register</CallToAction>
        </li>
      </NavigationMenu>
    </NavigationBar>
  );
};

export default Navigation;
