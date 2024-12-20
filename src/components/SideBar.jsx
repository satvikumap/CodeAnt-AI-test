import React, { useState } from 'react';
import respoIcon from '../assets/codeicon.png';
import homeIcon from '../assets/homeicon.png';
import cloudIcon from '../assets/cloudicon.png';
import bookIcon from '../assets/bookicon.png';
import settingIcon from '../assets/seittingicon.png';
import phoneIcon from '../assets/phoneicon.png';
import exitIcon from '../assets/exiticon.png';
import downArrow from '../assets/chevron-down.png';
import Logo from '../assets/textLogo.png';
import hamburgerIcon from '../assets/hamburgericon.png';
import closeIcon from '../assets/closeicon.png';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col lg:h-screen mx-5 overflow-y-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center gap-3 my-4">
        <div className="flex items-center gap-3">
          <img src={Logo} width="28px" height="32px" loading="lazy" alt="logo" />
          <p className="font-normal text-2xl font-Satoshi text-[#181D27]">
            CodeAnt AI
          </p>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleSidebar} className="block lg:hidden">
          <img
            src={isOpen ? closeIcon : hamburgerIcon}
            alt="menu icon"
            width="24px"
            height="24px"
          />
        </button>
      </div>

      {/* Sidebar Content */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex flex-col h-full justify-between`} // Ensure sidebar content is spaced
      >
        <div>
          <div className="flex rounded-lg border-[1px] px-4 py-1 my-4 items-center justify-between">
            <p className="font-Inter font-normal text-base text-[#181D27]">
              satvik umap
            </p>
            <img src={downArrow} width="13px" height="7px" alt="arrow" />
          </div>
          <div className="flex flex-col">
            {/* Product List */}
            <div className="flex items-center gap-4 px-4 py-2 my-1 rounded-lg bg-blue-500 text-white cursor-pointer">
              <img
                src={homeIcon}
                width="24px"
                height="24px"
                loading="lazy"
                alt="Repositories"
              />
              <p className="font-bold text-md">Repositories</p>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 my-1 cursor-pointer">
              <img
                src={respoIcon}
                width="24px"
                height="24px"
                loading="lazy"
                alt="AI Code Review"
              />
              <p className="font-bold text-md text-[#414651]">AI Code Review</p>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 my-1 cursor-pointer">
              <img
                src={cloudIcon}
                width="24px"
                height="24px"
                loading="lazy"
                alt="Cloud Security"
              />
              <p className="font-bold text-md text-[#414651]">Cloud Security</p>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 my-1 cursor-pointer">
              <img
                src={bookIcon}
                width="24px"
                height="24px"
                loading="lazy"
                alt="How to Use"
              />
              <p className="font-bold text-md text-[#414651]">How to Use</p>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 my-1 cursor-pointer">
              <img
                src={settingIcon}
                width="24px"
                height="24px"
                loading="lazy"
                alt="Settings"
              />
              <p className="font-bold text-md text-[#414651]">Settings</p>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          {/* Support and Logout */}
          <div className="flex items-center gap-4 px-4 py-2 my-1 cursor-pointer">
            <img
              src={phoneIcon}
              width="24px"
              height="24px"
              loading="lazy"
              alt="Support"
            />
            <p className="font-bold text-md text-[#414651]">Support</p>
          </div>
          <div className="flex items-center gap-4 px-4 py-2 my-1 cursor-pointer">
            <img
              src={exitIcon}
              width="24px"
              height="24px"
              loading="lazy"
              alt="Logout"
            />
            <p className="font-bold text-md text-[#414651]">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
