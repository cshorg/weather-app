import Temp from "./Temp"
import Upcoming from "./Upcoming"
import Highlights from "./Highlights"

const Content = () => {
  return (
    <div className="ml-[460px] fixed">
      <Temp />
      <Upcoming />
      <Highlights />
    </div>
  )
}

export default Content
