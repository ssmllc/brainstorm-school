'use client'
 
import { createContext } from 'react'
 
export const BrainstormContext = createContext({});
 
export const BrainstormProvider = ({ children }:{ children: React.ReactNode }) => {
  return (
    <BrainstormContext.Provider value={
      {
        course: [
          "Flash",
          "Foundation",
          "Concept Art"
        ]
      }
    }>
      { children }
    </BrainstormContext.Provider>
  )
}