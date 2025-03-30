import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddCafe from "./pages/AddCafe";
import CafeFeed from "./pages/CafeFeed";



function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/addcafe" element={<AddCafe />} />
                <Route path="/cafes" element={<CafeFeed />} />

            </Routes>
        </Router>
    );
}

export default App;
