const fetchProducts = async () => {
  const response = await fetch("https://68230848b342dce800505bc0.mockapi.io/dataayam/ayam"); // ganti sesuai endpoint
  if (!response.ok) {
    throw new Error("Gagal fetch data produk");
  }
  return await response.json();
};

export default fetchProducts;