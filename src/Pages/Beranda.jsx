import SideBar from '../components/Layouts/SideBar';

function Beranda() {
  return (
    <div className="flex min-h-screen bg-white">
      <SideBar />
      <main className="flex-1 p-6">
        <h2 className="text-xl font-semibold mb-4">Beranda</h2>
        {/* Add your content here */}
      </main>
    </div>
  );
}

export default Beranda;