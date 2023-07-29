import NearMeIcon from "@mui/icons-material/NearMe"
import Bar from "./Bar"

const Highlights = () => {
  return (
    <div className="text-white px-[125px] mt-[72px] w-full">
      <div className="text-xl font-semibold">Today's Highlights</div>

      <div className="grid grid-cols-2 gap-[48px] mt-[32px] text-contentWhite">
        <div className=" bg-secondary w-[328px] h-[204px] flex flex-col items-center pt-[22px]">
          <div>Wind Status</div>
          <div className="flex items-center pt-[12px]">
            <div className="font-bold text-7xl">7</div>
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
            <div className="font-bold text-7xl">84</div>
            <div className="text-3xl mt-[20px]">%</div>
          </div>
          <div className="pt-[18px]">
            <Bar progress={84} />
          </div>
        </div>
        <div className=" bg-secondary w-[328px] h-[159px]">
          <div className="flex items-center pt-[22px] justify-center ">
            Visibility
          </div>
          <div className="flex justify-center items-center pt-[6px] gap-4">
            <div className="font-bold text-7xl">6,4</div>
            <div className="text-3xl mt-[20px]">miles</div>
          </div>
        </div>
        <div className=" bg-secondary w-[328px] h-[159px]">
          <div className="flex items-center pt-[22px] justify-center ">
            Air Pressure
          </div>
          <div className="flex justify-center items-center pt-[6px] gap-4">
            <div className="font-bold text-7xl">998</div>
            <div className="text-3xl mt-[20px]">mb</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights
