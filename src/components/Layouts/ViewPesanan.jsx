const ViewPesanan = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2">Order</h2>

      <div className="mb-4">
        <h3 className="text-md font-semibold mb-2">Ordered Items (1)</h3>
        <div className="border rounded-md p-2 flex justify-between items-center">
          <div>
            <span>Mie Gacoan LV 6</span>
            <p>No notes yet</p>
            <p>Rp11.364</p>
          </div>
          <div className="flex items-center">
            <button className="bg-gray-200 rounded-full px-2">-</button>
            <span className="mx-2">1</span>
            <button className="bg-gray-200 rounded-full px-2">+</button>
            <button className="ml-2 text-pink-500">Edit</button>
          </div>
        </div>
        <button className="text-pink-500 mt-2">+ Add Item</button>
      </div>

      <div className="mb-4 border-t pt-4">
        <h3 className="font-semibold mb-2">Payment Details</h3>
        <div className="flex justify-between">
          <span>Subtotal (1 menu)</span>
          <span>Rp11.364</span>
        </div>
        <div className="flex justify-between">
          <span>Rounding</span>
          <span>-Rp0,4</span>
        </div>
        <div className="flex justify-between">
          <span>Other fees</span>
          <span>Rp1.136,4</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>Rp12.500</span>
        </div>
      </div>

      <div className="text-center mt-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="text-sm">
            Total Payment
            <div className="font-semibold text-xl text-left">
                12.500
            </div>
        </div>
        <button className="bg-pink-500 bg-hover text-white px-4 py-2 rounded-md mt-2">Continue to Payment</button>
      </div>
    </div>
  );
};

export default ViewPesanan;
