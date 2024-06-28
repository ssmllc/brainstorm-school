"use client";

import React from "react";
import { BrainstormContext } from "@/app/context/context-provider";
import { useContext } from "react";
import { Sections } from "@/app/types/types";
import styled from "styled-components";
import BrainstormLogo from "../Logo/logo.component";
import Link from "next/link";
import RegistrationBlock from "../registration/registration-block.component";
import IconIG from "../icons/icon-ig.component";
import IconYouTube from "../icons/icon-youtube.component";
import IconFB from "../icons/icon-fb.component";

const Content = styled.div`
  background: #222;
  margin: 50px 0 0 0;
  width: 100vw;
`;

const Copyright = styled.div`
  color: var(--white);
  font-size: 12px;
  justify-content: center;
  width: 100%;
`;

const Credits = styled.div`
  border-top: thin solid #3b3b3b;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 25px 0;
  width: 80%;
`;

const MenuContainer = styled.div`
  /* border: thin dashed magenta; */
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  width: 90%;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 85%;
  }
`;

const Menu = styled.menu`
  /* border: thin dashed yellow; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    margin: 50px auto;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

interface menuItemProps {
  weight?: string;
}

const MenuItem = styled(Link)<menuItemProps>`
  color: var(--white);
  font-size: 12px;
  font-weight: ${({ weight }) => (weight ? "bold" : "normal")};
  letter-spacing: 1px;
  padding: 10px 10px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #afafaf;
  }
`;

const Column = styled.menu`
  /* border: thin dashed white; */
  margin: 20px 0 0;
  text-align: left;
  flex-grow: 1;

  @media (min-width: 768px) {
    margin: 20px 20px;
  }

  @media (min-width: 1400px) {
    margin: 50px auto;
  }
`;

const Social = styled.menu`
  /* border: thin dashed blue; */
  margin: 20px 20px;
  display: flex;
  width: 60%;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    width: 25%;
  }

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    width: 75%;
  }
`;

const Channel = styled(Link)`
  /* border: thin dashed red; */
  color: var(--white);
  flex-basis: 33.33%;
  flex-grow: 1;
  padding: 10px 10px;
  /* text-align: center; */
`;

const DropdownMenu = styled.ul`
  padding: 15px 0;
`;

const DropdownMenuItem = styled.li`
  font-size: 12px;
  padding: 5px 0;
`;

const Footer = () => {
  const { courses }: any = useContext(BrainstormContext);

  return (
    <Content>
      <MenuContainer>
        <Menu>
          <Column>
            <BrainstormLogo justify="left" padding="0" />

            <Social>
              <Channel
                href="https://www.facebook.com/BrainstormDesignSchool"
                target="_blank"
              >
                <IconFB width="24px" height="24px" />
              </Channel>

              <Channel
                href="https://www.instagram.com/we_are_brainstorm_school/"
                target="_blank"
              >
                <IconIG width="24px" height="24px" />
              </Channel>

              <Channel
                href="https://www.youtube.com/@BrainstormSchool"
                target="_blank"
              >
                <IconYouTube width="24px" height="24px" />
              </Channel>
            </Social>
          </Column>

          <Column>
            <MenuItem href="/" weight="bold">
              Home
            </MenuItem>
          </Column>

          <Column>
            <MenuItem href="/courses" weight="bold">
              Courses
            </MenuItem>
            <DropdownMenu>
              <MenuItem href="/courses">All Courses</MenuItem>
              {courses.length > 0 &&
                courses.map((course: Sections) => (
                  <DropdownMenuItem key={course.slug.current}>
                    <MenuItem href={`/courses/${course.slug.current}`}>
                      {course.category}
                    </MenuItem>
                  </DropdownMenuItem>
                ))}
            </DropdownMenu>
          </Column>

          <Column>
            <MenuItem href="/course-guide" weight="bold">
              Course Guide
            </MenuItem>
          </Column>

          <Column>
            <MenuItem href="/workshops" weight="bold">
              Workshops
            </MenuItem>

            <DropdownMenu>
              <li>
                <MenuItem href="/workshops/open-canvas">Open Canvas</MenuItem>
              </li>
            </DropdownMenu>
          </Column>

          <Column>
            <MenuItem href="/programs" weight="bold">
              Mentorship
            </MenuItem>
          </Column>

          <Column>
            <MenuItem href="/about" weight="bold">
              About
            </MenuItem>

            <DropdownMenu>
              <DropdownMenuItem>
                <MenuItem href="/about/compliance-line">
                  Compliance Line
                </MenuItem>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MenuItem href="/programs/scholarship">Scholarship</MenuItem>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MenuItem href="/about/faqs">FAQs</MenuItem>
              </DropdownMenuItem>
            </DropdownMenu>
          </Column>

          <Column>
            <MenuItem href="/gallery" weight="bold">
              Gallery
            </MenuItem>

            <DropdownMenu>
              <DropdownMenuItem>
                <MenuItem href="/gallery/students">Students</MenuItem>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MenuItem href="/gallery/instructors">Instructors</MenuItem>
              </DropdownMenuItem>
            </DropdownMenu>
          </Column>

          <Column>
            <MenuItem href="/instructors" weight="bold">
              Instructors
            </MenuItem>
          </Column>

          <Column>
            <MenuItem href="/blog" weight="bold">
              Blog
            </MenuItem>
          </Column>
        </Menu>
      </MenuContainer>

      <RegistrationBlock
        primary={false}
        heading="Fall Registration is Now Open!"
        scale="md"
        cta="Register Today"
        ctaType="tertiary"
        href="/courses"
      />

      <Copyright>
        <Credits>
          <p>&copy; 2024 Brainstorm Online - All rights reserved</p>
          <Link
            href="https://www.studiosupermassive.com"
            target="_blank"
            style={{ color: "var(--white)" }}
          >
            Designed By : Studio Supermassive LLC
          </Link>
        </Credits>
      </Copyright>
    </Content>
  );
};

export default Footer;
