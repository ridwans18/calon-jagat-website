import { useState } from 'react';

function TambahProduk() {
  const [images, setImages] = useState([]);
  const [notif, setNotif] = useState("");
  const [formData, setFormData] = useState({
    nama: '',
    deskripsi: '',
    harga: '',
    stok: '',
    kategori: '',
    kondisi: 'baru',
    panjang: '',
    lebar: '',
    tinggi: '',
    berat: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length <= 6) {
      setImages(prev => [...prev, ...files]);
    } else {
      alert('Maksimal upload 6 gambar');
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const validateForm = () => {
    const fields = [
      'nama', 'deskripsi', 'harga', 'stok', 'kategori',
      'panjang', 'lebar', 'tinggi', 'berat'
    ];

    for (let field of fields) {
      if (!formData[field]) {
        alert(`Field '${field}' tidak boleh kosong`);
        return false;
      }
    }

    if (images.length === 0) {
      alert('Minimal upload 1 gambar');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log('Data produk:', formData);
    console.log('Gambar produk:', images);

    // Reset form
    setFormData({
      nama: '',
      deskripsi: '',
      harga: '',
      stok: '',
      kategori: '',
      kondisi: 'baru',
      panjang: '',
      lebar: '',
      tinggi: '',
      berat: '',
    });
    setImages([]);
    setNotif("✅ Produk berhasil ditambahkan!");
    setTimeout(() => setNotif(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Tambah Produk</h2>

      {/* Nama Produk */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Nama Produk</label>
        <input type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
      </div>

      {/* Deskripsi */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Deskripsi</label>
        <textarea name="deskripsi" value={formData.deskripsi} onChange={handleChange} className="w-full border px-3 py-2 rounded"></textarea>
      </div>

      {/* Harga dan Stok */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 font-medium">Harga (Rp)</label>
          <input type="number" name="harga" value={formData.harga} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Stok</label>
          <input type="number" name="stok" value={formData.stok} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
      </div>

      {/* Kategori */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Kategori</label>
        <input type="text" name="kategori" value={formData.kategori} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
      </div>

      {/* Kondisi Produk */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Kondisi Produk</label>
        <select name="kondisi" value={formData.kondisi} onChange={handleChange} className="w-full border px-3 py-2 rounded">
          <option value="baru">Baru</option>
          <option value="bekas">Bekas</option>
        </select>
      </div>

      {/* Ukuran Produk */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Ukuran Produk (cm)</label>
        <div className="grid grid-cols-3 gap-4">
          <input type="number" name="panjang" placeholder="Panjang" value={formData.panjang} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <input type="number" name="lebar" placeholder="Lebar" value={formData.lebar} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <input type="number" name="tinggi" placeholder="Tinggi" value={formData.tinggi} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
      </div>

      {/* Berat Produk */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Berat Produk (gram)</label>
        <input type="number" name="berat" value={formData.berat} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
      </div>

      {/* Upload Gambar */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Upload Gambar (maks. 6)</label>
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" id="uploadGambar" />
        <label htmlFor="uploadGambar" className="inline-block px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700">
          Pilih Gambar
        </label>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-24 border rounded overflow-hidden">
              <img src={URL.createObjectURL(img)} alt={`preview-${index}`} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 py-0 text-xs hover:bg-red-700"
              >
                ✕
              </button>
            </div>
          ))}
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

export default TambahProduk;
