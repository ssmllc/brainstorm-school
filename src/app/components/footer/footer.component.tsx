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
  flex-direction: column;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 800px) {
    flex-direction: row;
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
  margin: 20px 0;
  text-align: left;
  flex-grow: 1;

  @media (min-width: 800px) {
    margin: 50px auto;
  }
`;

const Social = styled.menu`
  /* border: thin dashed blue; */
  margin: 20px 20px;
  display: flex;
  width: 60%;

  @media (min-width: 800px) {
    flex-wrap: wrap;
    width: 45%;
  }
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
              <Channel>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 114 114"
                  style={{ height: "24px", width: "24px" }}
                >
                  <circle style={{ fill: "#fff" }} cx="57" cy="57" r="57" />
                  <path d="M77.84,62.6l2.49-16.21h-15.55v-10.52c0-4.43,2.17-8.75,9.14-8.75h7.07v-13.8s-6.42-1.09-12.55-1.09c-12.81,0-21.17,7.76-21.17,21.81v12.35h-14.23v16.21h14.23v39.17h17.52v-39.17h13.06Z" />
                </svg>
              </Channel>
              <Channel>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 114 114"
                  style={{ height: "24px", width: "24px", fill: "#fff" }}
                >
                  <path d="M85.07,23.3c-3.43,0-6.22,2.75-6.22,6.15s2.78,6.15,6.22,6.15,6.22-2.75,6.22-6.15-2.78-6.15-6.22-6.15Z" />
                  <path d="M57.44,31.18c-14.4,0-26.11,11.58-26.11,25.82s11.71,25.82,26.11,25.82,26.11-11.58,26.11-25.82-11.71-25.82-26.11-25.82ZM57.44,73.54c-9.22,0-16.73-7.42-16.73-16.54s7.5-16.54,16.73-16.54,16.72,7.42,16.72,16.54-7.5,16.54-16.72,16.54Z" />
                  <path d="M78.16,109.43h-42.33c-17.56,0-31.85-14.13-31.85-31.49v-41.86c0-17.37,14.29-31.49,31.85-31.49h42.33c17.56,0,31.85,14.13,31.85,31.49v41.86c0,17.37-14.29,31.49-31.85,31.49ZM35.83,14.44c-12.06,0-21.87,9.7-21.87,21.63v41.86c0,11.93,9.81,21.63,21.87,21.63h42.33c12.06,0,21.87-9.7,21.87-21.63v-41.86c0-11.93-9.81-21.63-21.87-21.63h-42.33Z" />
                </svg>
              </Channel>
              <Channel>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 114 114"
                  style={{ height: "24px", width: "24px", fill: "#fff" }}
                >
                  <path d="M85.49,12.23h15.19l-33.19,37.93,39.04,51.61h-30.57l-23.94-31.3-27.4,31.3h-15.2l35.5-40.57L7.47,12.23h31.34l21.64,28.61,25.03-28.61ZM80.15,92.68h8.42L34.24,20.84h-9.03l54.95,71.84Z" />
                </svg>
              </Channel>
              <Channel>
                <svg
                  id="Layer_4"
                  data-name="Layer 4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 114 114"
                  style={{ height: "24px", width: "24px", fill: "#fff" }}
                >
                  <rect
                    style={{ fill: "#000" }}
                    x="35.01"
                    y="36.43"
                    width="45"
                    height="42"
                  />
                  <path d="M110.47,43.04c0-12.96-10.51-23.47-23.47-23.47H27c-12.96,0-23.47,10.51-23.47,23.47v27.92c0,12.96,10.51,23.47,23.47,23.47h60c12.96,0,23.47-10.51,23.47-23.47v-27.92ZM75.18,59.09l-26.91,13.31c-1.05.57-4.64-.19-4.64-1.39v-27.32c0-1.22,3.61-1.98,4.67-1.38l25.76,14.01c1.08.62,2.21,2.18,1.12,2.77Z" />
                </svg>
              </Channel>
              {/* <Channel>IG</Channel>
              <Channel>X</Channel> */}
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
