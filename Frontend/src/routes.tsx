import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./containers/About"

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
        </Routes>
    )
}

export default Pages