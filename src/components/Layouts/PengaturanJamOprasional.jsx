function PengaturanJamOperasional() {
  return (
    <>
      {/* Pengaturan Jam Operasional */}
      <section className="border-1 border-gray-200 bg-gray-100 p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Jam Operasional</h3>
        <div className="flex gap-4">
          <input
            type="time"
            className="border border-gray-400 rounded-lg p-2 flex-1"
          />
          <span className="self-center">sampai</span>
          <input
            type="time"
            className="border border-gray-400 rounded-lg p-2 flex-1"
          />
        </div>
      </section>
    </>
  );
}

export default PengaturanJamOperasional;
