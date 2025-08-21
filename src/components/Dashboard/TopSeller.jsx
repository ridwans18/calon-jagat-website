import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import useFetch from "../../hooks/useFetch";
import { fetchData } from "../../services/api";

// const data = [
//   { name: "Paha Atas", jumlah: 320 },
//   { name: "Paha Bawah", jumlah: 280 },
//   { name: "Dada", jumlah: 400 },
//   { name: "Sayap", jumlah: 250 },
// ];

const colors = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444"]; // warna untuk tiap bar

export default function TopSeller() {
  const { data, loading, error } = useFetch(() => fetchData("report/month"));
  const { report_product } = data;

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full h-80">
      <h2 className="text-lg font-semibold mb-4">Pembelian Terbanyak</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={report_product}
          margin={{ top: 0, right: 10, left: 0, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickLine={false} axisLine={false} />
          <YAxis
            type="category"
            dataKey="nama_produk"
            tickLine={false}
            axisLine={false}
            width={100}
          />
          <Tooltip />
          <Bar dataKey="total_terjual" barSize={24} radius={[0, 8, 8, 0]}>
            {report_product &&
              report_product.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
