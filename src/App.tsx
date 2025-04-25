import { Routes, Route } from "react-router-dom";
// import RequireAuth from "./components/RequireAuth";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import SignIn from "./pages/Login";
import SignUp from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MyTasks from "./pages/MyTasks";

const App = () => {
  return (
    <Routes>
      {/* Public Layout */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>

      {/* Private Layout */}
      <Route
        element={<PrivateLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<MyTasks />} />
        {/* add more protected routes here */}
      </Route>
    </Routes>
  );
};
export default App

// import Sidebar from './components/Sidebar';
// import Topbar from './components/Topbar';
// import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// function App() {
//   return (
//     <div className="h-screen">
//       <Topbar />
//       <Sidebar />
//       <div className='hidden'>

//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App
