import NearMeIcon from "@mui/icons-material/NearMe"
import Bar from "./Bar"
import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const Highlights = () => {
  const { data } = useContext(MainContext)

  return (
    <div className="text-white px-[125px] mt-[72px] w-full">
      {data ? (
        <>
          <div className="text-xl font-semibold">Today's Highlights</div>

          <div className="grid grid-cols-2 gap-[48px] mt-[32px] text-contentWhite">
            <div className=" bg-secondary w-[328px] h-[204px] flex flex-col items-center pt-[22px]">
              <div>Wind Status</div>
              <div className="flex items-center gap-1 pt-[12px]">
                <div className="font-bold text-7xl">
                  {data.current.wind_mph}
                </div>
                <div className="text-3xl mt-[20px]">mph</div>
              </div>
              <div className="flex items-center gap-2 pt-[17px]">
                <div className=" w-[30px] h-[30px] bg-grey rounded-full flex items-center justify-center">
                  <NearMeIcon fontSize="" />
                </div>
                <div>wsw</div>
              </div>
            </div>
            <div className=" bg-secondary w-[328px] h-[204px] flex flex-col items-center pt-[22px]">
              <div>Humidity</div>
              <div className="flex items-center pt-[12px]">
                <div className="font-bold text-7xl">
                  {data.current.humidity}
                </div>
                <div className="text-3xl mt-[20px]">%</div>
              </div>
              <div className="pt-[18px]">
                <Bar progress={data.current.humidity} />
              </div>
            </div>
            <div className=" bg-secondary w-[328px] h-[159px]">
              <div className="flex items-center pt-[22px] justify-center ">
                Visibility
              </div>
              <div className="flex justify-center items-center pt-[6px] gap-1">
                <div className="font-bold text-7xl">
                  {data.current.vis_miles}
                </div>
                <div className="text-3xl mt-[20px]">miles</div>
              </div>
            </div>
            <div className=" bg-secondary w-[328px] h-[159px]">
              <div className="flex items-center pt-[22px] justify-center ">
                Air Pressure
              </div>
              <div className="flex justify-center items-center pt-[6px] gap-1">
                <div className="font-bold text-7xl">
                  {data.current.pressure_mb}
                </div>
                <div className="text-3xl mt-[20px]">mb</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>loading..</div>
      )}
    </div>
  )
}

export default Highlights
