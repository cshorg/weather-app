import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const SearchButton = () => {
  const { isOpen, setIsOpen } = useContext(MainContext)

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="h-[40px]  w-[161px] shadow-md shadow-main bg-grey text-white placeholder-white"
    >
      Search for places
    </button>
  )
}

export default SearchButton
