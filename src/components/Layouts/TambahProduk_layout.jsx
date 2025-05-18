import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postdata } from "../../services/api";
import Form_Produk from "../Fragments/Form_Produk";

function TambahProduklay() {
  const [images, setImages] = useState([]);
  const [notif, setNotif] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    harga: "",
    stok: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length <= 6) {
      setImages((prev) => [
        ...prev,
        ...files.map((file) => URL.createObjectURL(file)),
      ]);
    } else {
      alert("Maksimal upload 6 gambar");
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const validateForm = () => {
    const fields = ["nama", "deskripsi", "harga", "stok"];

    for (let field of fields) {
      if (!formData[field]) {
        alert(`Field '${field}' tidak boleh kosong`);
        return false;
      }
    }

    if (images.length === 0) {
      alert("Minimal upload 1 gambar");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newData = {
      ...formData,
      images,
      id: Date.now(), // Tambahkan ID unik
    };
    await postdata("ayam", newData);

    setFormData({
      nama: "",
      deskripsi: "",
      harga: "",
      stok: "",
    });
    setImages([]);
    setNotif("✅ Produk berhasil ditambahkan!");
    setTimeout(() => setNotif(""), 3000);
  };

  return (
    <Form_Produk
      handleSubmit={handleSubmit}
      // handleChange={handleChange}
      formData={formData}
      setFormData={setFormData}
      images={images}
      handleRemoveImage={handleRemoveImage}
      handleImageUpload={handleImageUpload}
      title="Tambah Produk"
    />
  );
}

export default TambahProduklay;
