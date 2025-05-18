import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EditProduk_Layout() {
  const navigate = useNavigate();
  const [produk, setProduk] = useState([]);
  const [notif, setNotif] = useState("");
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    stok: "",
    deskripsi: "",
    images: []
  });

  useEffect(() => {
    const index = localStorage.getItem("editIndex");
    const data = JSON.parse(localStorage.getItem("produk")) || [];
    if (index === null || !data[index]) {
      alert("Data tidak ditemukan");
      navigate("/");
      return;
    }
    setProduk(data);
    setFormData(data[index]);
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = localStorage.getItem("editIndex");
    const updatedProduk = [...produk];
    updatedProduk[index] = formData;
    localStorage.setItem("produk", JSON.stringify(updatedProduk));
    navigate("/Produk");
    setNotif("✅ Produk berhasil ditambahkan!");
    setTimeout(() => setNotif(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="relative p-6 bg-white rounded shadow-md max-w-3xl mx-auto mt-6">
      
      {/* Tombol X di pojok kanan atas */}
      <button
        type="button"
        onClick={() => navigate("/Produk")}
        className="absolute top-3 right-3 bg-red-700 hover:bg-red-500 text-white font-bold rounded-md w-8 h-8 flex items-center justify-center shadow-md transition-colors"
        title="Kembali ke daftar produk"
      >
        ✕
      </button>

      <h2 className="text-xl font-semibold mb-4">Edit Produk</h2>

      {/* Nama Produk */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Nama Produk</label>
        <input 
          name="nama" 
          value={formData.nama} 
          onChange={handleChange} 
          className="w-full border px-3 py-2 rounded" 
        />
      </div>

      {/* Deskripsi */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Deskripsi</label>
        <textarea 
          name="deskripsi" 
          value={formData.deskripsi} 
          onChange={handleChange} 
          className="w-full border px-3 py-2 rounded"></textarea>
      </div>

      {/* Harga dan Stok */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 font-medium">Harga (Rp)</label>
          <input 
            type="number" 
            name="harga" 
            value={formData.harga} 
            onChange={handleChange} 
            className="w-full border px-3 py-2 rounded" 
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Stok</label>
          <input 
            type="number" 
            name="stok" 
            value={formData.stok} 
            onChange={handleChange} 
            className="w-full border px-3 py-2 rounded" 
          />
        </div>
      </div>

      {/* Upload Gambar Baru */}
      <div>
        <div className="flex flex-row items-center justify-left gap-1">
          <label htmlFor="uploadGambar" className="border px-3 py-2 rounded inline-block bg-blue-600 text-white cursor-pointer hover:bg-blue-700">
            Unggah Gambar 
          </label><p>(maks. 6)</p>
        </div>
        <div className="mb-2"></div>
          <input
            id="uploadGambar"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files);
              const readers = files.map(file => {
                return new Promise((resolve, reject) => {
                  const reader = new FileReader();
                  reader.onload = () => resolve(reader.result);
                  reader.onerror = reject;
                  reader.readAsDataURL(file);
                });
              });

              Promise.all(readers).then((newImages) => {
                setFormData(prev => ({
                  ...prev,
                  images: [...prev.images, ...newImages],
                }));
              });
            }}
          className="hidden" 
        />
      </div>

      {/* Gambar yang Sudah Ada */}
      <div>
        <div className="flex gap-2 flex-wrap">
          {formData.images?.length > 0 ? (
            formData.images.map((img, idx) => (
              <div key={idx} className="relative group">
                <img src={img} alt={`img-${idx}`} className="w-20 h-20 object-cover rounded border mt-2" />
                <button
                  type="button"
                  onClick={() => {
                    const updatedImages = formData.images.filter((_, i) => i !== idx);
                    setFormData(prev => ({ ...prev, images: updatedImages }));
                  }}
                  className="absolute top-0 right-0 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center opacity-80 hover:opacity-100"
                  title="Hapus gambar"
                >
                  ✕
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">Belum ada gambar.</p>
          )}
        </div>
      </div>

      {/* Tombol Submit */}
      <button type="submit" className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Simpan Produk
      </button>

      {/* Notifikasi */}
      {notif && (
        <div className="mt-4 px-4 py-2 bg-green-100 text-green-800 rounded-md text-sm">
          {notif}
        </div>
      )}
    </form>
  );
}

export default EditProduk_Layout;
