import signupImg from '../assets/images/signup.png';
import { Link } from "react-router-dom";
import Input from './Input';
import Button from './Button';

function RegisterComponent() {
  return <div className="h-screen w-screen bg-rose-400 flex justify-center items-center">
    <div className="bg-white w-10/12 h-10/12 rounded-md">
      <div className="grid grid-cols-5 h-full">
        <div className='hidden col-span-2 w-full h-full md:flex justify-start items-end'>
          <img src={signupImg} alt="signup" />
        </div>
        <div className='col-span-5 md:col-span-3 w-9/12 flex flex-col justify-center gap-3 p-2 mx-auto'>
          <h2 className='text-3xl font-bold'>Sign Up</h2>
          <Input placeholder="Enter First Name" icon='firstName' size="lg" onChange={(value) => console.log(value)} />
          <Input placeholder="Enter Last Name" icon='lastName' size="lg" onChange={(value) => console.log(value)} />
          <Input placeholder="Enter Username" icon='user' size="lg" onChange={(value) => console.log(value)} />
          <Input placeholder="Enter Email" icon='mail' size="lg" onChange={(value) => console.log(value)} />
          <Input placeholder="Enter Password" icon='password' size="lg" onChange={(value) => console.log(value)} />
          <Input placeholder="Confirm Password" icon='confirmPassword' size="lg" onChange={(value) => console.log(value)} />
          <div className='flex items-center justify-start gap-5'>
            <input type="checkbox" className='w-4.5 h-4.5' />
            <label htmlFor="">I agree to all terms</label>
          </div>
          <Button size="lg" isDisabled={true} text="Register" onClick={() => console.log("Clicking on it")} />

          <div>
            Already have an account? <Link to="/" className="text-sky-400">Sign In </Link>
          </div>
        </div>

      </div>
    </div>
  </div>
}

export default RegisterComponent;