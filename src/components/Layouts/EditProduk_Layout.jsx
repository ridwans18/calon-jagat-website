import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { fetchData } from "../../services/api";
import { use } from "react";
import Form_Produk from "../Fragments/Form_Produk";

function EditProduk_Layout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [imageuploud, setImageuploud] = useState([]);
  const [changeimg, setchangeimg] = useState(false);
  const [imgform, setimgform] = useState({});
  const [notif, setNotif] = useState("");

  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    harga: "",
    stock: "",
    img: "",
  });
  const {
    data: products,
    loading,
    error,
  } = useFetch(() => fetchData(`produk/${id}`));

  useEffect(() => {
    if (products.length === 0) return;

    setFormData({
      nama: products.data[0].nama_produk,
      harga: products.data[0].harga,
      stock: products.data[0].stock,
      deskripsi: products.data[0].deskripsi,
    });
    setImages([products.data[0].img]);
  }, [loading]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length <= 1) {
      setImages((prev) => [
        ...prev,
        ...files.map((file) => URL.createObjectURL(file)),
      ]);
      setImageuploud(e.target.files[0]);
      setFormData({ ...formData, img: e.target.files[0].name });
      setchangeimg(!changeimg);
    } else {
      alert("Maksimal upload 1 gambar");
    }
  };
  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    setImageuploud([]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newformData = new FormData();
    const filename = products.data[0].img.replace(
      "https://homeschoolingbebita.space/assets/",
      ""
    );

    if (changeimg) {
      newformData.append("photo", imageuploud);
      newformData.append("nama", formData.nama);
      newformData.append("deskripsi", formData.deskripsi);
      newformData.append("harga", formData.harga);
      newformData.append("stock", formData.stock);
      newformData.append("oldimg", filename);
    } else {
      newformData.append("nama", formData.nama);
      newformData.append("deskripsi", formData.deskripsi);
      newformData.append("harga", formData.harga);
      newformData.append("stock", formData.stock);
      newformData.append("oldimg", filename);
    }
    console.log([...newformData.entries()]);
    try {
      const response = await axios.patch(
        `https://homeschoolingbebita.space/produk/${id}`,
        newformData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    setNotif("✅ Produk berhasil diedit!");
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
      title="Edit Produk"
    />
  );
}

export default EditProduk_Layout;
