function ForgotPassword() {
  return (
    <div
      id="layoutAuthentication"
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div id="layoutAuthentication_content" className="w-full max-w-md">
        <main>
          <div className="bg-white shadow-lg rounded-lg mt-5">
            <div className="px-6 py-4 border-b">
              <h3 className="text-center text-xl my-4 font-semibold">
                Lupa Password
              </h3>
            </div>
            <div className="px-6 py-6">
              <form>
                <div className="mb-4">
                  <div className="mb-4">
                    <label className="block text-sm text-gray-700 mb-1">
                      Alamat Email
                    </label>
                    <input
                      placeholder="name@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-700 mb-1">
                      Password Baru
                    </label>
                    <input
                      placeholder="*********"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                      required
                    />
                  </div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Masukkan Token
                  </label>
                  <div className="flex justify-between gap-4">
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                      required
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center px-4 rounded-md text-white bg-gray-500 hover:bg-gray-700 transition"
                      onClick={() => alert("Token Telah Dikirim")}
                    >
                      Token
                    </button>
                  </div>
                </div>

                <p className="text-red-500 text-sm mb-3">Gagal</p>
                <p className="text-green-600 text-sm mb-3">Berhasil</p>

                <div className="flex flex-col items-center">
                  <button
                    type="submit"
                    className="flex items-center justify-center px-6 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
                  >
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-chevron-double-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                        />
                        <path
                          fillRule="evenodd"
                          d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ForgotPassword;
