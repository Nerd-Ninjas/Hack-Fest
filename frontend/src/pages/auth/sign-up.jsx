import { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";

export function SignUp() {
  //form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
// api Post
    try {
      const response = await axios.post("http://192.168.43.180:2000/auth/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      alert(response.data.message || "User registered successfully!");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "Registration failed. Please try again.");
      } else {
        setMessage("Network error. Please check your connection.");
      }
    }

    setLoading(false);
  };

  return (
    <section className="m-8 flex justify-center align-center">
       <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Join Us Today</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Enter your details to register.
          </Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">Name *</Typography>
            <Input size="lg" placeholder="Name" name="name" required onChange={handleChange} />
          </div>
          <div className="mb-4">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">Age *</Typography>
            <Input size="lg" type="number" placeholder="Age" name="age" required onChange={handleChange} />
          </div>
          <div className="mb-4">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">Email Address *</Typography>
            <Input size="lg" type="email" placeholder="E-mail" name="email" required onChange={handleChange} />
          </div>
          <div className="mb-4">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">Password *</Typography>
            <Input size="lg" type="password" placeholder="*********" name="password" required onChange={handleChange} />
          </div>
          <Button className="mt-6" fullWidth type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
          {message && <p className="text-center mt-3 text-red-500">{message}</p>}
          <div className="mt-2 text-center">
            <span>Already have an account?</span> <Link to="/auth/sign-in" className="text-gray-900 ml-1">Log In</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;