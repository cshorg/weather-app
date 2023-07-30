import Content from "./components/Content"
import SearchSidebar from "./components/SearchSidebar"
import Sidebar from "./components/SideBar"

function App() {
  return (
    <div className="flex flex-col w-screen h-full lg:flex-row bg-main font-display">
      <SearchSidebar />
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
