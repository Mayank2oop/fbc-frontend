import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const AddCafe = () => {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        description: "",
        images: [],
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, images: e.target.files });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("location", formData.location);
        formDataToSend.append("description", formData.description);
        
        // Append all images for real
        for (let i = 0; i < formData.images.length; i++) {
            formDataToSend.append("images", formData.images[i]);
        }

        try {
            const token = localStorage.getItem("token");


            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/cafes`, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            alert("Café added successfully!");
            navigate("/cafes"); // Redirect to homepage after success
        } catch (error) {
            console.error(error);
            alert("Error adding café.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-blue-500 text-center">Add Cafe</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Cafe Name" onChange={handleChange} className="w-full p-2 border rounded" required />
                <input type="text" name="location" placeholder="Location" onChange={handleChange} className="w-full p-2 border rounded" required />
                <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border rounded" required></textarea>
                <input type="file" multiple onChange={handleFileChange} className="w-full p-2 border rounded" accept="image/*" required />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" disabled={loading}>
                    {loading ? "Adding..." : "Add Cafe"}
                </button>
            </form>
        </div>
        </>
    );
};

export default AddCafe;
