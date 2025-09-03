import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { postdata, postlogin } from "../../services/api";
import { saveToLocalStorage } from "../../services/localstorage";

// const loginRequest = (formData) => {
//   return axios.post("/Login", formData).then((res) => res.data);
// };

const Login_Layout = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { data, error, loading, refetch } = useFetch(
    () => postlogin("user_admin/login", formData),
    false
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await refetch();
  };
  useEffect(() => {
    if (data.status === 401 || data.status === 404) {
      alert("invalid password or email");
    }
    if (data.success === true) {
      saveToLocalStorage("token", data.data.Token);
      window.location.href = "/";
    } else if (error) {
      alert(data.message);
    }
  }, [data]);

  return (
    <div className="px-6 py-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
            Alamat Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm text-gray-700 mb-1"
          >
            Kata Sandi
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
          <button
            className="text-sm text-gray-700 mt-4 hover:underline"
            type="button"
            onClick={() => (window.location.href = "/ForgotPassword")}
          >
            Lupa Password?
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-3">
            Login gagal: {error.message}
          </p>
        )}
        {/* {data && <p className="text-green-600 text-sm mb-3">Login berhasil!</p>} */}

        <div className="flex flex-col items-center">
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center px-6 py-2 rounded-md text-white ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } transition`}
          >
            {loading ? (
              "Memproses..."
            ) : (
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
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login_Layout;
