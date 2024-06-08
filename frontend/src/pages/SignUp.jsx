import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData, //spread Operator
      [e.target.id]: e.target.value, // to keep track of users
    });
  };
  // handleSubmit for form data
  const handleSubmit = async (e) => {
    try {
      e.preventDefault(); //prevents refreshing
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (data.sucess === false) {
        setError(data.message);
        setLoading(false);
        console.log(data);
        return;
      }
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  console.log(formData);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
      {/* form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* username */}
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />

        {/* email */}
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        {/* password */}
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        {/* button */}
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95  disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/signin"}>Sign In</Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignUp;
