import Sidebar from "../components/Sidebar"

const MainLayout = ({ children }) => {
  return (
    <div className="flex bg-[#0B0F19] min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  )
}

export default MainLayout