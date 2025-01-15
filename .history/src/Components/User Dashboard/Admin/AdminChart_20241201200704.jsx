import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const AdminChart = () => {
    // Data for the Pie Chart
    const pieChartData = {
        labels: ["Total Donors", "Total Donations", "Active Requests"],
        datasets: [
            {
                label: "Statistics",
                data: [150, 500, 45], // Todo set dynamic data 
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    return (
        <div className="lg:w-full w-1/2">
            <div className="bg-white shadow-md rounded-lg p-6 mt-6">
                <h2 className="text-lg font-bold mb-4">Statistics Overview</h2>
                <div className="w-full md:w-1/2 mx-auto">
                    <Pie data={pieChartData} />
                </div>
            </div>
        </div>

    );
};

export default AdminChart;
