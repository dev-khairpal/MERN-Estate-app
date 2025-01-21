import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mx-auto p-4 max-w-lg">
      <h1 className="text-3xl text-center font-semibold my-8">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="border p-2 rounded-md"
          placeholder="username"
        />
        <input
          type="email"
          className="border p-2 rounded-md"
          placeholder="email"
        />
        <input
          type="password"
          className="border p-2 rounded-md"
          placeholder="password"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 transition-colors">Sign Up</button>
      </form>
      <div className="text-center mt-2">
        <p>Not an Account ? <Link className="text-red-400 hover:underline" to='/sign-in'>Sign In</Link></p>
      </div>
    </div>
  );
};

export default Signup;
