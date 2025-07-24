import Footer from "./Footer"
import Header from "./Header"

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-light2">
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 py-4 px-8 max-w-(--layout-width)">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Layout
