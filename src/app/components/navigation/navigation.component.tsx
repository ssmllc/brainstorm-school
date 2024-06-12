"use client";

import Link from "next/link";
import styled from "styled-components";
import { BrainstormContext } from "@/app/context/context-provider";
import { useContext, useState } from "react";
import { Sections } from "@/app/types/types";
import BrainstormLogo from "../Logo/logo.component";
import { IconSearch } from "../icons/icon-search.component";
import RenderCourses from "@/app/courses/components/render-courses.component";
import FlexBox from "../layout/flexbox.component";
import Header from "../text-block/header.component";

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

  @media (min-width: 1400px) {
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
    transition: all 0.35s ease-out;
    width: 0;
  }

  &:hover {
    .bs-dropdown-menu {
      display: block;
    }

    &::after {
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 7px solid var(--primary);
      content: "";
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

  &[data-active="true"] {
    .dropdown-bar {
      &:nth-child(1) {
        background: var(--primary);
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
      }
      &:nth-child(2) {
        opacity: 0;
        top: 50%;
        transform: translateY(-100%);
      }
      &:nth-child(3) {
        background: var(--primary);
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      }
    }
  }

  @media (min-width: 1400px) {
    display: none;
  }
`;

const DropdownButtonBar = styled.div`
  background: var(--white);
  height: 2px;
  position: absolute;
  transition: all 0.35s ease-out;
  width: 100%;

  &:nth-child(1) {
    top: 2px;
  }

  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  &:nth-child(3) {
    bottom: 2px;
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

  @media (min-width: 1400px) {
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
    color: var(--light-grey);
  }
`;

// START Mobile Menu
const MobileNavigation = styled("div")`
  background: var(--off-black);
  /* border: thin solid red; */
  color: white;
  height: 0;
  opacity: 0;
  overflow-y: auto;
  right: 0;
  padding: 10px 0;
  position: absolute;
  top: 65px;
  width: 100vw;
  z-index: 999;
  transition: all 0.35s ease-out;

  &[data-active="true"] {
    height: 100vh;
    opacity: 1;
  }

  @media (min-width: 1024px) {
    width: 30vw;
  }

  @media (min-width: 1400px) {
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
        border-bottom: 7px solid var(--primary);
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
  border: 3px solid var(--primary);
  border-radius: 20px;
  color: var(--primary);
  font-weight: bold;
  padding: 10px 25px;
  text-decoration: none;
  text-transform: uppercase;
`;

const SearchView = styled.div`
  background: var(--black);
  height: 0;
  overflow: hidden;
  transition: all 0.35s ease-out;
  left: 0;
  opacity: 0;
  top: 70px;
  position: absolute;
  width: 100vw;

  &[data-active="true"] {
    height: 100vh;
    overflow-y: auto;
    opacity: 1;
  }
`;

const SearchCourses = ({
  courses,
  isActive,
}: {
  courses: any;
  isActive: boolean;
}) => {
  return (
    <SearchView data-active={isActive}>
      <FlexBox flexdirection="column" margin="0 auto" alignitems="center">
        <FlexBox
          flexdirection="column"
          sm_width="80%"
          md_width="80%"
          xl_width="70%"
          xl_margin="100px 0"
          width="70%"
        >
          <FlexBox
            flexdirection="column"
            sm_width="50%"
            md_width="50%"
            xl_width="50%"
            width="50%"
            justifycontent="center"
          >
            <Header
              level="4"
              text="Search"
              fontSize="32px"
              textalign="center"
            />
            <input
              type="text"
              style={{
                background: "var(--light-black)",
                border: "0",
                color: "var(--white)",
                fontSize: "24px",
                padding: "15px 20px",
                borderRadius: "30px",
              }}
            />
          </FlexBox>
          <RenderCourses selectedCourses={courses} width="33%" />
        </FlexBox>
      </FlexBox>
    </SearchView>
  );
};

const Navigation = () => {
  const { courses }: any = useContext(BrainstormContext);
  const [selected, setSelected] = useState<number | null>(null);
  const [active, setActive] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const toggleMobileMenu = (selectedIndex: number) => {
    if (selected === selectedIndex) {
      return setSelected(null);
    }

    setSelected(selectedIndex);
  };

  const toggleSearch = (evt: any) => {
    evt.preventDefault();
    setShowSearch(!showSearch);
  };

  return (
    <NavigationBar>
      <BrainstormLogo justify="center" />

      <DropdownButton
        className="dropdown-button"
        data-active={active}
        onClick={() => setActive(!active)}
      >
        <DropdownButtonBar className="dropdown-bar" />
        <DropdownButtonBar className="dropdown-bar" />
        <DropdownButtonBar className="dropdown-bar" />
      </DropdownButton>

      <MobileNavigation data-active={active}>
        <MobileNavigationItems>
          <MainMenuItem onClick={() => setActive(false)} href="/">
            Home
          </MainMenuItem>

          <Accordion data-active={selected === 1 ? "true" : "false"}>
            <MainMenu
              className="mobile-dropdown"
              onClick={() => toggleMobileMenu(1)}
            >
              Courses
            </MainMenu>
            <AccordionItem href="/courses" onClick={() => setActive(false)}>
              All Courses
            </AccordionItem>
            {courses.length > 0 &&
              courses.map((course: Sections) => (
                <AccordionItem
                  key={course.slug.current}
                  href={`/courses/${course.slug.current}`}
                  onClick={() => setActive(false)}
                >
                  {course.category}
                </AccordionItem>
              ))}
          </Accordion>

          <MainMenuItem href="/course-guide" onClick={() => setActive(false)}>
            Course Guide
          </MainMenuItem>

          <Accordion data-active={selected === 2 ? "true" : "false"}>
            <MainMenu
              className="mobile-dropdown"
              onClick={() => toggleMobileMenu(2)}
            >
              Workshops
            </MainMenu>
            <AccordionItem
              onClick={() => setActive(false)}
              href="/workshops/open-canvas"
            >
              Open Canvas
            </AccordionItem>
            <AccordionItem
              onClick={() => setActive(false)}
              href="/workshops/brainstorm-connection"
            >
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
            <AccordionItem
              onClick={() => setActive(false)}
              href="/about/compliance-line"
            >
              Mentorship
            </AccordionItem>
            <AccordionItem
              onClick={() => setActive(false)}
              href="/workshops/brainstorm-connection"
            >
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
            <AccordionItem
              onClick={() => setActive(false)}
              href="/about/compliance-line"
            >
              Compliance Line
            </AccordionItem>
            <AccordionItem
              onClick={() => setActive(false)}
              href="/workshops/brainstorm-connection"
            >
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
            <AccordionItem
              onClick={() => setActive(false)}
              href="/gallery/students"
            >
              Students
            </AccordionItem>
            <AccordionItem
              onClick={() => setActive(false)}
              href="/gallery/instructors"
            >
              Instructors
            </AccordionItem>
          </Accordion>

          <MainMenuItem onClick={() => setActive(false)} href="/instructors">
            Instructors
          </MainMenuItem>

          <MainMenuItem onClick={() => setActive(false)} href="/blog">
            Blog
          </MainMenuItem>
        </MobileNavigationItems>
      </MobileNavigation>

      <NavigationMenu>
        <li>
          <MenuItem href="/">Home</MenuItem>
        </li>

        <Dropdown>
          <MenuItem href="/courses">Courses</MenuItem>
          <DropdownMenu className="bs-dropdown-menu">
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
          <DropdownMenu className="bs-dropdown-menu">
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
          <MenuItem href="/programs">Programs</MenuItem>
          <DropdownMenu className="bs-dropdown-menu">
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
          <DropdownMenu className="bs-dropdown-menu">
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
          <DropdownMenu className="bs-dropdown-menu">
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
          <MenuItem href="" onClick={toggleSearch}>
            <IconSearch width="14px" height="14px" />
          </MenuItem>
        </li>

        <li>
          <CallToAction href="/registration">Register</CallToAction>
        </li>
      </NavigationMenu>

      <SearchCourses courses={courses} isActive={showSearch} />
    </NavigationBar>
  );
};

export default Navigation;
