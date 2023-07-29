const Bar = ({ progress }) => {
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="flex items-center justify-between text-xs">
        <div>0</div>
        <div>50</div>
        <div>100</div>
      </div>
      <div className="w-[230px] h-[8px] z-0 bg-offWhite rounded-full"></div>
      <div
        style={{ width: `${progress}%` }}
        className={`relative bottom-[10px] z-10 h-[8px] bg-yellow rounded-full`}
      ></div>
      <div className="relative flex items-center justify-end text-xs bottom-[10px]">
        %
      </div>
    </div>
  )
}

export default Bar
