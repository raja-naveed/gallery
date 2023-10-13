import React from "react";
import UserDetails from "../components/UserDetails";
import Layout from "../components/Layout";
import { Charts } from "../components/Charts";
import { ComboChart } from "../components/ComboChart";
import { ChartEditor } from "../components/ChartEditor";

const chartData = {
  doughnutChart: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  },
  // Example for other chart data
  barChart: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "#36A2EB",
      },
    ],
  },
};
const UserProfile = ({ user }) => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
          <UserDetails user={user} />
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <Charts />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <ComboChart />
            </div>
          </div>
          <ChartEditor />
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
