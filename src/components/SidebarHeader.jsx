import GpsFixedIcon from "@mui/icons-material/GpsFixed"
import SearchButton from "./SearchButton"

const SiderbarHeader = () => {
  return (
    <div className="px-[46px] pt-[42px] pb-[80px] flex flex-row items-center justify-between">
      <SearchButton />
      <button className="w-[40px] h-[40px] rounded-full shadow-md bg-grey shadow-main text-white cursor-pointer">
        <GpsFixedIcon />
      </button>
    </div>
  )
}

export default SiderbarHeader
