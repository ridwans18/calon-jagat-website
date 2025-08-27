import SideBar from "../components/Layouts/SideBar";
import StatsCard from "../components/Dashboard/StatsCard";
import MonthlySale from "../components/Dashboard/MonthlySale";
import TopSeller from "../components/Dashboard/TopSeller";

function Beranda() {
  return (
    <div className="flex min-h-screen bg-white">
      <SideBar />
      <main className="flex-1 p-6">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <StatsCard />
            <MonthlySale />
          </div>
          <TopSeller />
        </div>
      </main>
    </div>
  );
}

export default Beranda;
