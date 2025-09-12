import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  postdata,
  postdatamultipart,
  postlogout,
  refreshtoken,
} from "../../services/api";
import Form_Produk from "../Fragments/Form_Produk";
import useFetch from "../../hooks/useFetch";
import { PiFireTruckLight } from "react-icons/pi";
import axios from "axios";
import { saveToLocalStorage } from "../../services/localstorage";
import handlerefreshtoken from "../../hooks/handlerefreshtoken";

function TambahProduklay() {
  const [images, setImages] = useState([]);
  const [imageuploud, setImageuploud] = useState([]);
  const [imgform, setimgform] = useState({});
  const [notif, setNotif] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    harga: "",
    stock: "",
    img: "",
  });
  const { data, loading, error, refetch } = useFetch(
    () => postdata("produk", formData),
    false
  );
  const { refetch: refetch2 } = useFetch(
    () => postdata("uploud", imgform),
    false
  );
  // const {
  //   data: dataayam,
  //   loading: loadingayam,
  //   error: errorayam,
  // } = useFetch(() => postdata("uploud"));
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length <= 1) {
      setImages((prev) => [
        ...prev,
        ...files.map((file) => URL.createObjectURL(file)),
      ]);
      setImageuploud(e.target.files[0]);
      setFormData({ ...formData, img: e.target.files[0].name });
    } else {
      alert("Maksimal upload 1 gambar");
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    setImageuploud([]);
  };

  const validateForm = () => {
    const fields = ["nama", "deskripsi", "harga", "stock"];

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

    const newformData = new FormData();

    newformData.append("photo", imageuploud);
    newformData.append("nama", formData.nama);
    newformData.append("deskripsi", formData.deskripsi);
    newformData.append("harga", formData.harga);
    newformData.append("stock", formData.stock);

    try {
      const response = await postdatamultipart("produk", newformData);
      // await refetch();

      if (!response.succes) {
        const uploud = await handlerefreshtoken(response, () =>
          postdatamultipart("produk", newformData)
        );
        if (uploud.success) {
          setFormData({
            nama: "",
            deskripsi: "",
            harga: "",
            stock: "",
          });
          setImages([]);
          setNotif("✅ Produk berhasil ditambahkan!");
          setTimeout(() => setNotif(""), 3000);
        }
        return;
      }
      setFormData({
        nama: "",
        deskripsi: "",
        harga: "",
        stock: "",
      });
      setImages([]);
      setNotif("✅ Produk berhasil ditambahkan!");
      setTimeout(() => setNotif(""), 3000);
    } catch (error) {
      console.error(error);
    }
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
