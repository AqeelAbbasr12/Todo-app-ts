import signupImg from '../assets/images/signup.png';
import { Link } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';

function RegisterComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    userName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    isAgree?: string;
  }>({});
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: {
      firstName?: string;
      lastName?: string;
      userName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      isAgree?: string;
    } = {};

    if (!firstName) {
      newErrors.firstName = 'First name is required';
    } else if (firstName.length < 3) {
      newErrors.firstName = 'First name must have atleast 3 characters';
    }

    if (!lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (lastName.length < 3) {
      newErrors.lastName = 'Last name must have atleast 3 characters';
    }

    if (!userName) {
      newErrors.userName = 'User name is required';
    } else if (userName.length < 5) {
      newErrors.userName = 'Username must be atleast 5 characters';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password should be atleast 8 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'confirm password did not match with password';
    }

    if (!isAgree) {
      newErrors.isAgree = 'You must agree to all terms and conditions';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = {
        firstName,
        lastName,
        userName,
        email,
        password,
        isAgree,
      };
      console.log(formData);
      setFirstName('');
      setLastName('');
      setUserName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIsAgree(false);
      // navigate("/");
    }
  };
  return (
    <div className="h-screen w-screen bg-[#FF6767] flex justify-center items-center">
      <div className="bg-white w-10/12 h-10/12 rounded-md py-6 overflow-auto">
        <div className="grid grid-cols-5 h-full">
          <div className="hidden col-span-2 w-full h-full md:flex justify-start items-end">
            <img src={signupImg} alt="signup" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="col-span-5 md:col-span-3 w-9/12 flex flex-col justify-center gap-3 p-2 mx-auto overflow-auto"
          >
            <h2 className="text-3xl font-bold">Sign Up</h2>
            <div>
              <Input
                placeholder="Enter First Name"
                type="text"
                icon="firstName"
                size="lg"
                value={firstName}
                onChange={(value) => setFirstName(value)}
                hasError={!!errors.firstName}
              />
              {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
            </div>
            <div>
              <Input
                placeholder="Enter Last Name"
                type="text"
                icon="lastName"
                size="lg"
                value={lastName}
                onChange={(value) => setLastName(value)}
                hasError={!!errors.lastName}
              />
              {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
            </div>
            <div>
              <Input
                placeholder="Enter Username"
                type="text"
                icon="user"
                size="lg"
                value={userName}
                onChange={(value) => setUserName(value)}
                hasError={!!errors.userName}
              />
              {errors.userName && <span className="text-red-500 text-sm">{errors.userName}</span>}
            </div>
            <div>
              <Input
                placeholder="Enter Email"
                type="text"
                icon="mail"
                size="lg"
                value={email}
                onChange={(value) => setEmail(value)}
                hasError={!!errors.email}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <div>
              <Input
                placeholder="Enter Password"
                type="password"
                icon="password"
                size="lg"
                value={password}
                onChange={(value) => setPassword(value)}
                hasError={!!errors.password}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>
            <div>
              <Input
                placeholder="Confirm Password"
                type="password"
                icon="confirmPassword"
                size="lg"
                value={confirmPassword}
                onChange={(value) => setConfirmPassword(value)}
                hasError={!!errors.confirmPassword}
              />
              {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
            </div>
            <div>
              <div className="flex items-center justify-start gap-5">
                <input
                  type="checkbox"
                  className="w-4.5 h-4.5"
                  checked={isAgree}
                  onChange={(e) => setIsAgree(e.target.checked)}
                />
                <label htmlFor="">I agree to all terms</label>
              </div>
              {errors.isAgree && <span className="text-red-500 text-sm">{errors.isAgree}</span>}
            </div>
            <Button size="lg" isDisabled={false} text="Register" />
            <div>
              Already have an account?{' '}
              <Link to="/" className="text-sky-400">
                Sign In{' '}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
