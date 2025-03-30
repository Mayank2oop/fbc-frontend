import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 text-white">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">FBC</h1>
                <div className="space-x-4">
                 
                    <Link to="/cafes" className="hover:underline">Cafes</Link>  {/* ✅ New Link */}
                    <Link to="/addcafe" className="hover:underline">Add Cafe</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
