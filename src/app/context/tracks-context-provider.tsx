"use client";

import { createContext, useState } from "react";

export const TracksContext = createContext({});

export const TracksProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedContextTrack, setSelectedContextTrack] =
    useState("3d-concept");

  return (
    <TracksContext.Provider
      value={{
        selectedContextTrack,
        setSelectedContextTrack,
      }}
    >
      {children}
    </TracksContext.Provider>
  );
};
