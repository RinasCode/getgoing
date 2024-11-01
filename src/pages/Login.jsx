import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setIsLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
      style={{
        backgroundImage: "url('/images/big-ben.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-1 text-left">Masuk</h2>
        <p className="text-sm font-bold text-gray-600 mb-6 text-left">
          Silahkan masukkan email & password untuk masuk
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              placeholder="alamat@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              PASSWORD
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            disabled={isLoading}
          >
            {isLoading ? "LOGGING IN..." : "LOGIN"}
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">atau</span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            className="w-full p-2 mb-4 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white"
          >
            <div className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23C15.24 23 17.95 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.14 18.63 6.71 16.7 5.84 14.13H2.17V16.98C3.98 20.53 7.7 23 12 23Z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.13C5.62 13.47 5.49 12.77 5.49 12.05C5.49 11.33 5.62 10.63 5.84 9.97V7.12H2.17C1.42 8.59 1 10.28 1 12.05C1 13.82 1.42 15.51 2.17 16.98L5.84 14.13Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.47C13.62 5.47 15.06 6.03 16.21 7.11L19.36 3.96C17.45 2.09 14.97 1 12 1C7.7 1 3.98 3.47 2.17 7.12L5.84 9.97C6.71 7.4 9.14 5.47 12 5.47Z"
                  fill="#EA4335"
                />
              </svg>
              LOGIN WITH GOOGLE
            </div>
          </button>
          <button
            type="button"
            className="w-full p-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white"
          >
            <div className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="#1877F2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073C24 5.405 18.627 0 12 0C5.37 0 0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.563H7.078V12.073H10.125V9.413C10.125 6.385 11.917 4.713 14.658 4.713C15.97 4.713 17.344 4.938 17.344 4.938V7.875H15.83C14.34 7.875 13.875 8.804 13.875 9.758V12.073H17.2L16.67 15.563H13.875V24C19.612 23.094 24 18.1 24 12.073Z" />
              </svg>
              LOGIN WITH FACEBOOK
            </div>
          </button>
        </div>
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Belum punya akun? Silahkan </span>
          <Link
            to="/register"
            className="font-semibold text-red-500 hover:text-red-700"
          >
            registrasi
          </Link>
        </div>
      </div>
    </div>
  );
}
