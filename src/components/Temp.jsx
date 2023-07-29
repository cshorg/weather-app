import { useState } from "react"

const Temp = () => {
  const [selected, setSelected] = useState(true)

  return (
    <div className="flex gap-3 pt-[42px] text-white w-full justify-end px-[125px]">
      <div
        onClick={() => setSelected(!selected)}
        className={` ${
          selected === true ? "bg-offWhite text-main" : "bg-purple "
        } w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer font-bold`}
      >
        °C
      </div>
      <div
        onClick={() => setSelected(!selected)}
        className={` ${
          selected === false ? "bg-offWhite text-main" : "bg-purple "
        } w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer font-bold`}
      >
        °F
      </div>
    </div>
  )
}

export default Temp
