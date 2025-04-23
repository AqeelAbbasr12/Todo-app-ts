import signinImg from '../assets/images/signin.png';
import Input from './Input';
import Button from './Button';

function LoginComponent() {
  return <div className="h-screen w-screen bg-rose-400 flex justify-center items-center">
    <div className="bg-white w-10/12 h-10/12 rounded-md">
      <div className="grid grid-cols-2 h-full">
        <div className='w-9/12 flex flex-col justify-center gap-3 p-2 mx-auto'>
          <h2 className='text-3xl font-bold'>Sign In</h2>
          <Input placeholder="Enter Username" icon='user' size="lg" onChange={(value) => console.log(value)} />
          <Input placeholder="Enter Password" icon='password' size="lg" onChange={(value) => console.log(value)} />

          <Button size="lg" isDisabled={true} text="Login" onClick={() => console.log("Clicking on it")} />
        </div>
        <div className='w-full h-full flex justify-end items-end'>
          <img src={signinImg} alt="login" />
        </div>
      </div>
    </div>
  </div>
}

export default LoginComponent;