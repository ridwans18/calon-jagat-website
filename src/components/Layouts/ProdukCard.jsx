function ProdukCard() {
  const products = [
    {
      name: "Paha Atas",
      price: 80550,
      stock: 0,
      image: "https://via.placeholder.com/300x400.png?text=Produk+1"
    },
    {
      name: "Paha Bawah",
      price: 85350,
      stock: 5,
      image: "https://via.placeholder.com/300x400.png?text=Produk+2"
    },
    {
      name: "Saya",
      price: 85350,
      stock: 3,
      image: "https://via.placeholder.com/300x400.png?text=Produk+3"
    },
    {
      name: "Dada",
      price: 80550,
      stock: 10,
      image: "https://via.placeholder.com/300x400.png?text=Produk+4"
    },
    {
      name: "Paha Atas",
      price: 160000,
      stock: 7,
      image: "https://via.placeholder.com/300x400.png?text=Produk+5"
    },
    {
      name: "Dada",
      price: 65500,
      stock: 4,
      image: "https://via.placeholder.com/300x400.png?text=Produk+6"
    },
    {
      name: "Sayap",
      price: 65500,
      stock: 2,
      image: "https://via.placeholder.com/300x400.png?text=Produk+7"
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="product-container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="w-full card border rounded-lg bg-white shadow-sm hover:shadow-md transition duration-200"
              style={{ maxHeight: "390px", height: "100%" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="card-body px-3 pt-2 pb-2">
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
                <p className="text-base font-bold">
                  Rp{product.price.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            Tidak ada produk tersedia.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProdukCard;
