import BtnPlusMin from "../Fragments/BtnPlusMin";
import useFetch from "../../hooks/useFetch";
import fetchProducts from "../../hooks/produkFetch";
import Card_Produk_User from "../Fragments/Card_Produk_User";
import Loading from "../Fragments/Loading";
import { data } from "react-router-dom";
import { fetchData } from "../../services/api";

const ProdukCard = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch(() => fetchData("produk"));
  console.log("produk", products);
  console.log(loading);
  // console.log("data", data);

  // if (loading) return <Loading />;
  // if (error)
  //   return <p className="text-center text-red-500">Error: {error.message}</p>;
  // if (!products || products.length === 0) {
  //   return (
  //     <p className="text-center text-gray-600">Tidak ada produk tersedia.</p>
  //   );
  // }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center relative ">
        {loading && (
          <div className="absolute left-1/2 translate-y-12">
            <Loading size="large" />
          </div>
        )}

        {products.data &&
          products.data.map((product) => (
            <Card_Produk_User
              key={product.id_produk}
              img={product.img}
              id={product.id_produk}
              name={product.nama_produk}
              price={product.harga}
              stock={product.stock}
              product={product}
            />
          ))}
      </div>
    </div>
  );
};

export default ProdukCard;
