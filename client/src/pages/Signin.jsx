import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart,signInFailure,signInSuccess } from "../../redux/user/userSlice";
import OAuth from "../components/OAuth";
const Signin = () => {
  const [formData, setFormData] = useState({});

  /*state.user:
The state parameter represents the entire Redux store.
state.user refers to the slice of the Redux store managed by the userReducer (or userSlice in your case).*/

  const {loading,error} = useSelector((state)=>state.user)

  const navigate = useNavigate();
const dispatch = useDispatch()
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
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // if not success in response then error set - response but some error
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data))
      navigate('/')

      // no response error catch
    } catch (err) {
      dispatch(signInFailure(err.message))
    }
  };


  return (
    <div className="mx-auto p-4 max-w-lg">
      <h1 className="text-3xl text-center font-semibold my-8">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
        required
          id="email"
          type="email"
          className="border p-2 rounded-md"
          placeholder="email"
          onChange={handleChange}
        />
        <input
        required
          id="password"
          type="password"
          className="border p-2 rounded-md"
          placeholder="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 transition-colors"
        >
          Sign In
        </button>
        <OAuth />
      </form>
      <div className="text-center mt-2">
        <p>
          Dont have an Account ?{" "}
          <Link className="text-red-400 hover:underline" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </div>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default Signin;
