import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  // form data handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

// submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // if not success in response then error set - response but some error
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null)
      navigate('/sign-in')

      // no response error catch
    } catch (err) {
      setLoading(false);
      setError(err.message)
    }
  };


  return (
    <div className="mx-auto p-4 max-w-lg">
      <h1 className="text-3xl text-center font-semibold my-8">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          id="username"
          type="text"
          className="border p-2 rounded-md"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          id="email"
          type="email"
          className="border p-2 rounded-md"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          className="border p-2 rounded-md"
          placeholder="password"
          onChange={handleChange}
        />
        <button
          disabled={isLoading}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 transition-colors"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center mt-2">
        <p>
          Not an Account ?{" "}
          <Link className="text-red-400 hover:underline" to="/sign-in">
            Sign In
          </Link>
        </p>
      </div>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default Signup;
