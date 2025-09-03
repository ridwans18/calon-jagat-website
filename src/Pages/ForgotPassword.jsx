import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { postdata } from "../services/api";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    token: "",
  });
  const [test, settest] = useState("");
  //   const { data, refatch } = useFetch(
  //     () => postdata("user_admin/entertokenpassword"),
  //     formData,
  //     false
  //   );
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handletoken = async () => {
    console.log(2);
    if (!formData.email) return alert("email wajib diisi");
    const response = await postdata("user_admin/entertokenpassword", formData);

    if (response.status === 404) return alert("email salah");
    if (response.success) return alert("token berhasil dikirim");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await postdata(
      `user_admin/forgetpassword/${formData.token}`,
      formData
    );
    console.log(response);
    if (response.success) {
      window.location.href = "/login";
      console.log("berhasil");
      return;
    }
    if (response.response.status === 404) {
      alert(response.response.data.message);
      return;
    }
    // console.log(1);
  };
  //   console.log(test.status);
  //   useEffect(() => {}, []);

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
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <div className="mb-4">
                    <label className="block text-sm text-gray-700 mb-1">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-700 mb-1">
                      Password Baru
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="*********"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Masukkan Token
                  </label>
                  <div className="flex justify-between gap-4">
                    <input
                      type="text"
                      name="token"
                      maxLength={6}
                      value={formData.token}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    <button
                      type="button"
                      className="flex items-center justify-center px-4 rounded-md text-white bg-gray-500 hover:bg-gray-700 transition"
                      onClick={() => handletoken()}
                    >
                      Token
                    </button>
                  </div>
                </div>

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
