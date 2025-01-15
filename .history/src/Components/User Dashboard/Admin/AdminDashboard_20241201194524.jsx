import { useState } from "react";

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out md:translate-x-0 z-50`}
            >
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
            <div className="flex-1 flex flex-col max-w-7xl">
                {/* Top Navbar */}
                <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
                    {/* Hamburger Button for Sidebar */}
                    <button
                        className="text-gray-700 md:hidden focus:outline-none"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
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

            {/* Overlay for Sidebar on Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default AdminDashboard;