import { useState } from "react";
import axios from "axios";
import Dashboard from "./DashBoard";

function LandingPage() {
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [showDashboard, setShowDashboard] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "USER",
    });

    const user = JSON.parse(localStorage.getItem("user"));

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            if (isLogin) {
                const res = await axios.post(
                    "http://localhost:5000/login",
                    {
                        email: formData.email,
                        password: formData.password,
                    }
                );

                localStorage.setItem("token", res.data.token);

                localStorage.setItem(
                    "user",
                    JSON.stringify(res.data.user)
                );

                alert("Login Success");

                setShowModal(false);

                setShowDashboard(true);

            } else {
                await axios.post(
                    "http://localhost:5000/register",
                    formData
                );

                alert("Registration Success");

                setIsLogin(true);
            }

        } catch (error) {
            alert(error.response.data.message);

        } finally {
            setLoading(false);
        }
    };

    const logoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setShowDashboard(false);

        alert("Logout Success");
    };

    if (showDashboard) {
        return <Dashboard logoutHandler={logoutHandler} />;
    }

    return (
        <div className="min-h-screen bg-gray-100">

            <div className="flex justify-between items-center p-5 bg-white shadow">

                <h1 className="text-2xl font-bold">
                    RBAC System
                </h1>

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-black text-white px-5 py-2 rounded-lg"
                >
                    Login
                </button>

            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

                    <div className="bg-white w-[400px] p-8 rounded-xl relative">

                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-4 text-2xl font-bold"
                        >
                            ×
                        </button>

                        <h1 className="text-3xl font-bold text-center mb-6">
                            {isLogin ? "Login" : "Register"}
                        </h1>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >

                            {!isLogin && (
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    onChange={handleChange}
                                    className="w-full border p-3 rounded-lg"
                                />
                            )}

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg"
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg"
                            />

                            {!isLogin && (
                                <select
                                    name="role"
                                    onChange={handleChange}
                                    className="w-full border p-3 rounded-lg"
                                >
                                    <option value="USER">USER</option>
                                    <option value="ADMIN">ADMIN</option>
                                </select>
                            )}

                            <button
                                disabled={loading}
                                className="w-full bg-black text-white p-3 rounded-lg"
                            >
                                {loading
                                    ? "Please Wait..."
                                    : isLogin
                                        ? "Login"
                                        : "Register"}
                            </button>

                        </form>

                        <p className="text-center mt-5">

                            {isLogin
                                ? "Don't have an account?"
                                : "Already have an account?"}

                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="ml-2 text-blue-600"
                            >
                                {isLogin ? "Register" : "Login"}
                            </button>

                        </p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default LandingPage;