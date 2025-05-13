import signupImg from "../assets/images/signup.png";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

function RegisterComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen w-screen bg-[#FF6767] flex justify-center items-center">
      <div className="bg-white w-10/12 h-10/12 rounded-md">
        <div className="grid grid-cols-5 h-full">
          <div className="hidden col-span-2 w-full h-full md:flex justify-start items-end">
            <img
              src={signupImg}
              alt="signup"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="col-span-5 md:col-span-3 w-9/12 flex flex-col justify-center gap-3 p-2 mx-auto"
          >
            <h2 className="text-3xl font-bold">Sign Up</h2>
            <Input
              placeholder="Enter First Name"
              type="text"
              icon="firstName"
              size="lg"
              value={firstName}
              onChange={(value) => setFirstName(value)}
            />
            <Input
              placeholder="Enter Last Name"
              type="text"
              icon="lastName"
              size="lg"
              value={lastName}
              onChange={(value) => setLastName(value)}
            />
            <Input
              placeholder="Enter Username"
              type="text"
              icon="user"
              size="lg"
              value={userName}
              onChange={(value) => setUserName(value)}
            />
            <Input
              placeholder="Enter Email"
              type="text"
              icon="mail"
              size="lg"
              value={email}
              onChange={(value) => setEmail(value)}
            />
            <Input
              placeholder="Enter Password"
              type="password"
              icon="password"
              size="lg"
              value={password}
              onChange={(value) => setPassword(value)}
            />
            <Input
              placeholder="Confirm Password"
              type="password"
              icon="confirmPassword"
              size="lg"
              value={confirmPassword}
              onChange={(value) => setConfirmPassword(value)}
            />
            <div className="flex items-center justify-start gap-5">
              <input
                type="checkbox"
                className="w-4.5 h-4.5"
              />
              <label htmlFor="">I agree to all terms</label>
            </div>
            <Button
              size="lg"
              isDisabled={true}
              text="Register"
              onClick={() => console.log("Clicking on it")}
            />

            <div>
              Already have an account?{" "}
              <Link
                to="/"
                className="text-sky-400"
              >
                Sign In{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
