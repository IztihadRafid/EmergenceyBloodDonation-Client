
const AdminDashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg hidden md:block">
                <div className="p-6 text-gray-800">
                    <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
                    <nav>
                        <ul>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="flex items-center p-2 rounded-lg hover:bg-gray-200"
                                >
                                    <span className="text-lg">📊</span>
                                    <span className="ml-2">Dashboard</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="flex items-center p-2 rounded-lg hover:bg-gray-200"
                                >
                                    <span className="text-lg">🩸</span>
                                    <span className="ml-2">Donors</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="flex items-center p-2 rounded-lg hover:bg-gray-200"
                                >
                                    <span className="text-lg">📋</span>
                                    <span className="ml-2">Requests</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="flex items-center p-2 rounded-lg hover:bg-gray-200"
                                >
                                    <span className="text-lg">⚙️</span>
                                    <span className="ml-2">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-700">
                        Admin Dashboard
                    </h1>
                    <div className="flex items-center space-x-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Logout
                        </button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 p-6 bg-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-lg font-bold">Total Donors</h2>
                            <p className="text-2xl font-semibold mt-2">150</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-lg font-bold">Total Donations</h2>
                            <p className="text-2xl font-semibold mt-2">500</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-lg font-bold">Active Requests</h2>
                            <p className="text-2xl font-semibold mt-2">45</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );

};

export default AdminDashboard;