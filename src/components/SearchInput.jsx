import SearchIcon from "@mui/icons-material/Search"
import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const SearchInput = () => {
  const { input, setInput, searchLocation } = useContext(MainContext)

  return (
    <div>
      <div className="relative top-[36px] w-[20px] left-3 text-grey">
        <SearchIcon />
      </div>

      <input
        className="placeholder-grey pl-[49px] bg-secondary border-[1px] h-[48px] w-[275px] "
        type="text"
        placeholder="search location"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => searchLocation(input)}
        className="w-[86px] ml-[18px] bg-blue h-[49px] text-contentWhite "
      >
        Search
      </button>
    </div>
  )
}

export default SearchInput
