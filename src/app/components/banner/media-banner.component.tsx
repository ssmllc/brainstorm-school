"use client";

import styled from "styled-components";
import ActionButton from "../buttons/action-button.component";
import Pill from "../pill/pill.component";
import Heading from "../heading/heading.component";

interface bannerProps {
  hero: string;
  background: string;
}

const Banner = styled.div<bannerProps>`
  background: var(--black);
  display: flex;
  flex-direction: column;
  height: ${({ hero }) => (hero ? "100vh" : "50vh")};
  position: relative;
  width: 100vw;

  &::before {
    background: ${({ background }) =>
      background ? `url(${background}) top center no-repeat` : "var(--black)"};
    background-size: cover;
    content: "";
    display: block;
    height: 100%;
    opacity: 0.5;
    filter: blur(5px);
    position: relative;
    width: 100%;
    z-index: 1;
  }
`;

const Content = styled.div`
  /* border: thin dashed red; */
  display: flex;
  justify-content: space-between;
  left: 50%;
  margin: 0 auto;
  position: absolute;
  top: 20%;
  transform: translateX(-50%);
  width: 75%;
  z-index: 2;
`;

const Column = styled.div`
  /* border: thin dashed green; */
`;

interface Props {
  hero: string;
  background: string;
}

const CourseDetail = ({ children }: any) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: "var(--white-50)",
        padding: "10px 0",
      }}
    >
      {children}
    </li>
  );
};

const MediaBanner = ({ hero, background }: Props) => {
  return (
    <Banner hero={hero} background={background}>
      <Content>
        <Column>
          <Pill label="Figure Drawing & Anatomy" />
          <Heading header="Rhythm & Structure" subHeader="FIG RS" />
        </Column>

        <Column style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // border: "thin solid blue",
                padding: "20px 20px",
              }}
            >
              <CourseDetail>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 22"
                    height="20px"
                    fill="#bababa"
                    width="20px"
                  >
                    <g>
                      <g id="_1" data-name="1">
                        <path d="M21.19,24H2.81A2.81,2.81,0,0,1,0,21.19V8.94a.76.76,0,0,1,.77-.77H23.23a.76.76,0,0,1,.77.77V21.19A2.81,2.81,0,0,1,21.19,24ZM1.53,9.7V21.19a1.28,1.28,0,0,0,1.28,1.28H21.19a1.28,1.28,0,0,0,1.28-1.28V9.7Z" />
                        <path d="M23.23,9.7H.77A.76.76,0,0,1,0,8.94V4.85A2.81,2.81,0,0,1,2.81,2H21.19A2.81,2.81,0,0,1,24,4.85V8.94A.76.76,0,0,1,23.23,9.7ZM1.53,8.17H22.47V4.85a1.28,1.28,0,0,0-1.28-1.28H2.81A1.28,1.28,0,0,0,1.53,4.85Z" />
                        <path d="M12,5.62a.78.78,0,0,1-.77-.77V.77a.77.77,0,1,1,1.54,0V4.85A.78.78,0,0,1,12,5.62Z" />
                        <path d="M6.89,5.62a.77.77,0,0,1-.76-.77V.77a.77.77,0,1,1,1.53,0V4.85A.77.77,0,0,1,6.89,5.62Z" />
                        <path d="M17.11,5.62a.77.77,0,0,1-.77-.77V.77a.77.77,0,1,1,1.53,0V4.85A.77.77,0,0,1,17.11,5.62Z" />
                        <path d="M12.77,16.09a.77.77,0,1,1-.77-.77A.77.77,0,0,1,12.77,16.09Z" />
                        <circle cx="12" cy="19.15" r="0.77" />
                        <path d="M15.83,13a.77.77,0,1,1-1.53,0,.77.77,0,0,1,1.53,0Z" />
                        <path d="M15.83,16.09a.77.77,0,1,1-.77-.77A.76.76,0,0,1,15.83,16.09Z" />
                        <path d="M6.64,16.09a.77.77,0,1,1-.77-.77A.76.76,0,0,1,6.64,16.09Z" />
                        <path d="M6.64,19.15a.77.77,0,1,1-.77-.77A.77.77,0,0,1,6.64,19.15Z" />
                        <path d="M9.7,16.09a.77.77,0,1,1-.76-.77A.76.76,0,0,1,9.7,16.09Z" />
                        <path d="M9.7,19.15a.77.77,0,0,1-1.53,0,.77.77,0,1,1,1.53,0Z" />
                        <path d="M18.89,13a.77.77,0,1,1-.76-.76A.76.76,0,0,1,18.89,13Z" />
                        <path d="M18.89,16.09a.77.77,0,1,1-.76-.77A.76.76,0,0,1,18.89,16.09Z" />
                      </g>
                    </g>
                  </svg>
                </span>
                Fri 10am - 1pm (PST)
              </CourseDetail>

              <CourseDetail>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 22"
                    height="20px"
                    fill="#bababa"
                    width="20px"
                  >
                    <g>
                      <g>
                        <path d="M21.19,9.7H5.87A3.84,3.84,0,0,1,2,5.87v-2A3.84,3.84,0,0,1,5.87,0H21.19A.77.77,0,0,1,22,.77a.77.77,0,0,1-.77.76H5.87a2.3,2.3,0,0,0-2.3,2.3v2a2.3,2.3,0,0,0,2.3,2.3H21.19a.77.77,0,1,1,0,1.53Z" />
                        <path d="M21.19,24H3.83A3.84,3.84,0,0,1,0,20.17v-2A3.84,3.84,0,0,1,3.83,14.3H21.19a.77.77,0,1,1,0,1.53H3.83a2.3,2.3,0,0,0-2.3,2.3v2a2.3,2.3,0,0,0,2.3,2.3H21.19a.77.77,0,1,1,0,1.53Z" />
                        <path d="M23.23,15.83H6.89A2.8,2.8,0,0,1,4.09,13V11a2.8,2.8,0,0,1,2.8-2.81H23.23a.77.77,0,1,1,0,1.53H6.89A1.27,1.27,0,0,0,5.62,11v2A1.27,1.27,0,0,0,6.89,14.3H23.23a.77.77,0,1,1,0,1.53Z" />
                        <path d="M20.17,9.7a.77.77,0,0,1-.77-.76V.77a.77.77,0,1,1,1.54,0V8.94A.77.77,0,0,1,20.17,9.7Z" />
                        <path d="M20.17,24a.77.77,0,0,1-.77-.77V15.06a.77.77,0,0,1,1.54,0v8.17A.77.77,0,0,1,20.17,24Z" />
                        <path d="M17.11,19.92H4.85a.77.77,0,0,1,0-1.54H17.11a.77.77,0,0,1,0,1.54Z" />
                        <path d="M17.11,5.62H7.91a.77.77,0,0,1,0-1.54h9.2a.77.77,0,0,1,0,1.54Z" />
                        <path d="M22.21,15.83a.76.76,0,0,1-.76-.77V8.94a.77.77,0,1,1,1.53,0v6.12A.76.76,0,0,1,22.21,15.83Z" />
                      </g>
                    </g>
                  </svg>
                </span>
                10 Week Course
              </CourseDetail>
            </div>
            <ActionButton type="primary" label="Register" offsetMargin="0" />
          </div>
        </Column>
      </Content>
      <div style={{ background: "#222", width: "65%", height: "400px" }}></div>
    </Banner>
  );
};

export default MediaBanner;

//       <video
//         style={{ position: "absolute", left: 0, top: 0, objectFit: "cover" }}
//         muted
//         loop
//         width="100%"
//         height="100%"
//         autoPlay={true}
//       >
//         <source src="/video/lightning2.mp4" type="video/mp4" />
//       </video>