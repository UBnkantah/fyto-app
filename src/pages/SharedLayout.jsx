import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default SharedLayout