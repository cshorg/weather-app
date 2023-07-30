import Temp from "./Temp"
import Upcoming from "./Upcoming"
import Highlights from "./Highlights"

const Content = () => {
  return (
    <div className="mt-[810px]  lg:mt-0 lg:ml-[460px] lg:fixed">
      <Temp />
      <Upcoming />
      <Highlights />
    </div>
  )
}

export default Content
