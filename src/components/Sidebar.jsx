import { useContext } from "react"
import SiderbarHeader from "./SidebarHeader"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { MainContext } from "../context/MainContext"

const Sidebar = () => {
  const { data, formatDate, weatherImage, tempType } = useContext(MainContext)

  return (
    <div className="absolute w-[375px] lg:w-[460px] bg-secondary h-[810px] lg:h-full overflow-hidden">
      <SiderbarHeader />

      {data ? (
        <>
          <img
            src={weatherImage(data.current.condition.code)}
            alt="Icon"
            className="absolute left-28 top-48 w-[150px] lg:left-32 lg:top-48"
          />
          <img
            src="/Cloud-background.png"
            alt="background"
            className="scale-150 opacity-5"
          />
          <div className="flex items-center justify-center lg:mt-20">
            <div className="text-[130px] font-medium text-white">
              {tempType ? data.current.temp_c : data.current.temp_f}
            </div>
            <div className="font-semibold text-offWhite text-[40px] mt-14">
              {tempType ? "°C" : "°F"}
            </div>
          </div>
          <div className="flex items-center justify-center mt-[23px] lg:mt-[87px] text-4xl font-semibold text-offWhite">
            {data.current.condition.text}
          </div>
          <div className="flex items-center justify-center mt-[48px] lg:mt-[87px] text-offWhite">
            <div>Today</div>
            <span className="w-[3px] h-[3px] mx-3 rounded-full bg-offWhite"></span>
            <div>{formatDate(data?.location?.localtime)}</div>
          </div>
          <div className="flex items-center justify-center gap-1 mt-[32px] text-medium text-offWhite">
            <LocationOnIcon />
            {data.location.name}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center mt-40 text-purple animate-spin">
          <div className="w-[50px] h-[50px]">
            <AiOutlineLoading3Quarters size={50} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
