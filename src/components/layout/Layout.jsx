import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";


// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div>
            {/* Navbar  */}
            <Navbar />
            {/* main Content  */}
            <div className="content min-h-screen">
                {children}
            </div>
            {/* Footer  */}
            <Footer />
            </div>
  )
}

export default Layout
