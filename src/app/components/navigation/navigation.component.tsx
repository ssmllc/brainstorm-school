"use client";

import Link from "next/link";
import styled from "styled-components";
import { BrainstormContext } from "@/app/context/context-provider";
import { useContext, useState } from "react";
import { Sections } from "@/app/types/types";
import BrainstormLogo from "../Logo/logo.component";
import { IconSearch } from "../icons/icon-search.component";

const NavigationBar = styled.div`
  background: var(--off-black-90);
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
  background: var(--off-black-90);
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
    padding: 0 25px;
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
  background: var(--off-black-90);
  // border: thin solid red;
  display: flex;
  height: 25px;
  margin: 20px;
  position: relative;
  width: 30px;

  @media (min-width: 1024px) {
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
  background: var(--off-black-90);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: none;
  left: 0;
  min-width: 375px;
  padding: 15px 25px;
  position: absolute;
  top: 70px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const DropdownMenuItem = styled.li`
  padding: 15px 0;
`;

const MenuItem = styled(Link)`
  color: var(--white);
  padding: 30px 10px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #afafaf;
  }
`;

// START Mobile Menu
const MobileNavigation = styled("div")`
  background: var(--off-black);
  /* border: thin solid red; */
  color: white;
  height: 100vh;
  overflow-y: auto;
  left: 0;
  padding: 10px 0;
  position: absolute;
  top: 65px;
  width: 100vw;
  z-index: 999;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileNavigationItems = styled("menu")`
  /* border: thin dashed green; */
  overflow-y: auto;
  height: 100%;
  list-style: none;
  padding: 0 25px;
  width: 100%;
`;

const Accordion = styled("menu")`
  align-items: center;
  border-bottom: thin solid var(--medium-grey);
  max-height: 60px;
  list-style: none;
  overflow: hidden;
  padding: 0;
  position: relative;

  &[data-active="true"] {
    overflow-y: scroll;
    max-height: 9999px;

    .mobile-dropdown {
      &::after {
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid var(--blue);
        border-top: 5px solid transparent;
        content: "";
        display: block;
        height: 0;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
      }
    }
  }
`;

const MainMenu = styled.div`
  padding: 20px 0;
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
`;

const MainMenuItem = styled(Link)`
  border-bottom: thin solid var(--medium-grey);
  color: var(--white);
  display: block;
  padding: 20px 0;
  position: relative;
`;

const AccordionItem = styled(Link)`
  border-bottom: thin solid var(--medium-grey);
  color: #ccc;
  display: block;
  font-size: 14px;
  padding: 15px 10px;
`;
// END Mobile Menu

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
  const [selected, setSelected] = useState<number | null>(null);

  const toggleMobileMenu = (selectedIndex: number) => {
    if (selected === selectedIndex) {
      return setSelected(null);
    }

    setSelected(selectedIndex);
  };

  return (
    <NavigationBar>
      <BrainstormLogo justify="center" />

      <DropdownButton>
        <DropdownButtonBar />
        <DropdownButtonBar />
        <DropdownButtonBar />
      </DropdownButton>

      <MobileNavigation>
        <MobileNavigationItems>
          <MainMenuItem href="/">Home</MainMenuItem>

          <Accordion data-active={selected === 1 ? "true" : "false"}>
            <MainMenu
              className="mobile-dropdown"
              onClick={() => toggleMobileMenu(1)}
            >
              Courses
            </MainMenu>
            <AccordionItem href="/courses">All Courses</AccordionItem>
            {courses.length > 0 &&
              courses.map((course: Sections) => (
                <AccordionItem
                  key={course.slug.current}
                  href={`/courses/${course.slug.current}`}
                >
                  {course.category}
                </AccordionItem>
              ))}
          </Accordion>

          <MainMenuItem href="/course-guide">Course Guide</MainMenuItem>

          <Accordion data-active={selected === 2 ? "true" : "false"}>
            <MainMenu
              className="mobile-dropdown"
              onClick={() => toggleMobileMenu(3)}
            >
              Workshops
            </MainMenu>
            <AccordionItem href="/workshops/open-canvas">
              Open Canvas
            </AccordionItem>
            <AccordionItem href="/workshops/brainstorm-connection">
              Brainstorm Connection
            </AccordionItem>
          </Accordion>

          <Accordion data-active={selected === 3 ? "true" : "false"}>
            <MainMenu
              className="mobile-dropdown"
              onClick={() => toggleMobileMenu(3)}
            >
              Programs
            </MainMenu>
            <AccordionItem href="/about/compliance-line">
              Mentorship
            </AccordionItem>
            <AccordionItem href="/workshops/brainstorm-connection">
              Scholarship
            </AccordionItem>
          </Accordion>

          <Accordion data-active={selected === 4 ? "true" : "false"}>
            <MainMenu
              className="mobile-dropdown"
              onClick={() => toggleMobileMenu(4)}
            >
              About
            </MainMenu>
            <AccordionItem href="/about/compliance-line">
              Compliance Line
            </AccordionItem>
            <AccordionItem href="/workshops/brainstorm-connection">
              FAQs
            </AccordionItem>
          </Accordion>

          <Accordion data-active={selected === 5 ? "true" : "false"}>
            <MainMenu
              className="mobile-dropdown"
              onClick={() => toggleMobileMenu(5)}
            >
              Gallery
            </MainMenu>
            <AccordionItem href="/gallery/students">Students</AccordionItem>
            <AccordionItem href="/gallery/instructors">
              Instructors
            </AccordionItem>
          </Accordion>

          <MainMenuItem href="/instructors">Instructors</MainMenuItem>

          <MainMenuItem href="/blog">Blog</MainMenuItem>
        </MobileNavigationItems>
      </MobileNavigation>

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

        <li>
          <MenuItem href="/course-guide">Course Guide</MenuItem>
        </li>

        <Dropdown>
          <MenuItem href="/workshops">Workshops</MenuItem>
          <DropdownMenu>
            <DropdownMenuItem>
              <MenuItem href="/workshops/open-canvas">Open Canvas</MenuItem>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MenuItem href="/workshops/brainstorm-connection">
                Brainstorm Connection
              </MenuItem>
            </DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <MenuItem href="">Programs</MenuItem>
          <DropdownMenu>
            <DropdownMenuItem>
              <MenuItem href="/programs/mentorship">Mentorship</MenuItem>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MenuItem href="/programs/scholarship">Scholarship</MenuItem>
            </DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <MenuItem href="/about">About</MenuItem>
          <DropdownMenu>
            <DropdownMenuItem>
              <MenuItem href="/about/compliance-line">Compliance Line</MenuItem>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <MenuItem href="/about/faqs">FAQs</MenuItem>
            </DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <MenuItem href="/gallery">Gallery</MenuItem>
          <DropdownMenu>
            <DropdownMenuItem>
              <MenuItem href="/gallery/students">Students</MenuItem>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <MenuItem href="/gallery/instructors">instructors</MenuItem>
            </DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>

        <li>
          <MenuItem href="/instructors">Instructors</MenuItem>
        </li>

        <li>
          <MenuItem href="/blog">Blog</MenuItem>
        </li>

        <li>
          <MenuItem href="/search">
            <IconSearch width="14px" height="14px" />
          </MenuItem>
        </li>

        <li>
          <CallToAction href="/registration">Register</CallToAction>
        </li>
      </NavigationMenu>
    </NavigationBar>
  );
};

export default Navigation;
