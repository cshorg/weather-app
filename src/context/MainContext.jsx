import { createContext, useState } from "react"

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <MainContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MainContext.Provider>
  )
}
