import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[#0B0F19] min-h-screen text-white">

      <div className="flex">

        <Sidebar />

        <main
          className="
            flex-1
            p-4 sm:p-6 lg:p-8
            overflow-x-hidden
          "
        >

          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          {children}

        </main>

      </div>

    </div>
  )
}

export default MainLayout