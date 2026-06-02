import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router"

const FrontendLayout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default FrontendLayout