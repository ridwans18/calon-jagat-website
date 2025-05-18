import SideBar from '../components/Layouts/SideBar';
import EditProduk_Layout from '../components/Layouts/EditProduk_Layout';

function EditProduk() {
  return (
    <div className="flex min-h-screen bg-white">
      <SideBar />
      <main className="flex-1 p-7">
        <EditProduk_Layout />
      </main>
    </div>
  );
}

export default EditProduk;
