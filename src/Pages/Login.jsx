import Login_Layout from '../components/Layouts/Login_Layout'

function Login() {
  return (
    <div id="layoutAuthentication" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div id="layoutAuthentication_content" className="w-full max-w-md">
        <main>
          <div className="bg-white shadow-lg rounded-lg mt-5">
            <div className="px-6 py-4 border-b">
              <h3 className="text-center text-xl my-4 font-semibold">Masuk</h3>
            </div>
            <Login_Layout />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;