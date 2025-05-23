import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 150 },
  { name: 'Feb', sales: 370 },
  { name: 'Mar', sales: 180 },
  { name: 'Apr', sales: 290 },
  { name: 'May', sales: 170 },
  { name: 'Jun', sales: 180 },
  { name: 'Jul', sales: 270 },
  { name: 'Aug', sales: 90 },
  { name: 'Sep', sales: 200 },
  { name: 'Oct', sales: 360 },
  { name: 'Nov', sales: 260 },
  { name: 'Dec', sales: 100 },
];

export default function MonthlySale() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Penjualan Bulanan</h2>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
