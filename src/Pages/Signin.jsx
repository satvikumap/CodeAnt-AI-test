import React, { useState } from "react";
import textLogo from "../assets/textLogo.png";
import pieChart from "../assets/pieChart.png";
import upArrowIcon from "../assets/uparrow.svg";
import bgImage from "../assets/Subtract.png";
import githubIcon from "../assets/githubicon.png";
import gitlabicon from "../assets/gitlapicon.png";
import bitbucketicon from "../assets/bitbucket.png";
import azuricon from "../assets/azuricon.png";
import keyicon from "../assets/keyicon.png";
import CustomBotttom from "../components/CustomBotttom";

function SignIn() {
 const [activeTab, setActiveTab] = useState('SAAS');
  return (
    <div className="flex h-screen ">
      {/* left side */}
      <div className="hidden  lg:flex flex-col  justify-center items-center min-w-[50%] h-full relative">
        <div className="shadow-[0px_0px_24px_0px_#08173529] shadow-[#08173529] rounded-[24px] border-slate-700  z-10">
          <div className="flex justify-start px-6 py-4">
            <img
              src={textLogo}
              loading="laze"
              width={"28px"}
              height={"31px"}
              alt="Logo"
            />
            <p className="text-[#081735] font-Inter font-bold text-lg ml-3">
              AI to Detect & Autofix Bad Code
            </p>
          </div>
          <div className="m-0 p-0 h-[1px] bg-[#E6E8F0]"></div>
          <div className="flex gap-16 pl-8 pr-14 py-8">
            <div>
              <p className="text-[#081735] font-Inter font-bold text-lg text-center">
                30+
              </p>
              <p className="text-[#171717] font-Inter font-normal text-sm ">
                Language Support
              </p>
            </div>

            <div>
              <p className="text-[#081735] font-Inter font-bold text-lg text-center">
                10K+
              </p>
              <p className="text-[#171717] font-Inter font-normal text-sm ">
                Developers
              </p>
            </div>
            <div>
              <p className="text-[#081735] font-Inter font-bold text-lg text-center">
                100K+
              </p>
              <p className="text-[#171717] font-Inter font-normal text-sm ">
                Houre Saved
              </p>
            </div>
          </div>
        </div>
        {/* "seconnd box" */}

        <div className="bg-white shadow-[0px_0px_24px_0px_#08173529] rounded-[24px] border-slate-700 shadow-[#08173529] ml-[16rem] mt-[-1rem] px-6 py-3 z-20 ">
          <div className="flex justify-evenly gap-24 py-2 ">
            <img
              src={pieChart}
              loading="laze"
              width={"56px"}
              height={"56px"}
              alt="PieChart"
            />
            <div>
              <div className="flex justify-start items-center">
                {" "}
                <img
                  src={upArrowIcon}
                  width={"24px"}
                  height={"24px"}
                  alt="uparrow"
                />
                <p className="font-bold text-sm font-Inter text-[#0049C6] ">
                  14%
                </p>
              </div>
              <p className="font-normal text-xs pl-2 ">This Week</p>
            </div>
          </div>
          <div className="pt-4 space-y-2">
            <p className="text-[#171717] font-Inter font-bold text-sm  text-start">
              Issues Fixed
            </p>
            <p className="text-[#081735] font-Inter font-bold text-3xl text-start ">
              500K+
            </p>
          </div>
        </div>

        <div className=" absolute bottom-0 left-0 opacity-40">
          <img
            src={bgImage}
            width={"284px"}
            height={"284px"}
            loading="laze"
            alt="bgImg"
          />
        </div>
      </div>

      {/* right side */}
      <div className="bg-[#FAFAFA] w-[100%] lg:min-w-[50%] h-full flex flex-col border-[1px]">
      <div className="mx-auto my-auto min-w-[90%]" >
      <div className="rounded-xl  bg-white  py-8 px-4 pb-2 border-[1px]">
          <div className="flex justify-center items-center gap-4 ">
            <img
              src={textLogo}
              width={"35px"}
              height={"40px"}
              loading="laze"
              alt="logo"
            />
            <p className="font-Satoshi text-3xl font-normal text-[#181D27] py-2">
              CodeAnt AI
            </p>
          </div>
          <p className="text-center font-Inter text-[32px] leadind-[48px] font-[600] pt-8">
            Welcome to CodeAnt AI
          </p>
          <div className="flex justify-center items-center space-x-0  my-6">
            <button
              className={`rounded-lg border-[1px] text-xl font-semibold  px-6 py-4 min-w-[50%]
                ${
                  activeTab === "SAAS"
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "bg-[#FAFAFA] border-[#D5D7DA] text-[#414651]"
                }`}
              onClick={() => setActiveTab("SAAS")}
            >
              SAAS
            </button>
            <button
              className={`rounded-lg border-[1px] text-xl font-semibold  border-[#D5D7DA] px-6 py-4  min-w-[50%] 
                ${
                  activeTab === "SelfHosted"
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "bg-[#FAFAFA] border-[#D5D7DA] text-[#414651]"
                }`}
              onClick={() => setActiveTab("SelfHosted")}
            >
              Self Hosted
            </button>
          </div>
          <div className="m-0 p-0 h-[1px] bg-[#E6E8F0]  "></div>
          <div className="mt-6 min-h-[310px]">
            {activeTab === "SAAS" ? (
              <div>
                <CustomBotttom icon={githubIcon} text={"Sign in with Github"} />
                <CustomBotttom
                  icon={bitbucketicon}
                  text={"Sign in with Bitbucket"}
                />
                <CustomBotttom
                  icon={azuricon}
                  text={"Sign in with Azure Devops"}
                />
                <CustomBotttom icon={gitlabicon} text={"Sign in with GitLab"} />
              </div>
            ) : (
              <div>
                <CustomBotttom icon={gitlabicon} text={"Sign in with GitLab"} />
                <CustomBotttom icon={keyicon} text={"Sign in with SSO"} />
              </div>
            )}
          </div>
        </div>
        <p className="text-center my-8 font-Inter text-md font-normal ">By signing up you agree to the <strong className="font-bold ">Privacy Policy</strong> </p>

      </div>

      </div>
    </div>
  );
}

export default SignIn;
