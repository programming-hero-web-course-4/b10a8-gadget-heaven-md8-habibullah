import React from "react";
import Navbar from "./Navbar";
import NavBody from "./NavBody";
import NavPic from "./NavPic";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="">
      <div>
        <div className="bg-[#9538E2] w-11/12 mx-auto mt-2 rounded-xl">
          <Navbar></Navbar>
          <NavBody></NavBody>
        </div>
        <NavPic></NavPic>
      </div>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
