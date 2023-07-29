import Content from "./components/Content"
import SearchSidebar from "./components/SearchSidebar"
import Sidebar from "./components/SideBar"

function App() {
  return (
    <div className="flex w-screen h-screen bg-main font-display">
      <SearchSidebar />
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
