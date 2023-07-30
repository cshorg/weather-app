import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const Temp = () => {
  const { tempType, setTempType } = useContext(MainContext)

  return (
    <div className=" hidden lg:flex gap-3 pt-[42px] text-white w-full justify-end px-[125px]">
      <div
        onClick={() => setTempType(!tempType)}
        className={` ${
          tempType === true ? "bg-offWhite text-main" : "bg-purple "
        } w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer font-bold`}
      >
        °C
      </div>
      <div
        onClick={() => setTempType(!tempType)}
        className={` ${
          tempType === false ? "bg-offWhite text-main" : "bg-purple "
        } w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer font-bold`}
      >
        °F
      </div>
    </div>
  )
}

export default Temp
