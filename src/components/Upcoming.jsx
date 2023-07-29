import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const Upcoming = () => {
  const { data, formatDate, weatherImage } = useContext(MainContext)

  return (
    <div className=" px-[125px] mt-[66px] flex flex-row items-center justify-between text-contentWhite">
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

            <div className="pt-[18px] text-sm px-[22px] flex gap-[12px] mt-[10px]">
              <div>{day.day.maxtemp_c + "°C"}</div>
              <div>{day.day.mintemp_c + "°C"}</div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Upcoming
