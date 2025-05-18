import React from "react";

function Form_Produk({
  handleSubmit,
  //   handleChange,
  formData,
  setFormData,
  images,
  handleRemoveImage,
  handleImageUpload,
  title,
}) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative p-6 bg-white rounded shadow-md max-w-3xl mx-auto mt-6"
    >
      {/* Tombol X di pojok kanan atas */}
      <button
        type="button"
        onClick={() => navigate("/Produk")}
        className="absolute top-3 right-3 bg-red-700 hover:bg-red-500 text-white font-bold rounded-md w-8 h-8 flex items-center justify-center shadow-md transition-colors"
        title="Kembali ke daftar produk"
      >
        ✕
      </button>

      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      {/* Nama Produk */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Nama Produk</label>
        <input
          type="text"
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
          className="w-full border px-3 py-2 rounded"
        ></textarea>
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

      {/* Upload Gambar */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Upload Gambar (maks. 6)
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="hidden"
          id="uploadGambar"
        />
        <label
          htmlFor="uploadGambar"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
        >
          Pilih Gambar
        </label>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-24 border rounded overflow-hidden"
            >
              <img
                src={img}
                alt={`preview-${index}`}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 py-0 text-xs hover:bg-red-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tombol Submit */}
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Simpan Produk
      </button>

      {/* Notifikasi */}
      {/* {notif && (
        <div className="mt-4 px-4 py-2 bg-green-100 text-green-800 rounded-md text-sm">
          {notif}
        </div>
      )} */}
    </form>
  );
}

export default Form_Produk;
