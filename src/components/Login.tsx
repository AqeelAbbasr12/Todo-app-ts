import signinImg from "../assets/images/signin.png";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password should be atleast 8 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setEmail("");
      setPassword("");
      navigate("/");
    }
  }
  return (
    <div className="h-screen w-screen bg-[#FF6767] flex justify-center items-center">
      <div className="bg-white w-10/12 h-10/12 rounded-md">
        <div className="grid grid-cols-5 h-full">
          <form
            onSubmit={handleSubmit}
            className="col-span-5 md:col-span-3 w-9/12 flex flex-col justify-center gap-3 p-2 mx-auto"
          >
            <h2 className="text-3xl font-bold">Sign In</h2>
            <Input
              placeholder="Enter Username"
              value={email}
              type="text"
              icon="user"
              size="lg"
              onChange={(e) => setEmail(e)}
              hasError={!!errors.email}
            />

            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
            <Input
              placeholder="Enter Password"
              value={password}
              type="password"
              icon="password"
              size="lg"
              onChange={(e) => setPassword(e)}
              hasError={!!errors.password}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
            <div className="flex items-center justify-start gap-5">
              <input
                type="checkbox"
                className="w-4.5 h-4.5"
              />
              <label htmlFor="">Remember me</label>
            </div>
            <Button
              size="lg"
              isDisabled={!email || !password}
              text="Login"
            />
            <div>
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-sky-400"
              >
                Create One{" "}
              </Link>
            </div>
          </form>
          <div className="hidden md:col-span-2 w-full h-full md:flex justify-end items-end">
            <img
              src={signinImg}
              alt="login"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
