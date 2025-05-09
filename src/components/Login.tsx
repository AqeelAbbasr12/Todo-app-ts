import signinImg from '../assets/images/signin.png';
import { Link } from "react-router-dom";
import Input from './Input';
import Button from './Button';
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const navigate = useNavigate();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("handle submit is calling...");
    navigate("/dashboard");
  }
  return <div className="h-screen w-screen bg-[#FF6767] flex justify-center items-center">
    <div className="bg-white w-10/12 h-10/12 rounded-md">
      <div className="grid grid-cols-5 h-full">
        <form onSubmit={handleSubmit} className='col-span-5 md:col-span-3 w-9/12 flex flex-col justify-center gap-3 p-2 mx-auto'>
          <h2 className='text-3xl font-bold'>Sign In</h2>
          <Input placeholder="Enter Username" icon='user' size="lg" onChange={(value) => console.log(value)} />
          <Input placeholder="Enter Password" icon='password' size="lg" onChange={(value) => console.log(value)} />
          <div className='flex items-center justify-start gap-5'>
            <input type="checkbox" className='w-4.5 h-4.5' />
            <label htmlFor="">Remember me</label>
          </div>
          <Button size="lg" isDisabled={false} text="Login" />
          <div>
            Don’t have an account? <Link to="/register" className="text-sky-400">Create One </Link>
          </div>
        </form>
        <div className='hidden md:col-span-2 w-full h-full md:flex justify-end items-end'>
          <img src={signinImg} alt="login" />
        </div>
      </div>
    </div>
  </div>
}

export default LoginComponent;