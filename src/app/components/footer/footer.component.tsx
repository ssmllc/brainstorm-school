"use client";

import React from "react";
import { BrainstormContext } from "@/app/context/context-provider";
import { useContext } from "react";
import { Course } from "@/app/types/types";
import styled from "styled-components";
import BrainstormLogo from "../Logo/logo.component";
import Link from "next/link";
import RegistrationBlock from "../registration/registration-block.component";

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
  width: 80%;
`;

const Menu = styled.menu`
  /* border: thin dashed yellow; */
  display: flex;
  margin: 0 auto;
  width: 100%;
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
  margin: 50px auto;
  text-align: left;
  flex-grow: 1;
`;

const Social = styled.menu`
  /* border: thin dashed blue; */
  margin: 20px 5px;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
`;

const Channel = styled.div`
  /* border: thin dashed red; */
  color: var(--white);
  flex-basis: 33.33%;
  flex-grow: 1;
  padding: 10px 10px;
  text-align: center;
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
            <BrainstormLogo justify="left" paddingTop={false} />

            <Social>
              <Channel>FB</Channel>
              <Channel>IG</Channel>
              <Channel>X</Channel>
              <Channel>FB</Channel>
              <Channel>IG</Channel>
              <Channel>X</Channel>
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
              {courses.length > 0 &&
                courses.map((course: Course) => (
                  <DropdownMenuItem key={course.slug}>
                    <MenuItem href="/courses">{course.title}</MenuItem>
                  </DropdownMenuItem>
                ))}
            </DropdownMenu>
          </Column>
          <Column>
            <MenuItem href="/workshops" weight="bold">
              Workshops
            </MenuItem>

            <DropdownMenu>
              {courses.length > 0 &&
                courses.map((course: Course) => (
                  <DropdownMenuItem key={course.slug}>
                    <MenuItem href="/courses">{course.title}</MenuItem>
                  </DropdownMenuItem>
                ))}
            </DropdownMenu>
          </Column>
          <Column>
            <MenuItem href="/programs" weight="bold">
              Programs
            </MenuItem>

            <DropdownMenu>
              {courses.length > 0 &&
                courses.map((course: Course) => (
                  <DropdownMenuItem key={course.slug}>
                    <MenuItem href="/courses">{course.title}</MenuItem>
                  </DropdownMenuItem>
                ))}
            </DropdownMenu>
          </Column>
          <Column>
            <MenuItem href="/about" weight="bold">
              About
            </MenuItem>

            <DropdownMenu>
              {courses.length > 0 &&
                courses.map((course: Course) => (
                  <DropdownMenuItem key={course.slug}>
                    <MenuItem href="/courses">{course.title}</MenuItem>
                  </DropdownMenuItem>
                ))}
            </DropdownMenu>
          </Column>
          <Column>
            <MenuItem href="/news" weight="bold">
              News
            </MenuItem>
          </Column>
        </Menu>
      </MenuContainer>

      <RegistrationBlock
        primary={false}
        heading="Summer Registration is Now Open!"
        scale="md"
        cta="Register"
        ctaType="tertiary"
      />

      <Copyright>
        <Credits>
          <p>&copy; 2024 Brainstorm Online - All rights reserved</p>
          <p>Designed By : Studio Supermassive LLC</p>
        </Credits>
      </Copyright>
    </Content>
  );
};

export default Footer;
