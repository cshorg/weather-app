import { createContext, useEffect, useState } from "react"

import axios from "axios"

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [tempType, setTempType] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = () => {
      // Get the stored data and timestamp from localStorage
      const storedData = localStorage.getItem("weather-data")
      const storedTimestamp = localStorage.getItem("weather-time")

      // Check if the data is stored and not expired (within the last 5 minutes)
      const isDataValid = storedData && Date.now() - storedTimestamp < 300000

      if (isDataValid) {
        // If the stored data is valid, use it without making a new API call
        console.log("gettig localstorage")
        setData(JSON.parse(storedData))
      } else {
        // If the data is not valid or not stored, fetch fresh data from the API
        console.log("refetching")
        axios
          .get(
            "http://api.weatherapi.com/v1/forecast.json?key=40baaac8c7d64cb195314536232907&q&q=Barcelona&days=5&aqi=yes&alerts=yes"
          )
          .then((response) => {
            setData(response.data)

            // Store the fetched data and current timestamp in localStorage
            localStorage.setItem("weather-data", JSON.stringify(response.data))
            localStorage.setItem("weather-time", Date.now())
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error)
          })
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    console.log(data) // This will log the data whenever it changes
  }, [data])

  const formatDate = (dateString) => {
    const options = { weekday: "short", day: "numeric", month: "short" }
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    )
    return formattedDate
  }

  const weatherImage = (value) => {
    if (value === 1000) {
      return "src/assets/Clear.png"
    } else if (value >= 1003 && value <= 1030) {
      return "src/assets/LightCloud.png"
    } else if (value >= 1063 && value <= 1072) {
      return "src/assets/LightRain.png"
    } else if (value >= 1087 && value <= 1183) {
      return "src/assets/Sleet.png"
    } else if (value >= 1186 && value <= 1222) {
      return "src/assets/HeavyRain.png"
    } else if (value >= 1225 && value <= 1249) {
      return "src/assets/Hail.png"
    } else if (value >= 1252 && value <= 1282) {
      return "src/assets/Thunderstorm.png"
    } else {
      return "src/assets/Clear.png"
    }
  }

  return (
    <MainContext.Provider
      value={{ isOpen, setIsOpen, data, formatDate, weatherImage }}
    >
      {children}
    </MainContext.Provider>
  )
}

// http://api.weatherapi.com/v1/current.json?key=40baaac8c7d64cb195314536232907&q=London&aqi=no
