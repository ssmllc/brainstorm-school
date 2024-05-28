"use client";

import React from "react";

interface Props {
  height: string;
  width: string;
}

export const IconSchedule = ({ height, width }: Props) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 57 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_41_1792)">
        <path
          d="M32.609 0H32.6084C31.7538 0 31.061 0.692798 31.061 1.54741V9.6399C31.061 10.4945 31.7538 11.1873 32.6084 11.1873H32.609C33.4636 11.1873 34.1564 10.4945 34.1564 9.6399V1.54741C34.1564 0.692798 33.4636 0 32.609 0Z"
          fill="white"
        />
        <path
          d="M10.6348 0C11.4885 0 12.1822 0.693724 12.1822 1.54741V9.63933C12.1822 10.4936 11.4885 11.1867 10.6348 11.1867C9.78055 11.1867 9.0874 10.493 9.0874 9.63933V1.54741C9.08683 0.693724 9.78055 0 10.6348 0Z"
          fill="white"
        />
        <path
          d="M29.5132 4.16064H13.7295V7.02727H29.5132V4.16064Z"
          fill="white"
        />
        <path
          d="M36.553 4.16064H35.7039V7.02727H36.553C38.723 7.02727 40.4883 8.79255 40.4883 10.9626V17.1035H2.86663V10.9626C2.86663 8.79255 4.6319 7.02727 6.80194 7.02727H7.53924V4.16064H6.80194C3.05124 4.16064 0 7.21189 0 10.9626V41.1981C0 44.9488 3.05124 48 6.80194 48H36.553C40.3037 48 43.3549 44.9488 43.3549 41.1981V10.9626C43.3549 7.21189 40.3037 4.16064 36.553 4.16064ZM40.4883 41.1981C40.4883 43.3681 38.723 45.1334 36.553 45.1334H6.80194C4.6319 45.1334 2.86663 43.3681 2.86663 41.1981V19.9695H40.4877V41.1981H40.4883Z"
          fill="white"
        />
      </g>
      <circle
        cx="14"
        cy="14"
        r="14"
        transform="matrix(1 0 0 -1 29 56)"
        fill="#00A3FF"
      />
      <path
        d="M41.6641 46.3516V43.375H38.6641V41.3203H41.6641V38.3438H43.6641V41.3203H46.6719V43.375H43.6641V46.3516H41.6641Z"
        fill="white"
      />
      <defs>
        <clipPath id="clip0_41_1792">
          <rect width="43.3543" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
