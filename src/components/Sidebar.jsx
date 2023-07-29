import { useContext } from "react"
import SiderbarHeader from "./SidebarHeader"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { MainContext } from "../context/MainContext"

const Sidebar = () => {
  const { data, formatDate, weatherImage } = useContext(MainContext)

  return (
    <div className="fixed w-[460px] bg-secondary h-full overflow-hidden">
      <SiderbarHeader />

      {data ? (
        <>
          <img
            src={weatherImage(data.current.condition.code)}
            alt="Icon"
            className="absolute left-32 top-48"
          />
          <img
            src="src/assets/Cloud-background.png"
            alt="background"
            className="scale-150 opacity-5"
          />
          <div className="flex items-center justify-center mt-20">
            <div className="text-[130px] font-medium text-white">
              {data.current.temp_c}
            </div>
            <div className="font-semibold text-offWhite text-[40px] mt-14">
              °C
            </div>
          </div>
          <div className="flex items-center justify-center mt-[87px] text-4xl font-semibold text-offWhite">
            {data.current.condition.text}
          </div>
          <div className="flex items-center justify-center mt-[87px] text-offWhite">
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
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Sidebar
