import React from "react";
import SideBar from "../components/SideBar";
import ProjectList from "../components/ProjectList";
import refershIcon from "../assets/refreshicon.png";
import searchIcon from "../assets/search.png";
import { repositories } from "../../data";

function Dashboard() {
  return (
    <div className="block lg:flex">
      <div className="min-w-[18%]">
        <SideBar />
      </div>
      <div className=" min-w-[82%] bg-[#FAFAFA]">
        <div className='rounded-xl border-[1px] border-[#E9EAEB] shadow-md  w-[95%] mx-auto my-2 py-5 '>
          <div className="flex justify-between mx-6">
            <div className=''>
              <h1 className='font-bold text-lg font-Inter text-[#181D27]'>Repositories</h1>
              <p className='font-normal text-sm font-Inter text-[#181D27]'>33 total repositories</p>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm  border rounded-md border-gray-300 flex items-center gap-1">
                <img src={refershIcon} />
                <p className='font-normal text-sm font-Inter '>Refresh All</p>
              </button>
              <button className="px-4 py-2 text-sm text-white bg-[#1570EF] rounded-md">
                + Add Repository
              </button>
            </div>
          </div>
          <div className='flex gap-5 py-2 pl-2 lg:max-w-[30%] my-4 rounded-lg border-[1px] border-[#D5D7DA] shadow-lg mx-6'>
            <img src={searchIcon} width={"24px"} height={"24px"} />
            <p className='font-normal text-base font-Inter text-[#414651] '>Search Repositories</p>
          </div>

          <div>
            {repositories.map((repo, index) => (
              <ProjectList key={index} repo={repo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
