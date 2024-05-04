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

const Brainstorm = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0 20px;
  text-transform: uppercase;
`;

const NavigationBar = styled.div`
  background: #000;
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
  background: #000;
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

const DropdownButton = styled.div`
  align-self: center;
  background: #000;
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
  background: #fff;
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

const MenuItem = styled(Link)`
  color: #fff;
  padding: 10px 10px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #afafaf;
  }
`;

const CallToAction = styled(Link)`
  background: #fff;
  border-radius: 20px;
  color: #000;
  font-weight: bold;
  padding: 10px 25px;
  text-decoration: none;
  text-transform: uppercase;
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
        <Brainstorm>Brainstorm</Brainstorm>
      </BrainstormLogo>
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
              courses.map((course: Course) => (
                <DropdownMenuItem key={course.slug}>
                  <MenuItem href="/courses">{course.title}</MenuItem>
                </DropdownMenuItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <MenuItem href="/courses/concept-art">Workshops</MenuItem>
          <DropdownMenu>
            {courses.length > 0 &&
              courses.map((course: Course) => (
                <DropdownMenuItem key={course.slug}>
                  <MenuItem href="/courses">{course.title}</MenuItem>
                </DropdownMenuItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <MenuItem href="/courses/concept-art">Programs</MenuItem>
          <DropdownMenu>
            {courses.length > 0 &&
              courses.map((course: Course) => (
                <DropdownMenuItem key={course.slug}>
                  <MenuItem href="/courses">{course.title}</MenuItem>
                </DropdownMenuItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <MenuItem href="/courses/concept-art">About</MenuItem>
          <DropdownMenu>
            {courses.length > 0 &&
              courses.map((course: Course) => (
                <DropdownMenuItem key={course.slug}>
                  <MenuItem href="/courses">{course.title}</MenuItem>
                </DropdownMenuItem>
              ))}
          </DropdownMenu>
        </Dropdown>
        <li>
          <MenuItem href="/courses/concept-art">News</MenuItem>
        </li>
        <li>
          <CallToAction href="/courses/concept-art">Register</CallToAction>
        </li>
      </NavigationMenu>
    </NavigationBar>
  );
};

export default Navigation;
