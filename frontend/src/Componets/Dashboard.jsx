


function Dashboard({ logoutHandler }) {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>
                <button
                    onClick={logoutHandler}
                    className="bg-red-500 text-white px-5 py-2 rounded-lg"
                >
                    Logout
                </button>
            </div>

            <div className="grid gap-5">

                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-bold">
                        Public Content
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Everyone can see this content.
                    </p>
                </div>

                {user?.role === "USER" && (
                    <div className="bg-blue-100 p-6 rounded-xl shadow">
                        <h2 className="text-xl font-bold">
                            User Content
                        </h2>

                        <p className="mt-2">
                            Only users can access this section.
                        </p>
                    </div>
                )}

                {user?.role === "ADMIN" && (
                    <div className="bg-red-100 p-6 rounded-xl shadow">
                        <h2 className="text-xl font-bold">
                            Admin Content
                        </h2>

                        <p className="mt-2">
                            Only admin can access this section.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Dashboard;