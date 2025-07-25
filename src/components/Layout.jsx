import Footer from "./Footer"
import Header from "./Header"

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-light2">
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Layout
