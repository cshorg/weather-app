import GpsFixedIcon from "@mui/icons-material/GpsFixed"
import SearchButton from "./SearchButton"

const SiderbarHeader = () => {
  return (
    <div className="px-[20px] lg:px-[46px] pt-[20px] lg:pt-[42px] pb-[60px] lg:pb-[80px] flex flex-row items-center justify-between">
      <SearchButton />
      <button className="w-[40px] h-[40px] rounded-full shadow-md bg-grey shadow-main text-white cursor-pointer">
        <GpsFixedIcon />
      </button>
    </div>
  )
}

export default SiderbarHeader
