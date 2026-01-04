import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await API.post("/auth/register", { name, email, password });
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* REGISTER CARD */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/95 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Full Name"
          className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Register
        </button>

        <p className="text-sm text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;