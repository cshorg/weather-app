import { useContext } from "react"
import { MainContext } from "../context/MainContext"

import CloseIcon from "@mui/icons-material/Close"
import RightIcon from "@mui/icons-material/ChevronRight"

import SearchInput from "./SearchInput"

const SearchSidebar = () => {
  const { isOpen, setIsOpen } = useContext(MainContext)

  return (
    <>
      <div
        className={`top-0 -left-[460px] w-[460px] bg-secondary p-10 pl-10 text-white fixed h-full z-10 transition ease-in-out duration-300 ${
          isOpen ? "translate-x -left-100" : "translate-x-full "
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Search Location</div>

          <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <CloseIcon />
          </div>
        </div>
        <div>
          <SearchInput />
        </div>
        <div className="mt-[58px] flex flex-col gap-4">
          <div className="h-[64px] cursor-pointer border-[1px] border-contentWhite hover:border-opacity-100 border-opacity-0 flex px-[12px] items-center justify-between">
            London
            <div className="text-grey">
              <RightIcon />
            </div>
          </div>
          <div className="h-[64px] cursor-pointer border-[1px] border-contentWhite hover:border-opacity-100 border-opacity-0 flex px-[12px] items-center justify-between">
            Tokyo
            <div className="text-grey">
              <RightIcon />
            </div>
          </div>
          <div className="h-[64px] cursor-pointer border-[1px] border-contentWhite hover:border-opacity-100 border-opacity-0 flex px-[12px] items-center justify-between">
            New York
            <div className="text-grey">
              <RightIcon />
            </div>
          </div>
          <div className="h-[64px] cursor-pointer border-[1px] border-contentWhite hover:border-opacity-100 border-opacity-0  flex px-[12px] items-center justify-between">
            Los Angeles
            <div className=" text-grey">
              <RightIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchSidebar
