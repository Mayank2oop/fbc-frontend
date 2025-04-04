import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>

        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to Cafe Finder</h1>
            <p className="text-lg text-gray-600 mb-6">Discover and review the best cafes around you.</p>
            <div className="space-x-4">
                <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Login
                </Link>
                <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded">
                    Sign Up
                </Link>
            </div>
        </div>

        </>
    );
}
