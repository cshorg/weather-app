import { useContext } from "react"
import { MainContext } from "../context/MainContext"

import CloseIcon from "@mui/icons-material/Close"

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
      </div>
    </>
  )
}

export default SearchSidebar
