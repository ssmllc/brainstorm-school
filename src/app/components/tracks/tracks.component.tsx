"use client";

import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";

const TracksContainer = styled.div`
  /* border: thin solid red; */
  padding: 0 0 75px 0;
`;

const Tracks = styled.div`
  /* border: thin solid red; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
  width: 80%;

  @media (min-width: 800px) {
    flex-direction: row;
    width: 65%;
  }
`;

interface trackProps {
  poster: string;
}

const Track = styled.div<trackProps>`
  background: var(--black) url(${(props) => props.poster}) top center no-repeat;
  background-size: cover;
  border-radius: 20px;
  filter: grayscale(0.5);
  flex-grow: 1;
  flex-basis: 25%;
  min-height: 350px;
  padding: 150px 20px 0 20px;
  pointer-events: none;
  position: relative;
`;

const Icon = styled.div`
  align-items: center;
  border: 2px solid var(--white);
  border-radius: 100%;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  width: 50px;
`;

const Name = styled.p`
  color: var(--white);
  font-weight: bold;
  font-size: 24px;
  padding: 20px 0;
`;

const TracksGroup = () => {
  return (
    <TracksContainer>
      <RegistrationBlock
        primary={false}
        heading="Learn courses relevant to todays market. Our course guides will keep you on track."
      />
      <Tracks>
        <Track poster="cards/character-design.jpg">
          <Icon>
            <svg
              style={{ width: "25px", height: "25px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g style={{ fill: "#fff" }}>
                <g id="Layer_1" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M12,9.7a.68.68,0,0,1-.34-.08L3.49,5.54a.78.78,0,0,1-.43-.69.76.76,0,0,1,.43-.68L11.66.08a.74.74,0,0,1,.68,0l8.17,4.09a.76.76,0,0,1,.43.68.78.78,0,0,1-.43.69L12.34,9.62A.68.68,0,0,1,12,9.7ZM5.54,4.85,12,8.08l6.46-3.23L12,1.62Z"
                  />
                  <path
                    className="cls-1"
                    d="M12,17.87a.68.68,0,0,1-.34-.08L3.49,13.71A.78.78,0,0,1,3.06,13V4.85a.77.77,0,0,1,1.54,0v7.7l7.4,3.7,7.4-3.7V4.85a.77.77,0,0,1,1.54,0V13a.78.78,0,0,1-.43.69l-8.17,4.08A.68.68,0,0,1,12,17.87Z"
                  />
                  <path
                    className="cls-1"
                    d="M12,17.87a.77.77,0,0,1-.77-.76V8.94a.77.77,0,1,1,1.54,0v8.17A.77.77,0,0,1,12,17.87Z"
                  />
                  <path
                    className="cls-1"
                    d="M12,24C6.18,24,0,22.3,0,19.15a.77.77,0,0,1,.77-.77.77.77,0,0,1,.76.77c0,1.2,3,2.82,8.05,3.22L7.46,20.78a.77.77,0,0,1-.16-1.07.76.76,0,0,1,1.07-.15l4.09,3.06a.78.78,0,0,1,.27.86A.78.78,0,0,1,12,24Z"
                  />
                  <path
                    className="cls-1"
                    d="M.77,19.92A.77.77,0,0,1,0,19.15c0-1.6,1.63-3,4.6-3.88a.78.78,0,0,1,1,.51.77.77,0,0,1-.52,1c-2.13.64-3.51,1.59-3.51,2.41A.77.77,0,0,1,.77,19.92Z"
                  />
                  <path
                    className="cls-1"
                    d="M23.23,19.92a.77.77,0,0,1-.76-.77c0-.82-1.38-1.77-3.51-2.41a.77.77,0,1,1,.44-1.47c3,.9,4.6,2.28,4.6,3.88A.77.77,0,0,1,23.23,19.92Z"
                  />
                  <path
                    className="cls-1"
                    d="M15.08,23.84A.76.76,0,0,1,15,22.32c4.67-.49,7.47-2,7.47-3.17a.77.77,0,1,1,1.53,0c0,2.29-3.47,4.13-8.84,4.69Z"
                  />
                </g>
              </g>
            </svg>
          </Icon>
          <Name>Character Design</Name>
        </Track>
        <Track poster="cards/environmental-design.jpg">
          <Icon>
            <svg
              style={{ width: "25px", height: "25px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g style={{ fill: "#fff" }}>
                <g id="Layer_1" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M12,9.7a.68.68,0,0,1-.34-.08L3.49,5.54a.78.78,0,0,1-.43-.69.76.76,0,0,1,.43-.68L11.66.08a.74.74,0,0,1,.68,0l8.17,4.09a.76.76,0,0,1,.43.68.78.78,0,0,1-.43.69L12.34,9.62A.68.68,0,0,1,12,9.7ZM5.54,4.85,12,8.08l6.46-3.23L12,1.62Z"
                  />
                  <path
                    className="cls-1"
                    d="M12,17.87a.68.68,0,0,1-.34-.08L3.49,13.71A.78.78,0,0,1,3.06,13V4.85a.77.77,0,0,1,1.54,0v7.7l7.4,3.7,7.4-3.7V4.85a.77.77,0,0,1,1.54,0V13a.78.78,0,0,1-.43.69l-8.17,4.08A.68.68,0,0,1,12,17.87Z"
                  />
                  <path
                    className="cls-1"
                    d="M12,17.87a.77.77,0,0,1-.77-.76V8.94a.77.77,0,1,1,1.54,0v8.17A.77.77,0,0,1,12,17.87Z"
                  />
                  <path
                    className="cls-1"
                    d="M12,24C6.18,24,0,22.3,0,19.15a.77.77,0,0,1,.77-.77.77.77,0,0,1,.76.77c0,1.2,3,2.82,8.05,3.22L7.46,20.78a.77.77,0,0,1-.16-1.07.76.76,0,0,1,1.07-.15l4.09,3.06a.78.78,0,0,1,.27.86A.78.78,0,0,1,12,24Z"
                  />
                  <path
                    className="cls-1"
                    d="M.77,19.92A.77.77,0,0,1,0,19.15c0-1.6,1.63-3,4.6-3.88a.78.78,0,0,1,1,.51.77.77,0,0,1-.52,1c-2.13.64-3.51,1.59-3.51,2.41A.77.77,0,0,1,.77,19.92Z"
                  />
                  <path
                    className="cls-1"
                    d="M23.23,19.92a.77.77,0,0,1-.76-.77c0-.82-1.38-1.77-3.51-2.41a.77.77,0,1,1,.44-1.47c3,.9,4.6,2.28,4.6,3.88A.77.77,0,0,1,23.23,19.92Z"
                  />
                  <path
                    className="cls-1"
                    d="M15.08,23.84A.76.76,0,0,1,15,22.32c4.67-.49,7.47-2,7.47-3.17a.77.77,0,1,1,1.53,0c0,2.29-3.47,4.13-8.84,4.69Z"
                  />
                </g>
              </g>
            </svg>
          </Icon>
          <Name>Environmental Design</Name>
        </Track>
        <Track poster="cards/3d-concept.jpg">
          <Icon>
            <svg
              style={{ width: "25px", height: "25px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g style={{ fill: "#fff" }}>
                <g id="Layer_1" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M12,9.7a.68.68,0,0,1-.34-.08L3.49,5.54a.78.78,0,0,1-.43-.69.76.76,0,0,1,.43-.68L11.66.08a.74.74,0,0,1,.68,0l8.17,4.09a.76.76,0,0,1,.43.68.78.78,0,0,1-.43.69L12.34,9.62A.68.68,0,0,1,12,9.7ZM5.54,4.85,12,8.08l6.46-3.23L12,1.62Z"
                  />
                  <path
                    className="cls-1"
                    d="M12,17.87a.68.68,0,0,1-.34-.08L3.49,13.71A.78.78,0,0,1,3.06,13V4.85a.77.77,0,0,1,1.54,0v7.7l7.4,3.7,7.4-3.7V4.85a.77.77,0,0,1,1.54,0V13a.78.78,0,0,1-.43.69l-8.17,4.08A.68.68,0,0,1,12,17.87Z"
                  />
                  <path
                    className="cls-1"
                    d="M12,17.87a.77.77,0,0,1-.77-.76V8.94a.77.77,0,1,1,1.54,0v8.17A.77.77,0,0,1,12,17.87Z"
                  />
                  <path
                    className="cls-1"
                    d="M12,24C6.18,24,0,22.3,0,19.15a.77.77,0,0,1,.77-.77.77.77,0,0,1,.76.77c0,1.2,3,2.82,8.05,3.22L7.46,20.78a.77.77,0,0,1-.16-1.07.76.76,0,0,1,1.07-.15l4.09,3.06a.78.78,0,0,1,.27.86A.78.78,0,0,1,12,24Z"
                  />
                  <path
                    className="cls-1"
                    d="M.77,19.92A.77.77,0,0,1,0,19.15c0-1.6,1.63-3,4.6-3.88a.78.78,0,0,1,1,.51.77.77,0,0,1-.52,1c-2.13.64-3.51,1.59-3.51,2.41A.77.77,0,0,1,.77,19.92Z"
                  />
                  <path
                    className="cls-1"
                    d="M23.23,19.92a.77.77,0,0,1-.76-.77c0-.82-1.38-1.77-3.51-2.41a.77.77,0,1,1,.44-1.47c3,.9,4.6,2.28,4.6,3.88A.77.77,0,0,1,23.23,19.92Z"
                  />
                  <path
                    className="cls-1"
                    d="M15.08,23.84A.76.76,0,0,1,15,22.32c4.67-.49,7.47-2,7.47-3.17a.77.77,0,1,1,1.53,0c0,2.29-3.47,4.13-8.84,4.69Z"
                  />
                </g>
              </g>
            </svg>
          </Icon>
          <Name>3D Concept Design</Name>
        </Track>
        <Track poster="cards/storyboarding.jpg">
          <Icon>
            <svg
              style={{ width: "25px", height: "25px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g style={{ fill: "#fff" }}>
                <g id="Layer_1" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M12,9.7a.68.68,0,0,1-.34-.08L3.49,5.54a.78.78,0,0,1-.43-.69.76.76,0,0,1,.43-.68L11.66.08a.74.74,0,0,1,.68,0l8.17,4.09a.76.76,0,0,1,.43.68.78.78,0,0,1-.43.69L12.34,9.62A.68.68,0,0,1,12,9.7ZM5.54,4.85,12,8.08l6.46-3.23L12,1.62Z"
                  />
                  <path
                    className="cls-1"
                    d="M12,17.87a.68.68,0,0,1-.34-.08L3.49,13.71A.78.78,0,0,1,3.06,13V4.85a.77.77,0,0,1,1.54,0v7.7l7.4,3.7,7.4-3.7V4.85a.77.77,0,0,1,1.54,0V13a.78.78,0,0,1-.43.69l-8.17,4.08A.68.68,0,0,1,12,17.87Z"
                  />
                  <path
                    className="cls-1"
                    d="M12,17.87a.77.77,0,0,1-.77-.76V8.94a.77.77,0,1,1,1.54,0v8.17A.77.77,0,0,1,12,17.87Z"
                  />
                  <path
                    className="cls-1"
                    d="M12,24C6.18,24,0,22.3,0,19.15a.77.77,0,0,1,.77-.77.77.77,0,0,1,.76.77c0,1.2,3,2.82,8.05,3.22L7.46,20.78a.77.77,0,0,1-.16-1.07.76.76,0,0,1,1.07-.15l4.09,3.06a.78.78,0,0,1,.27.86A.78.78,0,0,1,12,24Z"
                  />
                  <path
                    className="cls-1"
                    d="M.77,19.92A.77.77,0,0,1,0,19.15c0-1.6,1.63-3,4.6-3.88a.78.78,0,0,1,1,.51.77.77,0,0,1-.52,1c-2.13.64-3.51,1.59-3.51,2.41A.77.77,0,0,1,.77,19.92Z"
                  />
                  <path
                    className="cls-1"
                    d="M23.23,19.92a.77.77,0,0,1-.76-.77c0-.82-1.38-1.77-3.51-2.41a.77.77,0,1,1,.44-1.47c3,.9,4.6,2.28,4.6,3.88A.77.77,0,0,1,23.23,19.92Z"
                  />
                  <path
                    className="cls-1"
                    d="M15.08,23.84A.76.76,0,0,1,15,22.32c4.67-.49,7.47-2,7.47-3.17a.77.77,0,1,1,1.53,0c0,2.29-3.47,4.13-8.84,4.69Z"
                  />
                </g>
              </g>
            </svg>
          </Icon>
          <Name>Storyboarding</Name>
        </Track>
      </Tracks>
    </TracksContainer>
  );
};

export default TracksGroup;
