import { Outlet } from "react-router-dom";

export const HomeLayout = () => {

  return (
    <>
      <nav>
        <span className="font-black">Comfy</span>
      </nav>
      <Outlet />
    </>
  );
};
