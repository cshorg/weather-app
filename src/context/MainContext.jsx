import { createContext, useEffect, useState } from "react"

import axios from "axios"

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [tempType, setTempType] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=40baaac8c7d64cb195314536232907&q=Tokyo&aqi=no"
      )
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error)
      })
  }, [])

  useEffect(() => {
    console.log(data) // This will log the data whenever it changes
  }, [data])

  return (
    <MainContext.Provider value={{ isOpen, setIsOpen, data }}>
      {children}
    </MainContext.Provider>
  )
}

// http://api.weatherapi.com/v1/current.json?key=40baaac8c7d64cb195314536232907&q=London&aqi=no
