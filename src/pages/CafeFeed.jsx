import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const CafeFeed = () => {
    const [cafes, setCafes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;

    useEffect(() => {
        const fetchCafes = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/cafes`);
                setCafes(res.data);
            } catch (err) {
                setError("Failed to load cafés. Please try again.");
                console.error("Error fetching cafés:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCafes();
    }, []);

    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto mt-10 p-4">
                <h1 className="text-3xl font-bold text-blue-600 text-center mb-5">Cafe Feed</h1>

                {loading && <p className="text-center text-gray-600">Loading cafes...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                {!loading && cafes.length === 0 && (
                    <p className="text-center text-gray-500">No cafes found. Add one!</p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cafes.map((cafe) => (
                        <div key={cafe._id} className="bg-white p-4 rounded-lg shadow-md">
                            {cafe.images.length > 0 && (
                                <img
  src={`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL.replace(/\/$/, "")}/${cafe.images[0].replace(/\\/g, "/")}`}
  alt={cafe.name}
  className="w-full h-48 object-cover rounded-lg"
/>

                            )}
                            <h2 className="text-xl font-semibold mt-3">{cafe.name}</h2>
                            <p className="text-gray-600">{cafe.location}</p>
                            <p className="text-sm mt-2">{cafe.description}</p>
                            <p className="text-blue-500 mt-2">Added by: {cafe.user?.name || "Unknown"}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CafeFeed;
