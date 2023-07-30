import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const Upcoming = () => {
  const { data, formatDate, weatherImage, tempType } = useContext(MainContext)

  return (
    <div className="px-[54px] lg:px-[125px] mt-[52px] lg:mt-[66px] grid grid-cols-2 lg:grid-cols-5 gap-[26px] justify-between text-contentWhite">
      {data &&
        data.forecast.forecastday.map((day, index) => (
          <div key={index} className="w-[120px] h-[177px] bg-secondary">
            <div className="pt-[18px] text-sm px-[22px]">
              {index === 0 ? "Tomorrow" : formatDate(day.date)}
            </div>
            <div className="flex items-center justify-center w-full">
              <img
                className="h-[62px] mt-[10px]"
                src={weatherImage(day.day.condition.code)}
                alt="icon"
              />
            </div>

            <div className="pt-[18px] text-sm justify-center flex gap-[12px] mt-[10px]">
              <div>
                {tempType ? day.day.maxtemp_c + "°C" : day.day.maxtemp_f + "°F"}
              </div>
              <div>
                {tempType ? day.day.mintemp_c + "°C" : day.day.mintemp_f + "°F"}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Upcoming
