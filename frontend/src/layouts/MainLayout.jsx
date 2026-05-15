import Sidebar from "../components/Sidebar"

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[#0B0F19] min-h-screen text-white">

      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          {children}
        </main>

      </div>

    </div>
  )
}

export default MainLayout