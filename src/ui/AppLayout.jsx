import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 flex flex-col  ">
        <Header />
        <main className="bg-[#f9fafb] flex-1 px-4! py-10!">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
