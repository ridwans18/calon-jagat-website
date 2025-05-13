import React from "react";
import useFetch from "../../hooks/useFetch";
import fetchProducts from "../../hooks/produkFetch";

const ProdukCard = () => {
  const { data: products, loading, error } = useFetch(fetchProducts);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-600">Tidak ada produk tersedia.</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full border rounded-lg bg-white shadow-sm hover:shadow-md transition duration-200"
            style={{ maxHeight: "390px", height: "100%" }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="px-3 pt-2 pb-2">
              <span
                className={`inline-block text-xs font-semibold mb-1 px-2 py-1 rounded ${
                  product.stock > 0
                    ? "bg-gray-200 text-gray-800"
                    : "bg-red-500 text-white"
                }`}
              >
                {product.stock > 0 ? "Tersedia" : "Tidak Tersedia"}
              </span>
              <p className="text-sm font-medium leading-tight line-clamp-2 mb-1">
                {product.name}
              </p>
              <p className="text-base font-bold">Rp{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdukCard;